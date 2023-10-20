import{x as B}from"./lit-element-c5a2b594.js";import{l as i}from"./if-defined-c29cffe1.js";import{o as u}from"./unsafe-html-0ddd83da.js";import{D as M}from"./docs-a58dd199.js";import{C as T}from"./ComboBoxFilter-4fbd0079.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-d23eae87.js";import"./iframe-17871902.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-9c2f7062.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const C={filter:{control:"select",options:["Contains","None","StartsWith","StartsWithPerTerm"]},valueState:{control:"select",options:["Error","Information","None","Success","Warning"]},default:{control:{type:"text"}},icon:{control:{type:"text"}},valueStateMessage:{control:{type:"text"}},"selection-change":{description:"Fired when selection is changed by user interaction",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"sap.ui.webc.main.IComboBoxItem",description:"item to be selected."}]}}},L={package:"@ui5/webcomponents",since:"1.0.0-rc.6"},q="ui5-combobox",V={title:"Main/Combo Box",component:"ComboBox",subcomponents:{ComboBoxItem:"ComboBoxItem",ComboBoxGroupItem:"ComboBoxGroupItem"},parameters:{docs:{page:M({...L,component:q})}},argTypes:C},s=e=>B`<ui5-combobox
        value="${i(e.value)}"
        placeholder="${i(e.placeholder)}"
        ?disabled="${i(e.disabled)}"
        ?readonly="${i(e.readonly)}"
        ?required="${i(e.required)}"
        ?loading="${i(e.loading)}"
        filter="${i(e.filter)}"
        value-state="${i(e.valueState)}"
        accessible-name="${i(e.accessibleName)}"
        accessible-name-ref="${i(e.accessibleNameRef)}"
>
        ${u(e.default)}
        ${u(e.valueStateMessage)}
        ${u(e.icon)}
