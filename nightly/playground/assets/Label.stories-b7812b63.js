import{x as n}from"./lit-element-c5a2b594.js";import{o as w}from"./unsafe-html-0ddd83da.js";import{l as t}from"./if-defined-c29cffe1.js";import{D as b}from"./docs-12315973.js";import{W as D}from"./WrappingType-b81e595a.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-27169319.js";import"./iframe-d3ab26ac.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-c8a9de12.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const x={wrappingType:{control:"select",options:["None","Normal"]},default:{control:{type:"text"}}},T={package:"@ui5/webcomponents"},q="ui5-label",O={title:"Main/Label",component:"Label",parameters:{docs:{page:b({...T,component:q})}},argTypes:x},s=e=>n`
<ui5-label
    for="${t(e.for)}"
    ?required="${t(e.required)}"
    ?show-colon="${t(e.showColon)}"
    wrapping-type="${t(e.wrappingType)}"
    class="${t(e.className)}"
>${w(e.default)}</ui5-label>`,y=e=>(r,{args:$})=>n`
${r({args:{...$,for:e}})}
<ui5-input id="${e}"></ui5-input>`,o=s.bind({});o.args={showColon:!0,default:"Simple Label"};o.decorators=[y("myInputSimple")];const N=(e,{args:r})=>n`
<style>
    .w200 {
        width: 200px;
    }
</style>
${e({args:{...r,className:"w200"}})}`,i=s.bind({});i.args={wrappingType:D.Normal,showColon:!0,default:`Label that demonstrates how, if set to wrapping-type="Normal", the long labels could be wrapped. To test the truncation, use 'wrapping-type="None"`};i.decorators=[N,y("myInputWrapping")];const a=s.bind({});a.args={required:!0,showColon:!0};a.decorators=[(e,{args:r})=>n`
    ${e({args:{...r,for:"myInput",default:"First name"}})}
    <ui5-input id="myInput" required placeholder="Enter your name"></ui5-input>

    ${e({args:{...r,for:"myDatePicker",default:"Date of birth"}})}
    <ui5-date-picker id="myDatePicker" required></ui5-date-picker>

    ${e({args:{...r,for:"mySelect",default:"Job"}})}
    <ui5-select id="mySelect" required>
        <ui5-option>Manager</ui5-option>
        <ui5-option>Sales</ui5-option>
        <ui5-option selected>Developer</ui5-option>
    </ui5-select>

    ${e({args:{...r,for:"myTextArea",default:"Description"}})}
    <ui5-textarea id="myTextArea" required placeholder="Type as much text as you wish"></ui5-textarea>

    <div style="display: flex; align-items: center;">
        ${e({args:{...r,for:"myCheckBox",default:"Accept terms of use"}})}
        <ui5-checkbox id="myCheckBox" required></ui5-checkbox>
    </div>
`,e=>n`
<style>
    .f {
        display: flex;
        flex-direction: column;
    }
    .f > :nth-child(2n) {
        margin-bottom: 1.5rem;
    }
</style>

<div class="f">
    ${e()}
</div>`];var p,l,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return html\`
<ui5-label
    for="\${ifDefined(args.for)}"
    ?required="\${ifDefined(args.required)}"
    ?show-colon="\${ifDefined(args.showColon)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
    class="\${ifDefined(args.className)}"
>\${unsafeHTML(args.default)}</ui5-label>\`;
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var c,d,m;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return html\`
<ui5-label
    for="\${ifDefined(args.for)}"
    ?required="\${ifDefined(args.required)}"
    ?show-colon="\${ifDefined(args.showColon)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
    class="\${ifDefined(args.className)}"
>\${unsafeHTML(args.default)}</ui5-label>\`;
}`,...(m=(d=i.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var f,g,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  return html\`
<ui5-label
    for="\${ifDefined(args.for)}"
    ?required="\${ifDefined(args.required)}"
    ?show-colon="\${ifDefined(args.showColon)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
    class="\${ifDefined(args.className)}"
>\${unsafeHTML(args.default)}</ui5-label>\`;
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const j=["Basic","WrappingText","UsageWithInputs"];export{o as Basic,a as UsageWithInputs,i as WrappingText,j as __namedExportsOrder,O as default};
//# sourceMappingURL=Label.stories-b7812b63.js.map
