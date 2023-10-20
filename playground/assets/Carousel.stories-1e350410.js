import{x as r}from"./lit-element-c5a2b594.js";import{l as i}from"./if-defined-c29cffe1.js";import{o as p}from"./unsafe-html-0ddd83da.js";import{D as g}from"./docs-a58dd199.js";import{C as u}from"./CarouselArrowsPlacement-f6f55791.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-d23eae87.js";import"./iframe-17871902.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-9c2f7062.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const f={arrowsPlacement:{control:"select",options:["Content","Navigation"]},backgroundDesign:{control:"select",options:["Solid","Translucent","Transparent"]},pageIndicatorBackgroundDesign:{control:"select",options:["Solid","Translucent","Transparent"]},pageIndicatorBorderDesign:{control:"select",options:["Transparent","Solid"]},pageIndicatorStyle:{control:"select",options:["Default","Numeric"]},default:{control:{type:"text"}},navigateTo:{description:"Changes the currently displayed page.",table:{category:"methods"},UI5CustomData:{parameters:[{name:"itemIndex",type:"Integer",optional:!1,description:"The index of the target page"}]}},navigate:{description:"Fired whenever the page changes due to user interaction, when the user clicks on the navigation arrows or while resizing, based on the <code>items-per-page-l</code>, <code>items-per-page-m</code> and <code>items-per-page-s</code> properties.",table:{category:"events"},UI5CustomData:{parameters:[{name:"selectedIndex",type:"Integer",description:"the current selected index"}]}}},h={package:"@ui5/webcomponents",since:"1.0.0-rc.6"},P="ui5-carousel",B={title:"Main/Carousel",component:"Carousel",parameters:{docs:{page:g({...h,component:P})}},argTypes:f},d=e=>r`
<ui5-carousel
    ?cyclic="${i(e.cyclic)}"
    items-per-page-s="${i(e.itemsPerPageS)}"
    items-per-page-m="${i(e.itemsPerPageM)}"
    items-per-page-l="${i(e.itemsPerPageL)}"
    ?hide-navigation-arrows="${i(e.hideNavigationArrows)}"
    ?hide-page-indicator="${i(e.hidePageIndicator)}"
    page-indicator-style="${i(e.pageIndicatorStyle)}"
    arrows-placement="${i(e.arrowsPlacement)}"
>
    ${p(e.default)}
</ui5-carousel>`,a=d.bind({});a.args={cyclic:!0,default:`<img src="../assets/images/sample1.jpg" alt="Landscape 1">
    <img src="../assets/images/sample2.jpg" alt="Landscape 2">
    <img src="../assets/images/sample3.jpg" alt="Bulb">`};a.decorators=[e=>r`<style>
    img {
        max-height: 30rem;
    }
</style>
${e()}`];const t=d.bind({});t.args={itemsPerPageS:1,itemsPerPageM:2,itemsPerPageL:2,arrowsPlacement:u.Navigation,default:`<ui5-card class="medium">
    <ui5-card-header slot="header" title-text="Activities" subtitle-text="For Today"></ui5-card-header>
    <ui5-timeline>
        <ui5-timeline-item id="test-item" title-text="called" timestamp="1487583000000" icon="phone" name="John Smith" name-clickable=""></ui5-timeline-item>
        <ui5-timeline-item title-text="Weekly Sync - CP Design" timestamp="1517349600000" icon="calendar">MR SOF02 2.43</ui5-timeline-item>
        <ui5-timeline-item title-text="Video Conference Call - UI5" timestamp="1485813600000" icon="calendar">Online meeting</ui5-timeline-item>
    </ui5-timeline>
</ui5-card>
<ui5-card class="small">
    <ui5-card-header slot="header" title-text="David Williams" subtitle-text="Sales Manager">
        <img src="../assets/images/avatars/man_avatar_1.png" alt="" slot="avatar">
    </ui5-card-header>
    <ui5-list separators="Inner">
        <ui5-li icon="competitor" icon-end>Personal Development</ui5-li>
        <ui5-li icon="wallet" icon-end>Finance</ui5-li>
        <ui5-li icon="collaborate" icon-end>Communications Skills</ui5-li>
    </ui5-list>