</ui5-combobox>`,a=s.bind({});a.args={placeholder:"Enter value",default:`
    <ui5-cb-item text="Austria"></ui5-cb-item>
    <ui5-cb-item text="Bulgaria"></ui5-cb-item>
    <ui5-cb-item text="Germany"></ui5-cb-item>
    <ui5-cb-item text="Italy"></ui5-cb-item>
    <ui5-cb-item text="Spain"></ui5-cb-item>
    `};const t=s.bind({});t.args={placeholder:"Contains Filtering",filter:T.Contains,default:`
        <ui5-cb-item text="Austria"></ui5-cb-item>
        <ui5-cb-item text="Bulgaria"></ui5-cb-item>
        <ui5-cb-item text="Germany"></ui5-cb-item>
        <ui5-cb-item text="Kazakhstan"></ui5-cb-item>
        <ui5-cb-item text="The United Kingdom of Great Britain and Northern Ireland"></ui5-cb-item>
    `};const r=s.bind({});r.args={placeholder:"Two-column layout",default:`
        <ui5-cb-item text="Austria" additional-text="AT"></ui5-cb-item>
        <ui5-cb-item text="Belgium" additional-text="BE"></ui5-cb-item>
        <ui5-cb-item text="Brazil" additional-text="BR"></ui5-cb-item>
        <ui5-cb-item text="Bulgaria" additional-text="BG"></ui5-cb-item>
        <ui5-cb-item text="Canada" additional-text="CA"></ui5-cb-item>
        <ui5-cb-item text="The United Kingdom of Great Britain and Northern Ireland" additional-text="UK"></ui5-cb-item>
    `};const n=s.bind({});n.args={placeholder:"Grouping of items",default:`
        <ui5-cb-group-item text="A"></ui5-cb-group-item>
        <ui5-cb-item text="Argentina"></ui5-cb-item>
        <ui5-cb-item text="Australia"></ui5-cb-item>	
        <ui5-cb-item text="Austria"></ui5-cb-item>	
        <ui5-cb-group-item text="B"></ui5-cb-group-item>
        <ui5-cb-item text="Bahrain"></ui5-cb-item>
        <ui5-cb-item text="Belgium"></ui5-cb-item>
        <ui5-cb-item text="Brazil"></ui5-cb-item>
        <ui5-cb-group-item text="C"></ui5-cb-group-item>
        <ui5-cb-item text="Canada"></ui5-cb-item>
        <ui5-cb-item text="Chile"></ui5-cb-item>
    `};const o=s.bind({});o.args={placeholder:"Enter product",default:`
    <ui5-cb-item text="Wireless DSL/ Repeater and Print Server Lorem ipsum dolar st amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor incidunt ut labore et dolore magna aliquyam erat, diam nonumy eirmod tempor individunt ut labore et dolore magna aliquyam erat, sed justo et ea rebum."></ui5-cb-item>
    <ui5-cb-item text="Widescreen Portable DVD Player w MP3, consetetur sadipscing, sed diam nonumy eirmod tempor invidunt ut labore et dolore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergen, no sea takimata. Tortor pretium viverra suspendisse potenti nullam. Congue quisque egestas diam in arcu cursus.Rutrum tellus pellentesque eu tincidunt tortor. Nec tincidunt praesent semper feugiat nibh sed"></ui5-cb-item>
    <ui5-cb-item text="Portable DVD Player with 9 inches LCD Monitor"></ui5-cb-item>
    `};var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:'args => html`<ui5-combobox\n        value="${ifDefined(args.value)}"\n        placeholder="${ifDefined(args.placeholder)}"\n        ?disabled="${ifDefined(args.disabled)}"\n        ?readonly="${ifDefined(args.readonly)}"\n        ?required="${ifDefined(args.required)}"\n        ?loading="${ifDefined(args.loading)}"\n        filter="${ifDefined(args.filter)}"\n        value-state="${ifDefined(args.valueState)}"\n        accessible-name="${ifDefined(args.accessibleName)}"\n        accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n>\n        ${unsafeHTML(args.default)}\n        ${unsafeHTML(args.valueStateMessage)}\n        ${unsafeHTML(args.icon)}\n</ui5-combobox>`',...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,f,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:'args => html`<ui5-combobox\n        value="${ifDefined(args.value)}"\n        placeholder="${ifDefined(args.placeholder)}"\n        ?disabled="${ifDefined(args.disabled)}"\n        ?readonly="${ifDefined(args.readonly)}"\n        ?required="${ifDefined(args.required)}"\n        ?loading="${ifDefined(args.loading)}"\n        filter="${ifDefined(args.filter)}"\n        value-state="${ifDefined(args.valueState)}"\n        accessible-name="${ifDefined(args.accessibleName)}"\n        accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n>\n        ${unsafeHTML(args.default)}\n        ${unsafeHTML(args.valueStateMessage)}\n        ${unsafeHTML(args.icon)}\n</ui5-combobox>`',...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var g,p,$;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:'args => html`<ui5-combobox\n        value="${ifDefined(args.value)}"\n        placeholder="${ifDefined(args.placeholder)}"\n        ?disabled="${ifDefined(args.disabled)}"\n        ?readonly="${ifDefined(args.readonly)}"\n        ?required="${ifDefined(args.required)}"\n        ?loading="${ifDefined(args.loading)}"\n        filter="${ifDefined(args.filter)}"\n        value-state="${ifDefined(args.valueState)}"\n        accessible-name="${ifDefined(args.accessibleName)}"\n        accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n>\n        ${unsafeHTML(args.default)}\n        ${unsafeHTML(args.valueStateMessage)}\n        ${unsafeHTML(args.icon)}\n</ui5-combobox>`',...($=(p=r.parameters)==null?void 0:p.docs)==null?void 0:$.source}}};var x,D,v;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:'args => html`<ui5-combobox\n        value="${ifDefined(args.value)}"\n        placeholder="${ifDefined(args.placeholder)}"\n        ?disabled="${ifDefined(args.disabled)}"\n        ?readonly="${ifDefined(args.readonly)}"\n        ?required="${ifDefined(args.required)}"\n        ?loading="${ifDefined(args.loading)}"\n        filter="${ifDefined(args.filter)}"\n        value-state="${ifDefined(args.valueState)}"\n        accessible-name="${ifDefined(args.accessibleName)}"\n        accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n>\n        ${unsafeHTML(args.default)}\n        ${unsafeHTML(args.valueStateMessage)}\n        ${unsafeHTML(args.icon)}\n</ui5-combobox>`',...(v=(D=n.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var h,y,S;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:'args => html`<ui5-combobox\n        value="${ifDefined(args.value)}"\n        placeholder="${ifDefined(args.placeholder)}"\n        ?disabled="${ifDefined(args.disabled)}"\n        ?readonly="${ifDefined(args.readonly)}"\n        ?required="${ifDefined(args.required)}"\n        ?loading="${ifDefined(args.loading)}"\n        filter="${ifDefined(args.filter)}"\n        value-state="${ifDefined(args.valueState)}"\n        accessible-name="${ifDefined(args.accessibleName)}"\n        accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n>\n        ${unsafeHTML(args.default)}\n        ${unsafeHTML(args.valueStateMessage)}\n        ${unsafeHTML(args.icon)}\n</ui5-combobox>`',...(S=(y=o.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const O=["Basic","Filters","TwoColumnsLayout","Grouping","SuggestionsWrapping"];export{a as Basic,t as Filters,n as Grouping,o as SuggestionsWrapping,r as TwoColumnsLayout,O as __namedExportsOrder,V as default};
//# sourceMappingURL=ComboBox.stories-755ba20b.js.map
