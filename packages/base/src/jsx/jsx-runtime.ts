import {TemplateResult} from "lit-html";

export * from 'react/jsx-runtime';
import {
    html,
    svg,
    repeat,
    classMap,
    styleMap,
    ifDefined,
    unsafeHTML,
    scopeTag
} from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

export function jsx(context: any, tags: Array<string>, suffix: string) {
    return (tagname: string, props: Record<string, any> & { props: TemplateResult }) => {
        const tag = suffix && tagname.startsWith('ui5') ? scopeTag(tagname, tags, suffix) : tagname;
        const attributes = Object.entries(props).reduce((acc: TemplateResult[], [key, value]) => {
            if (key === 'children') {
                return acc;
            }
            acc.push(html`${key}=${value}`);
            return acc;
        }, []).join(' ');
        return html`
            <${tag} ${attributes}>
                ${props.children || ''}
            </${tag}>`;
    }
}

export {jsx as jsxs};
