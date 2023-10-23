import{x as o}from"./lit-element-c5a2b594.js";import{D as g}from"./docs-fda2c664.js";import{l as i}from"./if-defined-c29cffe1.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-f4c88fd4.js";import"./iframe-20b64930.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-8dceee91.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const u={},D={package:"@ui5/webcomponents",since:"1.0.0-rc.11"},k="ui5-slider",P={title:"Main/Slider",component:"Slider",parameters:{docs:{page:g({...D,component:k})}},argTypes:u},n=e=>o`
<ui5-slider
    value="${i(e.value)}"
    min="${i(e.min)}"
    max="${i(e.max)}"
    step="${i(e.step)}"
    ?show-tickmarks="${i(e.showTickmarks)}"
    label-interval="${i(e.labelInterval)}"
    ?show-tooltip="${i(e.showTooltip)}"
    ?disabled="${i(e.disabled)}"
    accessible-name="${i(e.accessibleName)}"
></ui5-slider>`,a=n.bind({});a.decorators=[e=>o`
            <div class="wrapper" style="margin-top:1rem;">
                ${e()}
            </div>
        `];a.args={min:0,max:100,step:5,disabled:!1,showTooltip:!1,showTickmarks:!1,labelInterval:0};const r=n.bind({});r.decorators=[e=>o`
            <div class="wrapper" style="margin-top:1rem;">
                ${e()}
            </div>
        `];r.args={min:0,max:20,showTooltip:!0,labelInterval:5};const s=n.bind({});s.decorators=[e=>o`
            <div class="wrapper" style="margin-top:1rem;">
                ${e()}
            </div>
        `];s.args={min:-20,max:20,step:2,value:12,showTooltip:!0,labelInterval:2,showTickmarks:!0};s.storyName="Tooltip, Tickmarks and Labels";var t,l,m;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:'args => html`\n<ui5-slider\n    value="${ifDefined(args.value)}"\n    min="${ifDefined(args.min)}"\n    max="${ifDefined(args.max)}"\n    step="${ifDefined(args.step)}"\n    ?show-tickmarks="${ifDefined(args.showTickmarks)}"\n    label-interval="${ifDefined(args.labelInterval)}"\n    ?show-tooltip="${ifDefined(args.showTooltip)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n></ui5-slider>`',...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,c,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:'args => html`\n<ui5-slider\n    value="${ifDefined(args.value)}"\n    min="${ifDefined(args.min)}"\n    max="${ifDefined(args.max)}"\n    step="${ifDefined(args.step)}"\n    ?show-tickmarks="${ifDefined(args.showTickmarks)}"\n    label-interval="${ifDefined(args.labelInterval)}"\n    ?show-tooltip="${ifDefined(args.showTooltip)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n></ui5-slider>`',...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var f,$,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:'args => html`\n<ui5-slider\n    value="${ifDefined(args.value)}"\n    min="${ifDefined(args.min)}"\n    max="${ifDefined(args.max)}"\n    step="${ifDefined(args.step)}"\n    ?show-tickmarks="${ifDefined(args.showTickmarks)}"\n    label-interval="${ifDefined(args.labelInterval)}"\n    ?show-tooltip="${ifDefined(args.showTooltip)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n></ui5-slider>`',...(b=($=s.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};const j=["Basic","Tooltip","TickmarksLabelTooltip"];export{a as Basic,s as TickmarksLabelTooltip,r as Tooltip,j as __namedExportsOrder,P as default};
//# sourceMappingURL=Slider.stories-f0e6f85a.js.map
