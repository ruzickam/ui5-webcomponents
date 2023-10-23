import{x as o}from"./lit-element-c5a2b594.js";import{D as x}from"./docs-12315973.js";import{l as t}from"./if-defined-c29cffe1.js";import{W as D}from"./WrappingType-b81e595a.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-27169319.js";import"./iframe-d3ab26ac.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-c8a9de12.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const v={valueState:{control:"select",options:["Error","Information","None","Success","Warning"]},wrappingType:{control:"select",options:["None","Normal"]}},O={package:"@ui5/webcomponents"},y="ui5-radio-button",F={title:"Main/Radio Button",component:"RadioButton",parameters:{docs:{page:x({...O,component:y})}},argTypes:v},g=e=>o`
<ui5-radio-button
    name="${t(e.name)}"
    text="${t(e.text)}"
    ?required="${t(e.required)}"
    ?checked="${t(e.checked)}"
    ?disabled="${t(e.disabled)}"
    ?readonly="${t(e.readonly)}"
    value-state="${t(e.valueState)}"
    value="${t(e.value)}"
    accessible-name="${t(e.accessibleName)}"
    accessible-name-ref="${t(e.accessibleNameRef)}"
    wrapping-type="${t(e.wrappingType)}"
>
<ui5-radio-button>`,a=g.bind({});a.args={name:"GroupA"};a.decorators=[(e,{args:$})=>{let r=0;return o`
            ${e({args:{text:`Option ${++r}`,checked:!0,...$}})}
            ${e({args:{text:`Option ${++r}`,...a.args}})}
            ${e({args:{text:`Option ${r++}`,...a.args}})}
        `}];const n=()=>o`
<ui5-radio-button text="Option A" checked="" name="GroupA"></ui5-radio-button>
<ui5-radio-button text="Option B" value-state="None" name="GroupA"></ui5-radio-button>
<ui5-radio-button text="Option C" value-state="Warning" name="GroupA"></ui5-radio-button>
<ui5-radio-button text="Option D" value-state="Error" name="GroupA"></ui5-radio-button>
<ui5-radio-button text="Option C" value-state="Success" name="GroupA"></ui5-radio-button>
<ui5-radio-button text="Option D" value-state="Information" name="GroupA"></ui5-radio-button>
<ui5-radio-button text="Option E" disabled="" name="GroupA"></ui5-radio-button>
<ui5-radio-button text="Option F" readonly="" name="GroupA"></ui5-radio-button>
`,i=g.bind({});i.args={wrappingType:D.Normal,text:"ui5-radio-button with 'wrapping-type=Normal' set and some long text"};i.decorators=[e=>o`
<style>
    ui5-radio-button {
        width: 200px;
    }
</style>
${e()}`];var u,s,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return html\`
<ui5-radio-button
    name="\${ifDefined(args.name)}"
    text="\${ifDefined(args.text)}"
    ?required="\${ifDefined(args.required)}"
    ?checked="\${ifDefined(args.checked)}"
    ?disabled="\${ifDefined(args.disabled)}"
    ?readonly="\${ifDefined(args.readonly)}"
    value-state="\${ifDefined(args.valueState)}"
    value="\${ifDefined(args.value)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
>
<ui5-radio-button>\`;
}`,...(d=(s=a.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var p,c,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => html\`
<ui5-radio-button text="Option A" checked="" name="GroupA"></ui5-radio-button>
<ui5-radio-button text="Option B" value-state="None" name="GroupA"></ui5-radio-button>
<ui5-radio-button text="Option C" value-state="Warning" name="GroupA"></ui5-radio-button>
<ui5-radio-button text="Option D" value-state="Error" name="GroupA"></ui5-radio-button>
<ui5-radio-button text="Option C" value-state="Success" name="GroupA"></ui5-radio-button>
<ui5-radio-button text="Option D" value-state="Information" name="GroupA"></ui5-radio-button>
<ui5-radio-button text="Option E" disabled="" name="GroupA"></ui5-radio-button>
<ui5-radio-button text="Option F" readonly="" name="GroupA"></ui5-radio-button>
\``,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,b,f;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  return html\`
<ui5-radio-button
    name="\${ifDefined(args.name)}"
    text="\${ifDefined(args.text)}"
    ?required="\${ifDefined(args.required)}"
    ?checked="\${ifDefined(args.checked)}"
    ?disabled="\${ifDefined(args.disabled)}"
    ?readonly="\${ifDefined(args.readonly)}"
    value-state="\${ifDefined(args.valueState)}"
    value="\${ifDefined(args.value)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
>
<ui5-radio-button>\`;
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const V=["Basic","Variations","Wrapping"];export{a as Basic,n as Variations,i as Wrapping,V as __namedExportsOrder,F as default};
//# sourceMappingURL=RadioButton.stories-5aead228.js.map
