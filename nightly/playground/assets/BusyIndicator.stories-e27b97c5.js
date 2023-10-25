import{x as l}from"./lit-element-c5a2b594.js";import{o as v}from"./unsafe-html-0ddd83da.js";import{l as n}from"./if-defined-c29cffe1.js";import{D as b}from"./docs-4ba6d2dd.js";import{B as p}from"./BusyIndicatorSize-c7535361.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-7fbe22f4.js";import"./iframe-b92ab9fd.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-ed48ef34.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const g={size:{control:"select",options:["Large","Medium","Small"]},default:{control:{type:"text"}}},x={package:"@ui5/webcomponents",since:"0.12.0"};var r=Object.freeze,$=Object.defineProperty,z=(e,y)=>r($(e,"raw",{value:r(y||e.slice())})),a;const D="ui5-busy-indicator",w={title:"Main/Busy Indicator",component:"BusyIndicator",parameters:{docs:{page:b({...x,component:D})}},argTypes:g},f=e=>l`<ui5-busy-indicator
    text="${n(e.text)}"
    size="${n(e.size)}"
    ?active="${n(e.active)}"
    delay="${n(e.delay)}"
>
    ${v(e.default)}
</ui5-busy-indicator>`,i=f.bind({});i.args={active:!0,size:p.Medium};const t=f.bind({});t.args={size:p.Medium,default:`<ui5-list
    no-data-text="No Data"
    header-text="Available Items"
    >
</ui5-list>`};t.decorators=[e=>l(a||(a=z([`<style>
    .sample {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>

<div class="sample">
    <ui5-button>Fetch List Data</ui5-button>
    `,`
</div>

<script>
    var busyIndicator = document.querySelector("ui5-busy-indicator");
    var list = document.querySelector("ui5-list");
    var fetchBtn = document.querySelector("ui5-button");

    fetchBtn.addEventListener("click", event => {
        busyIndicator.active = true;

        setTimeout(() => {
            ["UI5", "Web", "Components"].forEach(title => {
                const el = document.createElement("ui5-li");
                el.textContent = title;
                list.appendChild(el);
            });

            busyIndicator.active = false;
        }, 3000);
    });
<\/script>`])),e())];t.parameters={docs:{story:{iframeHeight:"500px",inline:!1}}};var s,o,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  return html\`<ui5-busy-indicator
    text="\${ifDefined(args.text)}"
    size="\${ifDefined(args.size)}"
    ?active="\${ifDefined(args.active)}"
    delay="\${ifDefined(args.delay)}"
>
    \${unsafeHTML(args.default)}
</ui5-busy-indicator>\`;
}`,...(c=(o=i.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var u,d,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return html\`<ui5-busy-indicator
    text="\${ifDefined(args.text)}"
    size="\${ifDefined(args.size)}"
    ?active="\${ifDefined(args.active)}"
    delay="\${ifDefined(args.delay)}"
>
    \${unsafeHTML(args.default)}
</ui5-busy-indicator>\`;
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const k=["Basic","UsageWithComponents"];export{i as Basic,t as UsageWithComponents,k as __namedExportsOrder,w as default};
//# sourceMappingURL=BusyIndicator.stories-e27b97c5.js.map
