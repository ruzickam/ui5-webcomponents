import{x as l}from"./lit-element-c5a2b594.js";import{o as h}from"./unsafe-html-0ddd83da.js";import{D as w}from"./docs-8ee23c7d.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-42b7e1b3.js";import"./iframe-ec99eb39.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-e113a03c.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const x={default:{control:{type:"text"}}},g={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.5"};var o=Object.freeze,b=Object.defineProperty,f=(t,d)=>o(b(t,"raw",{value:o(d||t.slice())})),c;const v="ui5-product-switch",L={title:"Fiori/Product Switch",component:"ProductSwitch",subcomponents:{ProductSwitchItem:"ProductSwitchItem"},parameters:{docs:{page:w({...g,component:v})}},argTypes:x},m=t=>l`
    <ui5-product-switch> ${h(t.default)} </ui5-product-switch>
`,i=m.bind({});i.args={default:`
    <ui5-product-switch-item title-text="Home" subtitle-text="Central Home" icon="home"></ui5-product-switch-item>
    <ui5-product-switch-item title-text="Analytics Cloud" subtitle-text="Analytics Cloud" icon="business-objects-experience"></ui5-product-switch-item>
    <ui5-product-switch-item title-text="Catalog" subtitle-text="Ariba" icon="contacts"></ui5-product-switch-item>
    <ui5-product-switch-item title-text="Travel &amp; Expense" subtitle-text="Concur" icon="flight"></ui5-product-switch-item>
`};const e=m.bind({});e.decorators=[t=>l(c||(c=f([`
        <ui5-shellbar
            id="shellbar"
            primary-title="Corporate Portal"
            secondary-title="home"
            logo="../assets/images/sap-logo-svg.svg"
            show-product-switch=""
            show-co-pilot=""
        >
        </ui5-shellbar>
        <ui5-popover id="productswitch-popover" placement-type="Bottom">
            `,`
        </ui5-popover>
        <script>
            var shellBar = document.getElementById("shellbar");
            var popover = document.getElementById("productswitch-popover");
            shellbar.addEventListener("product-switch-click", (event) => {
                if (popover.opened) {
                    popover.close();
                } else {
                    event.preventDefault();
                    popover.showAt(event.detail.targetRef);
                }
            });
        <\/script>
    `])),t())];e.args={default:`
    <ui5-product-switch-item
        title-text="Home"
        subtitle-text="Central Home"
        icon="home"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Analytics Cloud"
        subtitle-text="Analytics Cloud"
        icon="business-objects-experience"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Catalog"
        subtitle-text="Ariba"
        icon="contacts"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Guided Buying"
        icon="credit-card"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Strategic Procurement"
        icon="cart-3"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Travel &amp; Expense"
        subtitle-text="Concur"
        icon="flight"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Vendor Management"
        subtitle-text="Fieldglass"
        icon="shipping-status"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Human Capital Management"
        icon="customer"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Sales Cloud"
        subtitle-text="Sales Cloud"
        icon="sales-notification"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Commerce Cloud"
        subtitle-text="Commerce Cloud"
        icon="retail-store"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Marketing Cloud"
        subtitle-text="Marketing Cloud"
        icon="marketing-campaign"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Service Cloud"
        icon="family-care"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Customer Data Cloud"
        icon="customer-briefing"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="S/4HANA"
        icon="batch-payments"
    ></ui5-product-switch-item>
    </ui5-product-switch>`};var r,s,u;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:"args => html`\n    <ui5-product-switch> ${unsafeHTML(args.default)} </ui5-product-switch>\n`",...(u=(s=i.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var p,a,n;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:"args => html`\n    <ui5-product-switch> ${unsafeHTML(args.default)} </ui5-product-switch>\n`",...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const O=["Basic","WithShellBar"];export{i as Basic,e as WithShellBar,O as __namedExportsOrder,L as default};
//# sourceMappingURL=ProductSwitch.stories-4cff49c1.js.map
