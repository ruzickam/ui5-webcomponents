import{j as e}from"./jsx-runtime-5fc188ad.js";import{M as i}from"./index-5feae5b2.js";import{u as o}from"./index-cf712c1b.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-83b65eaa.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";function s(t){const n=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",pre:"pre",a:"a"},o(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Docs/Getting started/Typescript support"}),`
`,e.jsx(n.h1,{id:"typescript-support",children:"TypeScript Support"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note: TypeScript support is experimental and subject to change"}),". If you consume the web components via TypeScript, you might have to adjust your code before the TypeScript definitions become final and officially supported."]}),`
`,e.jsxs(n.p,{children:["Since ",e.jsx(n.code,{children:"1.11.0"})," we are providing ",e.jsx(n.code,{children:"TypeScript definitions"})," (as ",e.jsx(n.code,{children:".d.ts"})," files) for all framework's and components' APIs, available to applications, written in TypeScript. Previously, without definitions, the usage of UI5 Web Components in TypeScript application was not optimal as the types have been missing and inferred by the TS compiler as ",e.jsx(n.code,{children:"any"}),`.
Now, when accessing a public API, you will benefit from static code checks, autocompletion, etc. as expected in a TypeScript app.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Example:"})," usage of ",e.jsx(n.code,{children:"setLanguage"})," from ",e.jsx(n.code,{children:"@ui5/webcomponents-base"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import  { setLanguage } from "@ui5/webcomponents-base/dist/config/Language.js";

setLanguage("de");

`})}),`
`,e.jsx(n.p,{children:"You will get a proper documentation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`setLanguage(language: string): Promise<void>

Changes the current language, re-fetches all message bundles, updates all language-aware components and returns a promise that resolves when all rendering is done.

@public
@returns
`})}),`
`,e.jsx(n.p,{children:"When you pass a wrong argument:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`setLanguage(false)
`})}),`
`,e.jsx(n.p,{children:"You will get a TypeScript error:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`Argument of type 'boolean' is not assignable to parameter of type 'string'.
`})}),`
`,e.jsxs(n.p,{children:["Next: ",e.jsx(n.a,{href:"./?path=/docs/docs-getting-started-wrapping-up--docs",children:"Wrapping Up"})]})]})}function x(t={}){const{wrapper:n}=Object.assign({},o(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(s,t)})):s(t)}export{x as default};
//# sourceMappingURL=07-typescript-support-6b9d3d0a.js.map
