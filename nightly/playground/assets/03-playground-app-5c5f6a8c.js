import{j as e}from"./jsx-runtime-5fc188ad.js";import{M as s}from"./index-b05c5348.js";import{u as l}from"./index-cf712c1b.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-989ebc79.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";function r(o){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code"},l(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Docs/Contributing/Playground app"}),`
`,e.jsx(n.h1,{id:"running-the-ui5-web-components-playground-app-locally",children:"Running the UI5 Web Components Playground App Locally"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.a,{href:"https://sap.github.io/ui5-webcomponents/",target:"_blank",rel:"nofollow noopener noreferrer",children:"deployed"}),` playground can be run locally to test your changes and samples.
In order to do so, you have to follow the steps below:`]}),`
`,e.jsx(n.h2,{id:"1-install-dependencies",children:"1. Install dependencies."}),`
`,e.jsx(n.p,{children:"In the root directory run:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn install
`})}),`
`,e.jsx(n.h2,{id:"2-build-the-project-bundler",children:"2. Build the project Bundler."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn build #this is necessary only once.
`})}),`
`,e.jsx(n.p,{children:"Or if you want to test your changes live in storybook, run:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn start
`})}),`
`,e.jsx(n.h2,{id:"3-go-to-the-playground-package",children:"3. Go to the playground package."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`cd packages/playground
`})}),`
`,e.jsx(n.h2,{id:"4-start-the-playground-locally",children:"4. Start the playground locally"}),`
`,e.jsx(n.p,{children:"In your terminal, run the following command:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn storybook
`})}),`
`,e.jsxs(n.p,{children:["This will build all the necessary assets and will start local server on your machine. To access the playground, visit: ",e.jsx(n.a,{href:"http://localhost:6006/",target:"_blank",rel:"nofollow noopener noreferrer",children:"http://localhost:6006/"})]})]})}function y(o={}){const{wrapper:n}=Object.assign({},l(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(r,o)})):r(o)}export{y as default};
//# sourceMappingURL=03-playground-app-5c5f6a8c.js.map
