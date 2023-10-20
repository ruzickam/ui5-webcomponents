import{x as M}from"./lit-element-c5a2b594.js";import{l as C}from"./if-defined-c29cffe1.js";import{o as $}from"./unsafe-html-0ddd83da.js";import{T as D}from"./ToolbarAlign-e91e0ed7.js";import{D as A}from"./docs-a58dd199.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-d23eae87.js";import"./iframe-17871902.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-9c2f7062.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const B={alignContent:{control:"select",options:["End","Start"]},default:{control:{type:"text"}}},R={package:"@ui5/webcomponents",since:"1.17.0"},N="ui5-toolbar",X={title:"Main/Toolbar",component:"Toolbar",subcomponents:{ToolbarButton:"ToolbarButton",ToolbarSelect:"ToolbarSelect",ToolbarSelectOption:"ToolbarSelectOption",ToolbarSeparator:"ToolbarSeparator",ToolbarSpacer:"ToolbarSpacer"},argTypes:B,parameters:{docs:{page:A({...R,component:N})}}},a=n=>M`<ui5-toolbar
        align-content="${C(n.alignContent)}"
    >
        ${$(n.default)}
</ui5-toolbar>`,t=a.bind({});t.storyName="Basic";t.args={default:`
    <ui5-toolbar-button 
    icon="decline"
    text="Mid 2">
    </ui5-toolbar-button>
    <ui5-toolbar-button
        icon="add"
        text="Right 1">
    </ui5-toolbar-button>
    <ui5-toolbar-button
        icon="employee"
        text="Right 4">
    </ui5-toolbar-button>
    <ui5-toolbar-button
        id="myOverflowBtn"
        icon="employee"
        text="Call me later">
    </ui5-toolbar-button>`};const i=a.bind({});i.args={default:`
    <ui5-toolbar-button icon="add" text="Left 1 (long)" width="150px" design="Default"></ui5-toolbar-button>
    <ui5-toolbar-button icon="decline" text="Left 2"></ui5-toolbar-button>
    <ui5-toolbar-button icon="employee" text="Left 3"></ui5-toolbar-button>
    <ui5-toolbar-select>
            <ui5-toolbar-select-option>1</ui5-toolbar-select-option>
            <ui5-toolbar-select-option selected>2</ui5-toolbar-select-option>
            <ui5-toolbar-select-option>3</ui5-toolbar-select-option>
        </ui5-toolbar-select>
    <ui5-toolbar-button icon="add" text="Mid 1"></ui5-toolbar-button>
    <ui5-toolbar-spacer></ui5-toolbar-spacer>
    <ui5-toolbar-button icon="decline" text="Mid 2"></ui5-toolbar-button>
    <ui5-toolbar-button icon="add" text="Right 1"></ui5-toolbar-button>
    <ui5-toolbar-button icon="employee" text="Right 4"></ui5-toolbar-button>
    <ui5-toolbar-button id="myOverflowBtn" icon="employee" text="Call me later"></ui5-toolbar-button>`};const l=a.bind({});l.args={default:`
        <ui5-toolbar-button icon="add" text="Left 1 (long)" width="150px" design="Default"></ui5-toolbar-button>
        <ui5-toolbar-button icon="decline" text="Left 2"></ui5-toolbar-button>
        <ui5-toolbar-button icon="employee" text="Left 3"></ui5-toolbar-button>
        <ui5-toolbar-select>
            <ui5-toolbar-select-option>1</ui5-toolbar-select-option>
            <ui5-toolbar-select-option selected>2</ui5-toolbar-select-option>
            <ui5-toolbar-select-option>3</ui5-toolbar-select-option>
        </ui5-toolbar-select>
        <ui5-toolbar-button icon="add" text="Mid 1"></ui5-toolbar-button>
        <ui5-toolbar-separator></ui5-toolbar-separator>
        <ui5-toolbar-button icon="decline" text="Mid 2"></ui5-toolbar-button>
        <ui5-toolbar-button icon="add" text="Right 1"></ui5-toolbar-button>
        <ui5-toolbar-button icon="employee" text="Right 4"></ui5-toolbar-button>
        <ui5-toolbar-button id="myOverflowBtn" icon="employee" text="Call me later"></ui5-toolbar-button>`};const o=a.bind({});o.storyName="'AlwaysOverflow' items";o.args={default:`
        <ui5-toolbar-button icon="add" text="Left 1 (long)" width="150px" design="Default"></ui5-toolbar-button>
        <ui5-toolbar-button icon="decline" text="Left 2"></ui5-toolbar-button>
        <ui5-toolbar-button icon="employee" text="Left 3"></ui5-toolbar-button>
        <ui5-toolbar-select>
            <ui5-toolbar-select-option>1</ui5-toolbar-select-option>
            <ui5-toolbar-select-option selected>2</ui5-toolbar-select-option>
            <ui5-toolbar-select-option>3</ui5-toolbar-select-option>
        </ui5-toolbar-select>
        <ui5-toolbar-button icon="add" text="Mid 1"></ui5-toolbar-button>
        <ui5-toolbar-button icon="decline" text="Mid 2" overflow-priority="AlwaysOverflow"></ui5-toolbar-button>
        <ui5-toolbar-button icon="add" text="Right 1" overflow-priority="AlwaysOverflow"></ui5-toolbar-button>
        <ui5-toolbar-button icon="employee" text="Right 4" overflow-priority="AlwaysOverflow"></ui5-toolbar-button>
        <ui5-toolbar-button id="myOverflowBtn" icon="employee" text="Call me later" overflow-priority="AlwaysOverflow"></ui5-toolbar-button>`};const e=a.bind({});e.storyName="'NeverOverflow' items";e.args={default:`
        <ui5-toolbar-button icon="add" text="Left 1 (long)" width="150px" design="Default"></ui5-toolbar-button>
        <ui5-toolbar-button icon="decline" text="Left 2" ></ui5-toolbar-button>
        <ui5-toolbar-button icon="employee" text="Left 3"></ui5-toolbar-button>
        <ui5-toolbar-select>
            <ui5-toolbar-select-option>1</ui5-toolbar-select-option>
            <ui5-toolbar-select-option selected>2</ui5-toolbar-select-option>
            <ui5-toolbar-select-option>3</ui5-toolbar-select-option>
        </ui5-toolbar-select>
        <ui5-toolbar-button icon="add" text="Mid 1"></ui5-toolbar-button>
        <ui5-toolbar-button icon="decline" text="Mid 2" ></ui5-toolbar-button>
        <ui5-toolbar-button icon="add" text="Right 1" overflow-priority="NeverOverflow"></ui5-toolbar-button>
        <ui5-toolbar-button icon="employee" text="Right 4" ></ui5-toolbar-button>
        <ui5-toolbar-button id="myOverflowBtn" icon="employee" text="Call me later" overflow-priority="NeverOverflow"></ui5-toolbar-button>`};const r=a.bind({});r.storyName="'Start' aligned items";r.args={alignContent:D.Start,default:t.args.default};var u,b,s;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return html\`<ui5-toolbar
        align-content="\${ifDefined(args.alignContent)}"
    >
        \${unsafeHTML(args.default)}
</ui5-toolbar>\`;
}`,...(s=(b=t.parameters)==null?void 0:b.docs)==null?void 0:s.source}}};var c,p,d;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return html\`<ui5-toolbar
        align-content="\${ifDefined(args.alignContent)}"
    >
        \${unsafeHTML(args.default)}
</ui5-toolbar>\`;
}`,...(d=(p=i.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,f,g;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  return html\`<ui5-toolbar
        align-content="\${ifDefined(args.alignContent)}"
    >
        \${unsafeHTML(args.default)}
</ui5-toolbar>\`;
}`,...(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var x,y,w;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  return html\`<ui5-toolbar
        align-content="\${ifDefined(args.alignContent)}"
    >
        \${unsafeHTML(args.default)}
</ui5-toolbar>\`;
}`,...(w=(y=o.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var v,h,S;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  return html\`<ui5-toolbar
        align-content="\${ifDefined(args.alignContent)}"
    >
        \${unsafeHTML(args.default)}
</ui5-toolbar>\`;
}`,...(S=(h=e.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var T,O,L;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  return html\`<ui5-toolbar
        align-content="\${ifDefined(args.alignContent)}"
    >
        \${unsafeHTML(args.default)}
</ui5-toolbar>\`;
}`,...(L=(O=r.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};const Y=["Basic","WithSpacer","WithSeparator","AlwaysOverflowItems","NeverOverflowItems","StartAlignedItems"];export{o as AlwaysOverflowItems,t as Basic,e as NeverOverflowItems,r as StartAlignedItems,l as WithSeparator,i as WithSpacer,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=Toolbar.stories-b201fe53.js.map
