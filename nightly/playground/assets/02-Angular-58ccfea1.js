import{j as e}from"./jsx-runtime-5fc188ad.js";import{M as r}from"./index-b555ef6c.js";import{u as t}from"./index-cf712c1b.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-a451e07b.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";function i(o){const n=Object.assign({h1:"h1",p:"p",h3:"h3",pre:"pre",code:"code",h2:"h2",a:"a",h4:"h4"},t(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Docs/Frameworks/Angular"}),`
`,e.jsx(n.h1,{id:"get-started-with-ui5-web-components--angular",children:"Get Started with UI5 Web Components & Angular"}),`
`,e.jsx(n.p,{children:"In this tutorial, you will learn how to add UI5 Web Components to your application. The UI5 Web Components can be added both to new Angular applications and to already existing ones."}),`
`,e.jsx(n.h3,{id:"step-1-install-angular-cli",children:"Step 1. Install Angular CLI."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install -g @angular/cli
`})}),`
`,e.jsx(n.h3,{id:"step-2-create-a-new-angular-application",children:"Step 2. Create a new Angular application."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`ng new ui5-web-components-application
cd ui5-web-components-application
`})}),`
`,e.jsx(n.h3,{id:"step-3-add-ui5-web-components",children:"Step 3. Add UI5 Web Components."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @ui5/webcomponents --save
`})}),`
`,e.jsx(n.h3,{id:"step-4-allow-the-use-of-custom-elements-in-angular",children:"Step 4. Allow the use of custom elements in Angular."}),`
`,e.jsxs(n.p,{children:["Before using UI5 Web Components, you have to allow the use of custom elements in Angular. To do so, import CUSTOM_ELEMENTS_SCHEMA in ",e.jsx(n.code,{children:"app.module.ts"})," :"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ..., CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
`})}),`
`,e.jsx(n.p,{children:"After importing it, add it to the schemas array:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`imports: [
    ...
],
schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
`})}),`
`,e.jsx(n.h3,{id:"step-5-import-the-components-you-are-going-to-use",children:"Step 5. Import the components you are going to use."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import "@ui5/webcomponents/dist/Button.js";
`})}),`
`,e.jsx(n.h3,{id:"step-6-use-the-imported-elements-in-your-application",children:"Step 6. Use the imported elements in your application."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-button>Hello world!</ui5-button>
`})}),`
`,e.jsx(n.h3,{id:"step-7-launch-the-application",children:"Step 7. Launch the application."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`ng serve -o
`})}),`
`,e.jsx(n.h2,{id:"additional-info",children:"Additional Info"}),`
`,e.jsx(n.h3,{id:"two-way-data-binding",children:"Two-Way Data Binding"}),`
`,e.jsxs(n.p,{children:[`You can use two-way data binding with the following components: CheckBox, RadioButton, Input, DatePicker, Switch, TextArea.
In order to use it, you have to use a library called `,e.jsx(n.a,{href:"https://github.com/hotforfeature/origami",target:"_blank",rel:"nofollow noopener noreferrer",children:"Origami"})," that provides advanced support for two-way data binding of custom elements."]}),`
`,e.jsx(n.p,{children:"Example:"}),`
`,e.jsx(n.h4,{id:"1-install-origami",children:"1. Install Origami."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @codebakery/origami
`})}),`
`,e.jsx(n.h4,{id:"2-import-the-origamiformsmodule-from-origami",children:"2. Import the OrigamiFormsModule from Origami."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OrigamiFormsModule } from '@codebakery/origami/forms';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, OrigamiFormsModule],
  declarations: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
`})}),`
`,e.jsx(n.h4,{id:"3-use-origami-in-your-template",children:"3. Use Origami in your template."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ui5-input [(ngModel)]="value" origami></ui5-input>
`})}),`
`,e.jsx(n.h4,{id:"4-make-angular-boot-after-ui5-web-components-are-defined",children:"4. Make Angular boot after UI5 Web Components are defined."}),`
`,e.jsxs(n.p,{children:["Add the ",e.jsx(n.code,{children:"APP_INITIALIZER"})," provider to the module where you are using UI5 Web Components. In order to do so, import ",e.jsx(n.code,{children:"APP_INITIALIZER"})," and add it to the providers array like this (in this example we will add it to the ",e.jsx(n.code,{children:"app.module.ts"}),"):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { ..., APP_INITIALIZER  } from '@angular/core';

import CheckBox from "@ui5/webcomponents/dist/CheckBox";

function onAppInit(): () => Promise<any> {
  return (): Promise<any> => {
    return CheckBox.define();
  };
}

@NgModule({
  declarations: [
        ...
  ],
  imports: [
        ...
  ],
  providers: [
    {
        provide: APP_INITIALIZER,
        useFactory: onAppInit,
        multi: true
    },
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
`})})]})}function j(o={}){const{wrapper:n}=Object.assign({},t(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(i,o)})):i(o)}export{j as default};
//# sourceMappingURL=02-Angular-58ccfea1.js.map
