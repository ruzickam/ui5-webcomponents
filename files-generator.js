const {existsSync, mkdirSync, writeFileSync, readFileSync} = require('fs');
const {symbols, implementers} = require('./ts-generator/ui5-adapter/index-api-json')();
const {kebabCase, camelCase, capitalize} = require('lodash');
const {relative} = require('path');
const prettier = require("prettier");

const objectTypeMapper = (elementTagName, identifier) => {
    if (elementTagName === 'ui5-button') {
        if (identifier === 'accessibilityAttributes') {
            return `
        {
          expanded?: boolean;
          hasPopup?: 'Dialog' | 'Grid' | 'Listbox' | 'Menu' | 'Tree';
          controls?: string | HTMLElement | Array<HTMLElement | string>;
        }
      `;
        }
    }
    if (elementTagName === 'ui5-link') {
        if (identifier === 'accessibilityAttributes') {
            return `
        {
          expanded?: boolean;
          hasPopup?: 'Dialog' | 'Grid' | 'Listbox' | 'Menu' | 'Tree';
        }
      `;
        }
    }
    return 'Record<string, any>';
}

const typesMap = {
    integer: 'number',
    float: 'number',
    double: 'number',
    boolean: 'boolean',
    string: 'string',
    csscolor: 'string',
    object: objectTypeMapper,
    array: 'Array<any>',
    htmlelement: 'HTMLElement',
    element: 'Element',
    node: 'Node'
}

function getPropertyType(type, tagname, identifier) {
    const isArray = type.endsWith('[]');
    if (isArray) {
        type = type.slice(0, -2);
    }
    const mappedType = typesMap[type.toLowerCase()];
    if (!mappedType && symbols[type]) {
        if (symbols[type].kind === 'class') {
            let types = symbols[type].properties.map(p => JSON.stringify(p.type));
            types = types.length ? types : ['any'];
            if (isArray) {
                return `Array<${types.join(' | ')}>`;
            }
            return types.join(' | ');
        }
        if (symbols[type].kind === 'interface') {
            let types = implementers[type].map(c => `${c.basename}`);
            types = types.length ? types : ['any'];
            if (isArray) {
                return `Array<${types.join(' | ')}>`;
            }
            return types.join(' | ');
        } else {
            console.log('wtf');
        }
    }
    if (typeof mappedType === 'function') {
        if (isArray) {
            return `Array<${mappedType(tagname, identifier)}>`;
        }
        return mappedType(tagname, identifier);
    }
    if (isArray) {
        return `Array<${mappedType || 'any'}>`;
    }
    return mappedType || 'any';
}

function getInputs(symbol) {
    return symbol.properties.filter(prop => prop.visibility === 'public').map((property) => {
        return {
            publicName: kebabCase(property.name),
            name: camelCase(property.name),
            type: getPropertyType(property.type, symbol.tagname, camelCase(property.name)),
            defaultValue: property.defaultValue,
        }
    })
}

function getOutputs(symbol) {
    return symbol.events.filter(event => event.visibility === 'public').map((event) => {
        const camel = camelCase(event.name);
        const parameters = (event.parameters || []).reduce((acc, parameter) => {
            acc[parameter.name] = getPropertyType(parameter.type, symbol.tagname, camel);
            return acc;
        }, {});
        const eventType = !event.parameters?.length ? 'void' : `{ ${Object.keys(parameters).map(key => `'${key}': ${parameters[key]}`).join(',')} }`;
        return {
            name: camel,
            publicName: camel === event.name ? undefined : event.name,
            type: eventType,
        }
    });
}

function getSlots(symbol) {
    return symbol.slots.filter(slot => slot.visibility === 'public').map((slot) => {
        const interfaceName = slot.type.replace('[]', '');
        const canBeSelf = symbol.implements.includes(interfaceName);
        let slotComponents = implementers[interfaceName] || [];
        if (canBeSelf) {
            slotComponents = slotComponents.filter(c => c.basename !== symbol.basename);
        }
        canBeSelf && slotComponents.push(symbol);
        let type = slotComponents.length > 0 ? slotComponents.map(c => `${c.basename}Component`).join(' | ') : interfaceName;
        if (type === 'HTMLElement') {
            type = 'AnyElement';
        }
        return {
            name: slot.name,
            type,
            supportedElements: slotComponents,
            isArray: slot.type.endsWith('[]'),
        }
    })
}

