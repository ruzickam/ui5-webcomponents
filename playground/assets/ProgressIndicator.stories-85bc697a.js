import{x as y}from"./lit-element-c5a2b594.js";import{l as a}from"./if-defined-c29cffe1.js";import{D as S}from"./docs-a58dd199.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-d23eae87.js";import"./iframe-17871902.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-9c2f7062.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const h={valueState:{control:"select",options:["Error","Information","None","Success","Warning"]}},V={package:"@ui5/webcomponents",since:"1.0.0-rc.8"},b="ui5-progress-indicator",j={title:"Main/Progress Indicator",component:"ProgressIndicator",parameters:{docs:{page:S({...V,component:b})}},argTypes:h},t=e=>y`<ui5-progress-indicator
        ?disabled="${a(e.disabled)}"
        ?hide-value="${a(e.hideValue)}"
        value="${a(e.value)}"
        display-value="${a(e.displayValue)}"
        value-state="${a(e.valueState)}"
        style="${a(e.style)}"
    ></ui5-progress-indicator>`,r=t.bind({});r.args={value:25};const i=t.bind({});i.args={value:25,displayValue:"Custom Display Value"};const s=t.bind({});s.args={value:25,style:"height: 50px; width: 200px;"};const o=()=>y`
<ui5-progress-indicator
    value-state="None"
    value="25"
></ui5-progress-indicator>
<ui5-progress-indicator
    value-state="Error"
    value="50"
></ui5-progress-indicator>
<ui5-progress-indicator
    value-state="Warning"
    value="75"
></ui5-progress-indicator>
<ui5-progress-indicator
    value-state="Success"
    value="90"
></ui5-progress-indicator>
<ui5-progress-indicator
    value-state="Information"
    value="100"
></ui5-progress-indicator>
`;var n,u,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:'args => html`<ui5-progress-indicator\n        ?disabled="${ifDefined(args.disabled)}"\n        ?hide-value="${ifDefined(args.hideValue)}"\n        value="${ifDefined(args.value)}"\n        display-value="${ifDefined(args.displayValue)}"\n        value-state="${ifDefined(args.valueState)}"\n        style="${ifDefined(args.style)}"\n    ></ui5-progress-indicator>`',...(l=(u=r.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var d,p,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:'args => html`<ui5-progress-indicator\n        ?disabled="${ifDefined(args.disabled)}"\n        ?hide-value="${ifDefined(args.hideValue)}"\n        value="${ifDefined(args.value)}"\n        display-value="${ifDefined(args.displayValue)}"\n        value-state="${ifDefined(args.valueState)}"\n        style="${ifDefined(args.style)}"\n    ></ui5-progress-indicator>`',...(c=(p=i.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var g,m,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:'args => html`<ui5-progress-indicator\n        ?disabled="${ifDefined(args.disabled)}"\n        ?hide-value="${ifDefined(args.hideValue)}"\n        value="${ifDefined(args.value)}"\n        display-value="${ifDefined(args.displayValue)}"\n        value-state="${ifDefined(args.valueState)}"\n        style="${ifDefined(args.style)}"\n    ></ui5-progress-indicator>`',...(v=(m=s.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var f,$,D;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`() => html\`
<ui5-progress-indicator
    value-state="None"
    value="25"
></ui5-progress-indicator>
<ui5-progress-indicator
    value-state="Error"
    value="50"
></ui5-progress-indicator>
<ui5-progress-indicator
    value-state="Warning"
    value="75"
></ui5-progress-indicator>
<ui5-progress-indicator
    value-state="Success"
    value="90"
></ui5-progress-indicator>
<ui5-progress-indicator
    value-state="Information"
    value="100"
></ui5-progress-indicator>
\``,...(D=($=o.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};const q=["Basic","DisplayValue","CustomSize","ValueStates"];export{r as Basic,s as CustomSize,i as DisplayValue,o as ValueStates,q as __namedExportsOrder,j as default};
//# sourceMappingURL=ProgressIndicator.stories-85bc697a.js.map
