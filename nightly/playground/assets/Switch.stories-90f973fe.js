import{x as m}from"./lit-element-c5a2b594.js";import{l as i}from"./if-defined-c29cffe1.js";import{D as l}from"./docs-45c58a5b.js";import{S as p}from"./SwitchDesign-b1007d8d.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-d3ccbd21.js";import"./iframe-75b52abf.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-bb56983e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const u={design:{control:"select",options:["Graphical","Textual"]}},g={package:"@ui5/webcomponents",since:"0.8.0"},b="ui5-switch",P={title:"Main/Switch",component:"Switch",parameters:{docs:{page:l({...g,component:b})}},argTypes:u},f=e=>m`<ui5-switch
    design="${i(e.design)}"
    ?checked="${i(e.checked)}"
    ?disabled="${i(e.disabled)}"
    ?required="${i(e.required)}"
    ?name="${i(e.name)}"
    text-on="${i(e.textOn)}"
    text-off="${i(e.textOff)}"
    accessible-name="${i(e.accessibleName)}"
    accessible-name-ref="${i(e.accessibleNameRef)}"
    tooltip="${i(e.tooltip)}"
></ui5-switch>`,r=f.bind({});r.args={accessibleName:"Switch with Accessible Name"};const t=f.bind({});t.args={required:!0,name:"termsAndConditions",disabled:!1,design:p.Textual,textOn:"Yes",textOff:"No"};t.decorators=[e=>m`
        <style>
            .switch-form {
                max-width: fit-content;
                border: 1px solid var(--sapList_BorderColor);
                border-radius: 0.5rem;
                padding: 1rem;
            }
        </style>
        <form id="myForm" class="switch-form">
            <h3 style="margin: 0 0 1rem 0; color: var(--sapTextColor);">Switch in Registration form sample</h3>
            <div style="display: flex; flex-direction: column;">
                <ui5-input required type="Email" placeholder="Email" value="your@email.com"></ui5-input>
                <ui5-input required type="Password" placeholder="Password" value="your@email.com"></ui5-input>
            </div>
            <div style="display: flex; flex-direction: column; justify-content: center;">
                <ui5-label for="mySwitch" style="margin: 1rem 0 0 0; color: var(--sapTextColor);">Please accept the terms and conditions, in order to proceed</ui5-label>
                <div style="width: fit-content">
                    ${e()}
                </div>
            </div>
            <br>
            <ui5-button type="Submit">Submit Form</ui5-button>
        </form>`];var s,o,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:'args => html`<ui5-switch\n    design="${ifDefined(args.design)}"\n    ?checked="${ifDefined(args.checked)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?required="${ifDefined(args.required)}"\n    ?name="${ifDefined(args.name)}"\n    text-on="${ifDefined(args.textOn)}"\n    text-off="${ifDefined(args.textOff)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    tooltip="${ifDefined(args.tooltip)}"\n></ui5-switch>`',...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var a,c,d;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:'args => html`<ui5-switch\n    design="${ifDefined(args.design)}"\n    ?checked="${ifDefined(args.checked)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?required="${ifDefined(args.required)}"\n    ?name="${ifDefined(args.name)}"\n    text-on="${ifDefined(args.textOn)}"\n    text-off="${ifDefined(args.textOff)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n    tooltip="${ifDefined(args.tooltip)}"\n></ui5-switch>`',...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const _=["Basic","RequiredInForm"];export{r as Basic,t as RequiredInForm,_ as __namedExportsOrder,P as default};
//# sourceMappingURL=Switch.stories-90f973fe.js.map