const pretty = (code) => prettier.format(code, {parser: "typescript"});

for (const symbolK of Object.keys(symbols)) {
    const symbol = symbols[symbolK];
    if (symbol.tagname) {
        const inputs = getInputs(symbol);
        const outputs = getOutputs(symbol);
        const slots = getSlots(symbol);
        const storageDir = symbol.storageDir;
        if (!existsSync(storageDir)) {
            mkdirSync(storageDir, {recursive: true});
        }
        const indexFilePath = `${storageDir}/index.ts`;
        const componentFilePath = `${storageDir}/${symbol.basename}Component.ts`;
        const typeFilePath = `${storageDir}/types.ts`;

        const relativePath = p => {
            const rel = relative(storageDir, p).replace(/\.tsx?$/, '');
            if (rel.startsWith('.')) {
                return rel;
            }
            return `./${rel}`;
        };
        let typeImports = new Map();
        let childrenType = 'undefined';
        let slotsType = '';
        if (slots.length > 0) {
            const slotTypes = slots.map(slot => {
                slot.supportedElements.forEach(c => {
                    const importPath = c.resource.replace(/(.*)\/dist\/(.*)\.js$/, '$1/src/$2');
                    if (!typeImports.has(importPath)) {
                        typeImports.set(importPath, new Set());
                    }
                    typeImports.get(importPath).add(`${c.basename}Component`);
                });
                const type = ((t) => {
                    return t === 'ReactNode' ? t : `ReactElement<${t}>` + (slot.isArray ? '[]' : '');
                })(`${slot.supportedElements.map(c => `typeof ${c.basename}Component`).join(' | ') || 'ReactNode'}`);
                if (slot.name === 'default') {
                    childrenType = type;
                    return undefined;
                }
                return `slot${kebabCase(slot.name).split('-').map(capitalize).join('')}?: ${type};`;
            });
            slotsType = `interface Slots {
                ${slotTypes.filter(Boolean).join('\n')}
            }`;
        }
        typeImports = (() => {
            let imps = '';
            for (const [importPath, types] of typeImports) {
                imps += `import { ${[...types]} } from '${importPath}';\n`
            }
            return imps;
        })();
        let typesContent;
        try {
            typesContent = pretty(`
            /* eslint-disable */
            import { HTMLAttributes${slots.length > 0 ? ', ReactElement, ReactNode' : ''} } from "react";
            ${slots.length > 0 ? 'import { Slot } from "@ui5/webcomponents-base/src/jsx";\n' : ''}
            ${typeImports}
            ${slotsType}

            type ChildrenType = ${childrenType};

            type Inputs = {
                ${inputs.map(input => `${input.name}${input.defaultValue ? `?: ${input.type}` : `: ${input.type}`}`).join(';\n')}
            };
            type Outputs = {
                ${outputs.map(output => `'onUi5${kebabCase(output.name).split('-').map(capitalize).join('')}': (e: CustomEvent<${output.type}>) => void`).join(';\n')}
            };
            export type ${symbol.basename}Props = Partial<Inputs & Outputs & Omit<HTMLAttributes<HTMLElement>, 'children'> & { children?: ChildrenType }>${slotsType ? ` & Slots` : ''};
            `);
        } catch (e) {
            debugger;
        }
        const componentContent = pretty(`
            /* eslint-disable */
            import { FC } from "react";
            import { ${symbol.basename}Props } from "${relativePath(typeFilePath)}";

            export declare const ${symbol.basename}Component: FC<${symbol.basename}Props>;
        `);

        writeFileSync(typeFilePath, typesContent);

        writeFileSync(indexFilePath, pretty(`
            /* eslint-disable */
            export * from '${relativePath(typeFilePath)}';
            export * from '${relativePath(componentFilePath)}';
        `));

        if (existsSync(componentFilePath + 'x')) {
            continue;
        }
        writeFileSync(componentFilePath, componentContent);
    }
}
