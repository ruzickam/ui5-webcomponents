import{x as u}from"./lit-element-c5a2b594.js";import{l as i}from"./if-defined-c29cffe1.js";import{o as $}from"./unsafe-html-0ddd83da.js";import{D as S}from"./docs-4ba6d2dd.js";import{B as n}from"./ButtonDesign-57d82709.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-7fbe22f4.js";import"./iframe-b92ab9fd.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-ed48ef34.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const h={design:{control:"select",options:["Attention","Default","Emphasized","Negative","Positive","Transparent"]},default:{control:{type:"text"}}},A={package:"@ui5/webcomponents",since:"1.1.0"};var a=Object.freeze,I=Object.defineProperty,_=(t,B)=>a(I(t,"raw",{value:a(B||t.slice())})),r;const E="ui5-split-button",G={title:"Main/SplitButton",component:"SplitButton",parameters:{docs:{page:S({...A,component:E})}},argTypes:h},D=t=>u`<ui5-split-button
    ?disabled="${i(t.disabled)}"
    design="${i(t.design)}"
    icon="${i(t.icon)}"
    active-icon="${i(t.activeIcon)}"
    accessible-name="${i(t.accessibleName)}"
>
    ${$(t.default)}
</ui5-split-button>`,s=D.bind({});s.args={default:"Default",accessibleName:"Split Button with Accessible Name"};const e=D.bind(void 0);e.args={default:"Open Menu"};e.decorators=[t=>u(r||(r=_([`
        <ui5-menu id="menuInSplitBtnDefaultAction">
            <ui5-menu-item text="Edit" icon="add"></ui5-menu-item>
            <ui5-menu-item text="Save" icon="save"></ui5-menu-item>
            <ui5-menu-item text="Delete" icon="delete"></ui5-menu-item>
        </ui5-menu>
    `,`
    <script>
        var splitBtnWithMenuDefaultAction = document.querySelector("ui5-split-button");
        var menuInSplitBtn = document.getElementById("menuInSplitBtnDefaultAction");
        splitBtnWithMenuDefaultAction.addEventListener("ui5-arrow-click", function () {
            menuInSplitBtn.open ? menuInSplitBtn.close() : menuInSplitBtn.showAt(splitBtnWithMenuDefaultAction);
        });
    <\/script>`])),t())];const o=()=>u`
    <ui5-split-button design="${n.Emphasized}"> Emphasized </ui5-split-button>
    <ui5-split-button design="${n.Attention}"> Attention </ui5-split-button>
    <ui5-split-button design="${n.Positive}"> Positive </ui5-split-button>
    <ui5-split-button design="${n.Negative}"> Negative </ui5-split-button>
    <ui5-split-button design="${n.Transparent}"> Transparent </ui5-split-button>
`;var p,c,l;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:'args => html`<ui5-split-button\n    ?disabled="${ifDefined(args.disabled)}"\n    design="${ifDefined(args.design)}"\n    icon="${ifDefined(args.icon)}"\n    active-icon="${ifDefined(args.activeIcon)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-split-button>`',...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,d,b;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"Template.bind(this)",...(b=(d=e.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var g,f,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:'() => html`\n    <ui5-split-button design="${ButtonDesign.Emphasized}"> Emphasized </ui5-split-button>\n    <ui5-split-button design="${ButtonDesign.Attention}"> Attention </ui5-split-button>\n    <ui5-split-button design="${ButtonDesign.Positive}"> Positive </ui5-split-button>\n    <ui5-split-button design="${ButtonDesign.Negative}"> Negative </ui5-split-button>\n    <ui5-split-button design="${ButtonDesign.Transparent}"> Transparent </ui5-split-button>\n`',...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const J=["Basic","OpeningMenu","DifferentDesigns"];export{s as Basic,o as DifferentDesigns,e as OpeningMenu,J as __namedExportsOrder,G as default};
//# sourceMappingURL=SplitButton.stories-703d65e5.js.map
