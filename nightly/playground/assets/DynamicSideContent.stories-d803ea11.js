import{x as r}from"./lit-element-c5a2b594.js";import{l as t}from"./if-defined-c29cffe1.js";import{o as n}from"./unsafe-html-0ddd83da.js";import{D as l}from"./docs-e84ba059.js";import{S as d}from"./SideContentVisibility-420b58b7.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-3405e844.js";import"./iframe-19e11ab8.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-23f3b83c.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const c={sideContentFallDown:{control:"select",options:["BelowL","BelowM","BelowXL","OnMinimumWidth"]},sideContentPosition:{control:"select",options:["End","Start"]},sideContentVisibility:{control:"select",options:["AlwaysShow","NeverShow","ShowAboveL","ShowAboveM","ShowAboveS"]},default:{control:{type:"text"}},sideContent:{control:{type:"text"}},toggleContents:{description:"Toggles visibility of main and side contents on S screen size (mobile device).",table:{category:"methods"}},"layout-change":{description:"Fires when the current breakpoint has been changed.",table:{category:"events"},UI5CustomData:{parameters:[{name:"currentBreakpoint",type:"string",description:"the current breakpoint."},{name:"previousBreakpoint",type:"string",description:"the breakpoint that was active before change to current breakpoint."},{name:"mainContentVisible",type:"boolean",description:"visibility of the main content."},{name:"sideContentVisible",type:"boolean",description:"visibility of the side content."}]}}},m={package:"@ui5/webcomponents-fiori",since:"1.1.0"},u="ui5-dynamic-side-content",B={title:"Fiori/DynamicSideContent",component:"DynamicSideContent",parameters:{docs:{page:l({...m,component:u})}},argTypes:c},p=e=>r`
<style>
    .text {
        display: inline-block;
        font-size: var(--sapFontSize);
        font-family: var(--sapFontFamily);
        color: var(--sapTextColor);
        line-height: normal;
        white-space: pre-line;
        word-wrap: break-word;
        cursor: text;
}
</style>
<ui5-dynamic-side-content
    ?equal-split="${t(e.equalSplit)}"
    ?hide-main-content="${t(e.hideMainContent)}"
    ?hide-side-content="${t(e.hideSideContent)}"
    side-content-position="${t(e.sideContentPosition)}"
    side-content-visibility="${t(e.sideContentVisibility)}"
    side-content-fall-down="${t(e.sideContentFallDown)}"
>
    ${n(e.default)}
    ${n(e.sideContent)}
</ui5-dynamic-side-content>`,i=p.bind({});i.args={default:`<div>
    <ui5-title level="h1">Main Content</ui5-title>
    <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
</div>`,sideContent:`<div slot="sideContent">
    <ui5-title level="h1">Side Content</ui5-title>
    <p class="text">Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
</div>`,sideContentVisibility:d.AlwaysShow};var o,s,a;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`args => html\`
<style>
    .text {
        display: inline-block;
        font-size: var(--sapFontSize);
        font-family: var(--sapFontFamily);
        color: var(--sapTextColor);
        line-height: normal;
        white-space: pre-line;
        word-wrap: break-word;
        cursor: text;
}
</style>
<ui5-dynamic-side-content
    ?equal-split="\${ifDefined(args.equalSplit)}"
    ?hide-main-content="\${ifDefined(args.hideMainContent)}"
    ?hide-side-content="\${ifDefined(args.hideSideContent)}"
    side-content-position="\${ifDefined(args.sideContentPosition)}"
    side-content-visibility="\${ifDefined(args.sideContentVisibility)}"
    side-content-fall-down="\${ifDefined(args.sideContentFallDown)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.sideContent)}
</ui5-dynamic-side-content>\``,...(a=(s=i.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const T=["Basic"];export{i as Basic,T as __namedExportsOrder,B as default};
//# sourceMappingURL=DynamicSideContent.stories-d803ea11.js.map