</ui5-card>
<ui5-card class="medium">
    <ui5-card-header slot="header" title-text="Team Dolphins" subtitle-text="Direct Reports" status="1 of 2">
        <ui5-icon name="group" slot="avatar"></ui5-icon>
    </ui5-card-header>
    <ui5-list separators="None">
        <ui5-li image="../assets/images/avatars/man_avatar_1.png" description="User Researcher">Alain Chevalier</ui5-li>
        <ui5-li image="../assets/images/avatars/woman_avatar_1.png" description="Artist">Monique Legrand</ui5-li>
        <ui5-li image="../assets/images/avatars/woman_avatar_2.png" description="UX Specialist">Michael Adams</ui5-li>
    </ui5-list>
</ui5-card>
<ui5-card class="medium">
    <ui5-card-header slot="header" title-text="Team Bears" subtitle-text="Direct Reports" interactive="" status="2 of 2">
        <ui5-icon name="group" slot="avatar"></ui5-icon>
    </ui5-card-header>
    <ui5-list separators="None">
        <ui5-li image="../assets/images/avatars/man_avatar_2.png" description="Software Architect">Richard Wilson</ui5-li>
        <ui5-li image="../assets/images/avatars/woman_avatar_3.png" description="Visual Designer">Elena Petrova</ui5-li>
        <ui5-li image="../assets/images/avatars/man_avatar_3.png" description="Quality Specialist">John Miller</ui5-li>
    </ui5-list>
</ui5-card>`};t.decorators=[e=>r`<style>
    ui5-carousel::part(content) {
        padding-block: 0.75rem;
    }

    ui5-card {
        min-width: 18rem;
    }

    ui5-card ui5-list:last-child {
        margin-block-end: 0.75rem;
    }

    ui5-li::part(icon) {
        padding-inline-end: 0;
    }
</style>
${e()}`];var s,n,o;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  return html\`
<ui5-carousel
    ?cyclic="\${ifDefined(args.cyclic)}"
    items-per-page-s="\${ifDefined(args.itemsPerPageS)}"
    items-per-page-m="\${ifDefined(args.itemsPerPageM)}"
    items-per-page-l="\${ifDefined(args.itemsPerPageL)}"
    ?hide-navigation-arrows="\${ifDefined(args.hideNavigationArrows)}"
    ?hide-page-indicator="\${ifDefined(args.hidePageIndicator)}"
    page-indicator-style="\${ifDefined(args.pageIndicatorStyle)}"
    arrows-placement="\${ifDefined(args.arrowsPlacement)}"
>
    \${unsafeHTML(args.default)}
</ui5-carousel>\`;
}`,...(o=(n=a.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var c,l,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return html\`
<ui5-carousel
    ?cyclic="\${ifDefined(args.cyclic)}"
    items-per-page-s="\${ifDefined(args.itemsPerPageS)}"
    items-per-page-m="\${ifDefined(args.itemsPerPageM)}"
    items-per-page-l="\${ifDefined(args.itemsPerPageL)}"
    ?hide-navigation-arrows="\${ifDefined(args.hideNavigationArrows)}"
    ?hide-page-indicator="\${ifDefined(args.hidePageIndicator)}"
    page-indicator-style="\${ifDefined(args.pageIndicatorStyle)}"
    arrows-placement="\${ifDefined(args.arrowsPlacement)}"
>
    \${unsafeHTML(args.default)}
</ui5-carousel>\`;
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const R=["Basic","MultipleItemsPerPage"];export{a as Basic,t as MultipleItemsPerPage,R as __namedExportsOrder,B as default};
//# sourceMappingURL=Carousel.stories-1e350410.js.map
