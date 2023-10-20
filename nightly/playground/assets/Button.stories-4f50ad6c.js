import{x as u}from"./lit-element-c5a2b594.js";import{l as i}from"./if-defined-c29cffe1.js";import{o as $}from"./unsafe-html-0ddd83da.js";import{D as f}from"./docs-29da5e12.js";import{B as t}from"./ButtonDesign-57d82709.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-30187b9d.js";import"./iframe-42e34fdf.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-60f77cb7.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const B={design:{control:"select",options:["Attention","Default","Emphasized","Negative","Positive","Transparent"]},type:{control:"select",options:["Button","Reset","Submit"]},default:{control:{type:"text"}}},D={package:"@ui5/webcomponents"},v="ui5-button",H={title:"Main/Button",component:"Button",parameters:{docs:{page:f({...D,component:v})}},argTypes:B},N=n=>u`<ui5-button
    design="${i(n.design)}"
    ?disabled="${i(n.disabled)}"
    icon="${i(n.icon)}"
    ?icon-end="${i(n.iconEnd)}"
    tooltip="${i(n.tooltip)}"
    accessible-name="${i(n.accessibleName)}"
    accessible-name-ref="${i(n.accessibleNameRef)}"
    accessibility-attributes="${i(n.accessibilityAttributes)}"
>
    ${$(n.default)}
</ui5-button>`,e=N.bind({});e.args={default:"Button Text",accessibleName:"Button with Accessible Name"};const s=()=>u`
    <ui5-button design="${t.Emphasized}"> Emphasized </ui5-button>
    <ui5-button design="${t.Attention}"> Attention </ui5-button>
    <ui5-button design="${t.Positive}"> Positive </ui5-button>
    <ui5-button design="${t.Negative}"> Negative </ui5-button>
    <ui5-button design="${t.Transparent}"> Transparent </ui5-button>
`,o=()=>u`
    <ui5-button design="${t.Emphasized}" icon="business-suite/icon-target"></ui5-button>
    <ui5-button design="${t.Attention}" icon="message-warning" tooltip="Warning Button"></ui5-button>
    <ui5-button design="${t.Positive}" icon="business-suite/icon-completed" tooltip="Positive Button"></ui5-button>
    <ui5-button design="${t.Negative}" icon="cancel" tooltip="Negative Button"></ui5-button>
    <ui5-button design="${t.Transparent}" icon="account" tooltip="Transparent Button"></ui5-button>
`;o.storyName="Icon-Only Buttons";var a,r,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:'args => html`<ui5-button\n    design="${ifDefined(args.design)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    icon="${ifDefined(args.icon)}"\n    ?icon-end="${ifDefined(args.iconEnd)}"\n    tooltip="${ifDefined(args.tooltip)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    accessibility-attributes="${ifDefined(args.accessibilityAttributes)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-button>`',...(c=(r=e.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var b,p,d;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:'() => html`\n    <ui5-button design="${ButtonDesign.Emphasized}"> Emphasized </ui5-button>\n    <ui5-button design="${ButtonDesign.Attention}"> Attention </ui5-button>\n    <ui5-button design="${ButtonDesign.Positive}"> Positive </ui5-button>\n    <ui5-button design="${ButtonDesign.Negative}"> Negative </ui5-button>\n    <ui5-button design="${ButtonDesign.Transparent}"> Transparent </ui5-button>\n`',...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,g,l;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:'() => html`\n    <ui5-button design="${ButtonDesign.Emphasized}" icon="business-suite/icon-target"></ui5-button>\n    <ui5-button design="${ButtonDesign.Attention}" icon="message-warning" tooltip="Warning Button"></ui5-button>\n    <ui5-button design="${ButtonDesign.Positive}" icon="business-suite/icon-completed" tooltip="Positive Button"></ui5-button>\n    <ui5-button design="${ButtonDesign.Negative}" icon="cancel" tooltip="Negative Button"></ui5-button>\n    <ui5-button design="${ButtonDesign.Transparent}" icon="account" tooltip="Transparent Button"></ui5-button>\n`',...(l=(g=o.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};const L=["Basic","DifferentDesigns","IconOnlyButtons"];export{e as Basic,s as DifferentDesigns,o as IconOnlyButtons,L as __namedExportsOrder,H as default};
//# sourceMappingURL=Button.stories-4f50ad6c.js.map
