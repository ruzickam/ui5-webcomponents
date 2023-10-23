import{x as a}from"./lit-element-c5a2b594.js";import{l as t}from"./if-defined-c29cffe1.js";import{o as l}from"./unsafe-html-0ddd83da.js";import{D as r}from"./docs-fda2c664.js";import{T as s}from"./TimelineLayout-651ea8a4.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-f4c88fd4.js";import"./iframe-20b64930.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-8dceee91.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const c={layout:{control:"select",options:["Horizontal","Vertical"]},default:{control:{type:"text"}}},p={package:"@ui5/webcomponents-fiori",since:"0.8.0"},u="ui5-timeline",V={title:"Fiori/Timeline",component:"Timeline",subcomponents:{TimelineItem:"TimelineItem"},parameters:{docs:{page:r({...p,component:u})}},argTypes:c},d=i=>a`<ui5-timeline
    layout="${t(i.layout)}"
    accessible-name="${t(i.accessibleName)}"
>
    ${l(i.default)}
</ui5-timeline>`,e=d.bind({});e.storyName="With Items and Layout";e.args={layout:s.Vertical,default:`<ui5-timeline-item id="test-item" title-text="called" subtitle-text="20.02.2017 11:30" icon="phone" name="John Smith" name-clickable=""></ui5-timeline-item>
<ui5-timeline-item title-text="Weekly Sync - CP Design" subtitle-text="27.07.2017 (11:00 - 12:30)" icon="calendar">
    <div>MR SOF02 2.43</div>
</ui5-timeline-item>
<ui5-timeline-item title-text="Video Converence Call - UI5" subtitle-text="31.01.2018 (12:00 - 13:00)" icon="calendar">
    <div>Online meeting</div>
</ui5-timeline-item>`};var o,m,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:'args => html`<ui5-timeline\n    layout="${ifDefined(args.layout)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-timeline>`',...(n=(m=e.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const _=["Basic"];export{e as Basic,_ as __namedExportsOrder,V as default};
//# sourceMappingURL=Timeline.stories-c25d24cb.js.map
