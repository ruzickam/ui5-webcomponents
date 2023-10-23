import{x as p}from"./lit-element-c5a2b594.js";import{D as v}from"./docs-e6815d07.js";import{o as H}from"./unsafe-html-0ddd83da.js";import{l}from"./if-defined-c29cffe1.js";import{T as i}from"./TitleLevel-6629a879.js";import{W as w}from"./WrappingType-b81e595a.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-629bbde6.js";import"./iframe-a5c46e66.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-61b789f7.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const h={level:{control:"select",options:["H1","H2","H3","H4","H5","H6"]},wrappingType:{control:"select",options:["None","Normal"]},default:{control:{type:"text"}}},y={package:"@ui5/webcomponents"},D="ui5-title",C={title:"Main/Title",component:"Title",parameters:{docs:{page:v({...y,component:D})}},argTypes:h},r=e=>p`
<ui5-title
    level="${l(e.level)}"
    wrapping-type="${l(e.wrappingType)}"
>${H(e.default)}</ui5-title>`;r.decorators=[(e,{args:t})=>p`
${e({args:{...t,level:i.H1}})}
${e({args:{...t,level:i.H2}})}
${e({args:{...t,level:i.H3}})}
${e({args:{...t,level:i.H4}})}
${e({args:{...t,level:i.H5}})}
${e({args:{...t,level:i.H6}})}`];const a=r.bind({});a.args={default:"Title Text"};a.decorators=[...r.decorators];const o=r.bind({});o.args={default:"Long Title Text Text Text Which Wraps",wrappingType:w.Normal};o.decorators=[...r.decorators,e=>p`
<style>
    ui5-title {
        width: 15ch;
    }
</style>
${e()}`];const n=r.bind({});n.args={default:'<ui5-link design="Default">With Default Link (57)</ui5-link>'};n.decorators=[...r.decorators];var s,c,m;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  return html\`
<ui5-title
    level="\${ifDefined(args.level)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
>\${unsafeHTML(args.default)}</ui5-title>\`;
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,d,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return html\`
<ui5-title
    level="\${ifDefined(args.level)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
>\${unsafeHTML(args.default)}</ui5-title>\`;
}`,...(g=(d=o.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var f,T,$;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  return html\`
<ui5-title
    level="\${ifDefined(args.level)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
>\${unsafeHTML(args.default)}</ui5-title>\`;
}`,...($=(T=n.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};const F=["Basic","Wrapping","WithLink"];export{a as Basic,n as WithLink,o as Wrapping,F as __namedExportsOrder,C as default};
//# sourceMappingURL=Title.stories-ddd34f91.js.map
