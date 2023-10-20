import{x as w}from"./lit-element-c5a2b594.js";import{l as s}from"./if-defined-c29cffe1.js";import{o as g}from"./unsafe-html-0ddd83da.js";import{D as l}from"./docs-a58dd199.js";import{B as P}from"./BreadcrumbsDesign-ed8df031.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-d23eae87.js";import"./iframe-17871902.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-9c2f7062.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const f={design:{control:"select",options:["NoCurrentPage","Standard"]},separatorStyle:{control:"select",options:["BackSlash","DoubleBackSlash","DoubleGreaterThan","DoubleSlash","GreaterThan","Slash"]},default:{control:{type:"text"}},"item-click":{description:"Fires when a <code>BreadcrumbsItem</code> is clicked. <b>Note:</b> You can prevent browser location change by calling <code>event.preventDefault()</code>.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"The clicked item."},{name:"altKey",type:"Boolean",description:'Returns whether the "ALT" key was pressed when the event was triggered.'},{name:"ctrlKey",type:"Boolean",description:'Returns whether the "CTRL" key was pressed when the event was triggered.'},{name:"metaKey",type:"Boolean",description:'Returns whether the "META" key was pressed when the event was triggered.'},{name:"shiftKey",type:"Boolean",description:'Returns whether the "SHIFT" key was pressed when the event was triggered.'}]}}},y={package:"@ui5/webcomponents",since:"1.0.0-rc.15"},v="ui5-breadcrumbs",E={title:"Main/Breadcrumbs",component:"Breadcrumbs",subcomponents:{BreadcrumbsItem:"BreadcrumbItem"},parameters:{docs:{page:l({...y,component:v})}},argTypes:f},h=t=>w`<ui5-breadcrumbs
        design="${s(t.design)}"
        separator-style="${s(t.separatorStyle)}"
    >
    ${g(t.default)}
</ui5-breadcrumbs>`,e=h.bind({});e.args={default:`<ui5-breadcrumbs-item href="https://www.sap.com" target="_blank">Root Page </ui5-breadcrumbs-item>
    <ui5-breadcrumbs-item href="https://www.sap.com">Parent Page</ui5-breadcrumbs-item>
    <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
    `};const r=h.bind({});r.args={design:P.NoCurrentPage,default:`<ui5-breadcrumbs-item href="https://www.sap.com" target="_blank">Root Page
</ui5-breadcrumbs-item>
<ui5-breadcrumbs-item href="https://www.sap.com">Parent Page</ui5-breadcrumbs-item>`};const a=()=>w`
    <div>
        <ui5-breadcrumbs separator-style="Slash">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="BackSlash">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="DoubleBackSlash">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="DoubleGreaterThan">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="DoubleSlash">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="GreaterThan">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
`;var i,m,u;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:'args => html`<ui5-breadcrumbs\n        design="${ifDefined(args.design)}"\n        separator-style="${ifDefined(args.separatorStyle)}"\n    >\n    ${unsafeHTML(args.default)}\n</ui5-breadcrumbs>`',...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var b,c,n;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:'args => html`<ui5-breadcrumbs\n        design="${ifDefined(args.design)}"\n        separator-style="${ifDefined(args.separatorStyle)}"\n    >\n    ${unsafeHTML(args.default)}\n</ui5-breadcrumbs>`',...(n=(c=r.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var d,o,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`() => html\`
    <div>
        <ui5-breadcrumbs separator-style="Slash">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="BackSlash">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="DoubleBackSlash">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="DoubleGreaterThan">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="DoubleSlash">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="GreaterThan">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
\``,...(p=(o=a.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const A=["Basic","NoCurrentPage","SeparatorStyle"];export{e as Basic,r as NoCurrentPage,a as SeparatorStyle,A as __namedExportsOrder,E as default};
//# sourceMappingURL=Breadcrumbs.stories-cb0ca12c.js.map
