import{x as S}from"./lit-element-c5a2b594.js";import{l as i}from"./if-defined-c29cffe1.js";import{o as l}from"./unsafe-html-0ddd83da.js";import{D as T}from"./docs-a89aaec1.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-8ddff560.js";import"./iframe-37c3f163.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-37069d6f.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const D={default:{control:{type:"text"}},icon:{control:{type:"text"}}},L={package:"@ui5/webcomponents",since:"0.12.0"},M="ui5-badge",F={title:"Main/Badge",component:"Badge",parameters:{docs:{page:T({...L,component:M})}},argTypes:D},s=e=>S`
<ui5-badge
    color-scheme="${i(e.colorScheme)}"
    style="${i(e.style)}"
>
    ${l(e.icon)}
    ${l(e.default)}
</ui5-badge>`,r=s.bind({});r.args={colorScheme:"6",icon:'<ui5-icon name="pending" slot="icon"></ui5-icon>',default:"Pending"};const n=s.bind({});n.args={default:"This would truncate as it is too long",style:"width: 200px"};const o=e=>`<ui5-icon name="${e}" slot="icon"></ui5-icon>`,H=[{icon:o("accept"),default:""},{icon:o("sap-ui5"),default:""},{icon:o("add-equipment"),default:"In progress"},{icon:o("lab"),default:""},{icon:o("email-read"),default:""},{icon:"",default:"Pending"},{icon:o("lightbulb"),default:"New idea"},{icon:o("locked"),default:"Locked"},{icon:o("flight"),default:"En route"},{icon:"",default:"Archived"}],a=s.bind({});a.decorators=[(e,t)=>S`
            ${H.map((c,y)=>e({args:{colorScheme:t.args.colorScheme||(y+1).toString(),icon:t.args.icon||c.icon,default:t.args.default||c.default}}))}`];var d,u,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  return html\`
<ui5-badge
    color-scheme="\${ifDefined(args.colorScheme)}"
    style="\${ifDefined(args.style)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-badge>\`;
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,p,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return html\`
<ui5-badge
    color-scheme="\${ifDefined(args.colorScheme)}"
    style="\${ifDefined(args.style)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-badge>\`;
}`,...(f=(p=n.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var h,$,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return html\`
<ui5-badge
    color-scheme="\${ifDefined(args.colorScheme)}"
    style="\${ifDefined(args.style)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-badge>\`;
}`,...(b=($=a.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};const G=["Basic","Truncating","AllColorSchemes"];export{a as AllColorSchemes,r as Basic,n as Truncating,G as __namedExportsOrder,F as default};
//# sourceMappingURL=Badge.stories-cdc0a773.js.map
