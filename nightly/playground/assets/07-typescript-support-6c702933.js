import{j as e}from"./jsx-runtime-5fc188ad.js";import{M as a}from"./index-74d14d06.js";import{u as r}from"./index-cf712c1b.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-75ecffaa.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";function s(t){const n=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",pre:"pre",a:"a"},r(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Docs/Getting started/Typescript support"}),`
`,e.jsx(n.h1,{id:"typescript-support",children:"TypeScript Support"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"TypeScript Support is enabled for both component development and component consumption."})}),`
`,e.jsxs(n.p,{children:["Since version ",e.jsx(n.code,{children:"1.11.0"}),", we have been providing TypeScript definitions under an experimental flag, and starting from version ",e.jsx(n.code,{children:"1.19.0"}),", all TypeScript definitions are considered ",e.jsx(n.code,{children:"stable"}),`.
With TypeScript definitions you will benefit from static code checks, autocompletion, and other expected features as expected in a TypeScript application.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," In exceptional cases, some of the available TypeScript types may change. In such instances, we will document all changes in a prominent manner within our release change log."]}),`
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
`,e.jsxs(n.p,{children:["Next: ",e.jsx(n.a,{href:"./?path=/docs/docs-getting-started-wrapping-up--docs",children:"Wrapping Up"})]})]})}function j(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(s,t)})):s(t)}export{j as default};
//# sourceMappingURL=07-typescript-support-6c702933.js.map
