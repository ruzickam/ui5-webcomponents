import{x as m}from"./lit-element-c5a2b594.js";import{o as w}from"./unsafe-html-0ddd83da.js";import{l as o}from"./if-defined-c29cffe1.js";import{D as O}from"./docs-a58dd199.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-d23eae87.js";import"./iframe-17871902.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-9c2f7062.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const M={default:{control:{type:"text"}},close:{description:"Closes the Menu.",table:{category:"methods"}},showAt:{description:"Shows the Menu near the opener element.",table:{category:"methods"},UI5CustomData:{parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}]}},"before-close":{description:"Fired before the menu is closed. This event can be cancelled, which will prevent the menu from closing. <b>This event does not bubble.</b>",table:{category:"events"},UI5CustomData:{parameters:[{name:"escPressed",type:"boolean",description:"Indicates that <code>ESC</code> key has triggered the event."}]}},"before-open":{description:"Fired before the menu is opened. This event can be cancelled, which will prevent the menu from opening. <b>This event does not bubble.</b> <b>Note:</b> Since 1.14.0 the event is also fired before a sub-menu opens.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"The <code>ui5-menu-item</code> that triggers opening of the sub-menu or undefined when fired upon root menu opening. <b>Note:</b> available since 1.14.0."}]}},"item-click":{description:"Fired when an item is being clicked. <b>Note:</b> Since 1.17.0 the event is preventable, allowing the menu to remain open after an item is pressed.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"The currently clicked menu item."},{name:"text",type:"string",description:"The text of the currently clicked menu item."}]}}},D={package:"@ui5/webcomponents",since:"1.3.0"};var a=Object.freeze,$=Object.defineProperty,r=(e,y)=>a($(e,"raw",{value:a(y||e.slice())})),s,d,c;const S="ui5-menu",q={title:"Main/Menu",component:"Menu",subcomponents:{MenuItem:"MenuItem"},parameters:{docs:{page:O({...D,component:S})}},argTypes:M},u=e=>m`<ui5-menu
    header-text="${o(e.headerText)}"
    opener="${o(e.opener)}"
    ?open="${o(e.open)}"
    id="${o(e.id)}"
>
    ${w(e.default)}
</ui5-menu>`,t=u.bind({});t.storyName="Basic";t.args={id:"menuBasic",headerText:"Basic Menu with Items",default:`<ui5-menu-item text="New File" icon="add-document"></ui5-menu-item>
<ui5-menu-item text="New Folder" icon="add-folder" disabled=""></ui5-menu-item>
<ui5-menu-item text="Open" icon="open-folder" starts-section=""></ui5-menu-item>
<ui5-menu-item text="Close"></ui5-menu-item>
<ui5-menu-item text="Preferences" icon="action-settings" starts-section=""></ui5-menu-item>
<ui5-menu-item text="Exit" icon="journey-arrive"></ui5-menu-item>`};t.decorators=[e=>m(s||(s=r([`<ui5-button id="btnOpenBasic" class="samples-margin">Open Menu</ui5-button> <br/>
    `,`
    <script>
        btnOpenBasic.addEventListener("click", function(event) {
            menuBasic.showAt(btnOpenBasic);
        });
    <\/script>`])),e())];t.parameters={docs:{story:{inline:!1}}};const n=u.bind({});n.storyName="Menu with Submenu";n.args={id:"menuSubs",default:`<ui5-menu-item text="New File" icon="add-document"></ui5-menu-item>
<ui5-menu-item text="New Folder" icon="add-folder" disabled=""></ui5-menu-item>
<ui5-menu-item text="Open" icon="open-folder" starts-section="">
    <ui5-menu-item text="Open Locally" icon="open-folder">
        <ui5-menu-item text="Open from C"></ui5-menu-item>
        <ui5-menu-item text="Open from D"></ui5-menu-item>
        <ui5-menu-item text="Open from E"></ui5-menu-item>
    </ui5-menu-item>
    <ui5-menu-item text="Open from Cloud"></ui5-menu-item>
</ui5-menu-item>
<ui5-menu-item text="Save" icon="save">
    <ui5-menu-item text="Save Locally" icon="save">
        <ui5-menu-item text="Save on C" icon="save"></ui5-menu-item>
        <ui5-menu-item text="Save on D" icon="save"></ui5-menu-item>
        <ui5-menu-item text="Save on E" icon="save"></ui5-menu-item>
    </ui5-menu-item>
    <ui5-menu-item text="Save on Cloud" icon="upload-to-cloud"></ui5-menu-item>
</ui5-menu-item>
<ui5-menu-item text="Close"></ui5-menu-item>
<ui5-menu-item text="Preferences" icon="action-settings" starts-section=""></ui5-menu-item>
<ui5-menu-item text="Exit" icon="journey-arrive"></ui5-menu-item>`};n.decorators=[e=>m(d||(d=r([`<ui5-button id="btnOpenBasic" class="samples-margin">Open Menu</ui5-button> <br/>
    `,`
    <script>
        btnOpenBasic.addEventListener("click", function(event) {
            menuSubs.showAt(btnOpenBasic);
        });
    <\/script>`])),e())];n.parameters={docs:{story:{inline:!1}}};const i=u.bind({});i.storyName="Menu Items with Additional Text";i.args={id:"menuAdditionalText",default:`<ui5-menu-item text="New File" icon="add-document" additional-text="Ctrl+N"></ui5-menu-item>
<ui5-menu-item text="New Folder" icon="add-folder" additional-text="Ctrl+F" disabled=""></ui5-menu-item>
<ui5-menu-item text="Open" icon="open-folder" starts-section=""></ui5-menu-item>
<ui5-menu-item text="Close"></ui5-menu-item>
<ui5-menu-item text="Preferences" icon="action-settings" starts-section=""></ui5-menu-item>
<ui5-menu-item text="Exit" icon="journey-arrive" additional-text="Ctrl+X"></ui5-menu-item>`};i.decorators=[e=>m(c||(c=r([`<ui5-button id="btnOpenAdditionalText" class="samples-margin">Open Menu</ui5-button> <br/>
    `,`
    <script>
        btnOpenAdditionalText.addEventListener("click", function(event) {
            menuAdditionalText.showAt(btnOpenAdditionalText);
        });
    <\/script>`])),e())];i.parameters={docs:{story:{inline:!1}}};var p,l,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:'args => html`<ui5-menu\n    header-text="${ifDefined(args.headerText)}"\n    opener="${ifDefined(args.opener)}"\n    ?open="${ifDefined(args.open)}"\n    id="${ifDefined(args.id)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-menu>`',...(f=(l=t.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};var b,x,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:'args => html`<ui5-menu\n    header-text="${ifDefined(args.headerText)}"\n    opener="${ifDefined(args.opener)}"\n    ?open="${ifDefined(args.open)}"\n    id="${ifDefined(args.id)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-menu>`',...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var g,v,T;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:'args => html`<ui5-menu\n    header-text="${ifDefined(args.headerText)}"\n    opener="${ifDefined(args.opener)}"\n    ?open="${ifDefined(args.open)}"\n    id="${ifDefined(args.id)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-menu>`',...(T=(v=i.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const G=["Basic","SubMenu","AditionalText"];export{i as AditionalText,t as Basic,n as SubMenu,G as __namedExportsOrder,q as default};
//# sourceMappingURL=Menu.stories-24ea7b9f.js.map
