import{x as g}from"./lit-element-c5a2b594.js";import{l as n}from"./if-defined-c29cffe1.js";import{D as y}from"./docs-a58dd199.js";import{W as $}from"./WrappingType-b81e595a.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-d23eae87.js";import"./iframe-17871902.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-9c2f7062.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const v={valueState:{control:"select",options:["Error","Information","None","Success","Warning"]},wrappingType:{control:"select",options:["None","Normal"]}},D={package:"@ui5/webcomponents"},S="ui5-checkbox",A={title:"Main/Check Box",component:"CheckBox",parameters:{docs:{page:y({...D,component:S})}},argTypes:v},r=e=>g`<ui5-checkbox
        accessible-name-ref="${n(e.accessibleNameRef)}"
        accessible-name="${n(e.accessibleName)}"
        ?disabled="${n(e.disabled)}"
        ?readonly="${n(e.readonly)}"
        ?required="${n(e.required)}"
        ?indeterminate="${n(e.indeterminate)}"
        ?checked="${n(e.checked)}"
        text="${n(e.text)}"
        value-state="${n(e.valueState)}"
        wrapping-type="${n(e.wrappingType)}"
        name="${n(e.name)}"
        style="${n(e.style)}"
    >
    </ui5-checkbox>`,a=r.bind({});a.args={text:"Basic"};const i=r.bind({});i.args={text:"ui5-checkbox with 'wrapping-type=Normal' set and some long text.",wrappingType:$.Normal,style:"width:200px"};const c=r.bind({});c.args={text:"Select / deselect all",indeterminate:!0,checked:!0};c.parameters={controls:{include:["indeterminate","checked"]}};const t=()=>g`
    <ui5-checkbox text="Success" value-state="Success"></ui5-checkbox>
    <ui5-checkbox text="Error" value-state="Error"></ui5-checkbox>
    <ui5-checkbox text="Warning" value-state="Warning"></ui5-checkbox>
    <ui5-checkbox text="Information" value-state="Information"></ui5-checkbox>
    <ui5-checkbox text="Disabled" disabled="" checked=""></ui5-checkbox>
    <ui5-checkbox text="Readonly" readonly="" checked=""></ui5-checkbox>
    <ui5-checkbox
        text="Success disabled"
        disabled=""
        value-state="Success"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Error disabled"
        disabled=""
        value-state="Error"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Warning disabled "
        disabled=""
        value-state="Warning"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Information disabled "
        disabled=""
        value-state="Information"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Success readonly"
        readonly=""
        value-state="Success"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Error readonly"
        readonly=""
        value-state="Error"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Warning readonly"
        readonly=""
        value-state="Warning"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Information readonly"
        readonly=""
        value-state="Information"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Success indeterminate"
        value-state="Success"
        indeterminate=""
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Error indeterminate"
        value-state="Error"
        indeterminate=""
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Warning indeterminate"
        value-state="Warning"
        indeterminate=""
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Information indeterminate"
        value-state="Information"
        indeterminate=""
        checked=""
    ></ui5-checkbox>
`;var o,s,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:'args => html`<ui5-checkbox\n        accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n        accessible-name="${ifDefined(args.accessibleName)}"\n        ?disabled="${ifDefined(args.disabled)}"\n        ?readonly="${ifDefined(args.readonly)}"\n        ?required="${ifDefined(args.required)}"\n        ?indeterminate="${ifDefined(args.indeterminate)}"\n        ?checked="${ifDefined(args.checked)}"\n        text="${ifDefined(args.text)}"\n        value-state="${ifDefined(args.valueState)}"\n        wrapping-type="${ifDefined(args.wrappingType)}"\n        name="${ifDefined(args.name)}"\n        style="${ifDefined(args.style)}"\n    >\n    </ui5-checkbox>`',...(d=(s=a.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var u,l,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:'args => html`<ui5-checkbox\n        accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n        accessible-name="${ifDefined(args.accessibleName)}"\n        ?disabled="${ifDefined(args.disabled)}"\n        ?readonly="${ifDefined(args.readonly)}"\n        ?required="${ifDefined(args.required)}"\n        ?indeterminate="${ifDefined(args.indeterminate)}"\n        ?checked="${ifDefined(args.checked)}"\n        text="${ifDefined(args.text)}"\n        value-state="${ifDefined(args.valueState)}"\n        wrapping-type="${ifDefined(args.wrappingType)}"\n        name="${ifDefined(args.name)}"\n        style="${ifDefined(args.style)}"\n    >\n    </ui5-checkbox>`',...(x=(l=i.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};var b,h,k;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:'args => html`<ui5-checkbox\n        accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n        accessible-name="${ifDefined(args.accessibleName)}"\n        ?disabled="${ifDefined(args.disabled)}"\n        ?readonly="${ifDefined(args.readonly)}"\n        ?required="${ifDefined(args.required)}"\n        ?indeterminate="${ifDefined(args.indeterminate)}"\n        ?checked="${ifDefined(args.checked)}"\n        text="${ifDefined(args.text)}"\n        value-state="${ifDefined(args.valueState)}"\n        wrapping-type="${ifDefined(args.wrappingType)}"\n        name="${ifDefined(args.name)}"\n        style="${ifDefined(args.style)}"\n    >\n    </ui5-checkbox>`',...(k=(h=c.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var m,f,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => html\`
    <ui5-checkbox text="Success" value-state="Success"></ui5-checkbox>
    <ui5-checkbox text="Error" value-state="Error"></ui5-checkbox>
    <ui5-checkbox text="Warning" value-state="Warning"></ui5-checkbox>
    <ui5-checkbox text="Information" value-state="Information"></ui5-checkbox>
    <ui5-checkbox text="Disabled" disabled="" checked=""></ui5-checkbox>
    <ui5-checkbox text="Readonly" readonly="" checked=""></ui5-checkbox>
    <ui5-checkbox
        text="Success disabled"
        disabled=""
        value-state="Success"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Error disabled"
        disabled=""
        value-state="Error"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Warning disabled "
        disabled=""
        value-state="Warning"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Information disabled "
        disabled=""
        value-state="Information"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Success readonly"
        readonly=""
        value-state="Success"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Error readonly"
        readonly=""
        value-state="Error"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Warning readonly"
        readonly=""
        value-state="Warning"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Information readonly"
        readonly=""
        value-state="Information"
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Success indeterminate"
        value-state="Success"
        indeterminate=""
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Error indeterminate"
        value-state="Error"
        indeterminate=""
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Warning indeterminate"
        value-state="Warning"
        indeterminate=""
        checked=""
    ></ui5-checkbox>
    <ui5-checkbox
        text="Information indeterminate"
        value-state="Information"
        indeterminate=""
        checked=""
    ></ui5-checkbox>
\``,...(p=(f=t.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};const F=["Basic","Wrapping","Indeterminate","States"];export{a as Basic,c as Indeterminate,t as States,i as Wrapping,F as __namedExportsOrder,A as default};
//# sourceMappingURL=CheckBox.stories-604aaf57.js.map
