import{x as l}from"./lit-element-c5a2b594.js";import{o as g}from"./unsafe-html-0ddd83da.js";import{l as r}from"./if-defined-c29cffe1.js";import{D as w}from"./docs-b408a008.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-175c2aa7.js";import"./iframe-2292ef40.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-ffca3e54.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const b={default:{control:{type:"text"}},openPopover:{description:"Shows the ColorPalettePopover. <b>Note:</b> The method is deprecated and will be removed in future, use <code>showAt</code> instead.",table:{category:"methods"},UI5CustomData:{parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}]}},showAt:{description:"Shows the ColorPalettePopover.",table:{category:"methods"},UI5CustomData:{parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}]}},"item-click":{description:"Fired when the user selects a color.",table:{category:"events"},UI5CustomData:{parameters:[{name:"color",type:"string",description:"the selected color"}]}}},C={package:"@ui5/webcomponents",since:"1.0.0-rc.16"};var a=Object.freeze,P=Object.defineProperty,f=(e,h)=>a(P(e,"raw",{value:a(h||e.slice())})),i,p;const D="ui5-color-palette-popover",U={title:"Main/ColorPalettePopover",component:"ColorPalettePopover",parameters:{docs:{page:w({...C,component:D})}},argTypes:b},v=e=>l`<ui5-color-palette-popover
    id="${r(e.id)}"
    ?show-recent-colors="${r(e.showRecentColors)}"
    ?show-more-colors="${r(e.showMoreColors)}"
    ?show-default-color="${r(e.showDefaultColor)}"
    default-color="${r(e.defaultColor)}"
>
    ${g(e.default)}
</ui5-color-palette-popover>`,t=v.bind({});t.args={id:"colorPalettePopover",default:`<ui5-color-palette-item value="lightsalmon"></ui5-color-palette-item>
<ui5-color-palette-item value="lightpink"></ui5-color-palette-item>
<ui5-color-palette-item value="rgb(216,124,172)"></ui5-color-palette-item>
<ui5-color-palette-item value="#6c666d"></ui5-color-palette-item>
<ui5-color-palette-item value="rgb(55,81,95)"></ui5-color-palette-item>
<ui5-color-palette-item value="#0072bb"></ui5-color-palette-item>
<ui5-color-palette-item value="powderblue"></ui5-color-palette-item>
<ui5-color-palette-item value="rgb(143,201,58)"></ui5-color-palette-item>
<ui5-color-palette-item value="rgb(195,172,206)"></ui5-color-palette-item>
<ui5-color-palette-item value="orange"></ui5-color-palette-item>`};t.decorators=[e=>l(i||(i=f([`<ui5-button id="colorPaletteBtn">Open ColorPalettePopover</ui5-button>
    `,`
    <script>
        colorPaletteBtn.addEventListener("click", function(event) {
            colorPalettePopover.showAt(this);
        });
    <\/script>`])),e())];t.parameters={docs:{story:{inline:!1,iframeHeight:"500px"}}};const o=v.bind({});o.storyName="Default, Recent, and More Colors";o.args={id:"colorPalettePopover",defaultColor:"orange",showDefaultColor:!0,showRecentColors:!0,showMoreColors:!0,default:`<ui5-color-palette-item value="lightsalmon"></ui5-color-palette-item>
<ui5-color-palette-item value="lightpink"></ui5-color-palette-item>
<ui5-color-palette-item value="rgb(216,124,172)"></ui5-color-palette-item>
<ui5-color-palette-item value="#6c666d"></ui5-color-palette-item>
<ui5-color-palette-item value="rgb(55,81,95)"></ui5-color-palette-item>
<ui5-color-palette-item value="#0072bb"></ui5-color-palette-item>
<ui5-color-palette-item value="powderblue"></ui5-color-palette-item>
<ui5-color-palette-item value="rgb(143,201,58)"></ui5-color-palette-item>
<ui5-color-palette-item value="rgb(195,172,206)"></ui5-color-palette-item>
<ui5-color-palette-item value="orange"></ui5-color-palette-item>
<ui5-color-palette-item value="#ef3054"></ui5-color-palette-item>
<ui5-color-palette-item value="#ff6f59"></ui5-color-palette-item>
<ui5-color-palette-item value="moccasin"></ui5-color-palette-item>
<ui5-color-palette-item value="#07A0C3"></ui5-color-palette-item>
<ui5-color-palette-item value="rgb(8,103,136)"></ui5-color-palette-item>`};o.decorators=[e=>l(p||(p=f([`<ui5-button id="colorPaletteBtn">Open ColorPalettePopover</ui5-button>
    `,`
    <script>
        colorPaletteBtn.addEventListener("click", function(event) {
            colorPalettePopover.showAt(this);
        });
    <\/script>`])),e())];o.parameters={docs:{story:{inline:!1,iframeHeight:"500px"}}};var c,s,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:'args => html`<ui5-color-palette-popover\n    id="${ifDefined(args.id)}"\n    ?show-recent-colors="${ifDefined(args.showRecentColors)}"\n    ?show-more-colors="${ifDefined(args.showMoreColors)}"\n    ?show-default-color="${ifDefined(args.showDefaultColor)}"\n    default-color="${ifDefined(args.defaultColor)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-color-palette-popover>`',...(u=(s=t.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var n,m,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:'args => html`<ui5-color-palette-popover\n    id="${ifDefined(args.id)}"\n    ?show-recent-colors="${ifDefined(args.showRecentColors)}"\n    ?show-more-colors="${ifDefined(args.showMoreColors)}"\n    ?show-default-color="${ifDefined(args.showDefaultColor)}"\n    default-color="${ifDefined(args.defaultColor)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-color-palette-popover>`',...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const j=["Basic","DefaultColor"];export{t as Basic,o as DefaultColor,j as __namedExportsOrder,U as default};
//# sourceMappingURL=ColorPalettePopover.stories-a5ff94fb.js.map
