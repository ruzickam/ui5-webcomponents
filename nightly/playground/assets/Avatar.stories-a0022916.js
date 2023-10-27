import{x as p}from"./lit-element-c5a2b594.js";import{l as a}from"./if-defined-c29cffe1.js";import{o as d}from"./unsafe-html-0ddd83da.js";import{A as f,a as u}from"./AvatarShape-e8dfc172.js";import{D as v}from"./docs-dadb505e.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-fa025d48.js";import"./iframe-092e8e21.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-f860885c.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const b={colorScheme:{control:"select",options:["Accent1","Accent10","Accent2","Accent3","Accent4","Accent5","Accent6","Accent7","Accent8","Accent9","Placeholder"]},shape:{control:"select",options:["Circle","Square"]},size:{control:"select",options:["L","M","S","XL","XS"]},badge:{control:{type:"text"}},default:{control:{type:"text"}}},$={package:"@ui5/webcomponents",since:"1.0.0-rc.6"},g=()=>p`
<ui5-avatar fallback-icon="employee" size="S" disabled="true">
  <img alt="Woman 1" src="../assets/images/avatars/man_avatar_1.png" />
</ui5-avatar>
(ui5-avatar size="S" disabled="true")

</br>

<ui5-avatar fallback-icon="employee" size="M">
  <img alt="Woman 1" src="../assets/images/avatars/man_avatar_1.png" />
</ui5-avatar> (ui5-avatar size="M")

</br>

<ui5-avatar size="L" disabled="true" initials="AB" color-scheme="Accent1"> </ui5-avatar> (ui5-avatar size="L" disabled="true" color-scheme="Accent1")

</br>

<ui5-avatar size="XL" initials="CD" color-scheme="Accent2"></ui5-avatar> (ui5-avatar size="XL" color-scheme="Accent2")
`,h="ui5-avatar",C={title:"Main/Avatar",component:"Avatar",argTypes:b,parameters:{docs:{page:v({...$,component:h})}}},m=e=>p`<ui5-avatar
    icon="${a(e.icon)}"
    size="${a(e.size)}"
    shape="${a(e.shape)}"
    style="${a(e.style)}"
    initials="${a(e.initials)}"
    color-scheme="${a(e.colorScheme)}"
    ?interactive="${a(e.interactive)}"
    ?disabled="${a(e.disabled)}"
    aria-haspopup="${a(e.ariaHaspopup)}"
    accessible-name="${a(e.accessibleName)}"
    fallback-icon="${a(e.fallbackIcon)}"
  >
    ${d(e.default)}
  </ui5-avatar>`,i=m.bind({});i.args={initials:"FJ",interactive:!0,accessibleName:"Avatar with accessible name"};const j=g.bind({}),s=m.bind({});s.args={size:f.XL,shape:u.Square,style:"width: 250px; height:250px; border: 1px solid var(--sapField_BorderColor)",default:`<img
    src="../assets/images/avatars/Lamp_avatar_01.jpg"
    alt="Lamp"
    style="object-fit: contain"
/>`};var t,r,n;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:'args => html`<ui5-avatar\n    icon="${ifDefined(args.icon)}"\n    size="${ifDefined(args.size)}"\n    shape="${ifDefined(args.shape)}"\n    style="${ifDefined(args.style)}"\n    initials="${ifDefined(args.initials)}"\n    color-scheme="${ifDefined(args.colorScheme)}"\n    ?interactive="${ifDefined(args.interactive)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    aria-haspopup="${ifDefined(args.ariaHaspopup)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    fallback-icon="${ifDefined(args.fallbackIcon)}"\n  >\n    ${unsafeHTML(args.default)}\n  </ui5-avatar>`',...(n=(r=i.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var c,o,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:'args => html`<ui5-avatar\n    icon="${ifDefined(args.icon)}"\n    size="${ifDefined(args.size)}"\n    shape="${ifDefined(args.shape)}"\n    style="${ifDefined(args.style)}"\n    initials="${ifDefined(args.initials)}"\n    color-scheme="${ifDefined(args.colorScheme)}"\n    ?interactive="${ifDefined(args.interactive)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    aria-haspopup="${ifDefined(args.ariaHaspopup)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    fallback-icon="${ifDefined(args.fallbackIcon)}"\n  >\n    ${unsafeHTML(args.default)}\n  </ui5-avatar>`',...(l=(o=s.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const q=["Basic","TypesAndSizes","Styles"];export{i as Basic,s as Styles,j as TypesAndSizes,q as __namedExportsOrder,C as default};
//# sourceMappingURL=Avatar.stories-a0022916.js.map
