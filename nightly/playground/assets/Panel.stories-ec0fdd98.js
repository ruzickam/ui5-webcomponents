import{x as s}from"./lit-element-c5a2b594.js";import{l as i}from"./if-defined-c29cffe1.js";import{o as u}from"./unsafe-html-0ddd83da.js";import{D as q}from"./docs-62769fbc.js";import{P as y}from"./PanelAccessibleRole-3fbc63f7.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-0ee31042.js";import"./iframe-26758a91.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-03448384.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const H={accessibleRole:{control:"select",options:["Complementary","Form","Region"]},headerLevel:{control:"select",options:["H1","H2","H3","H4","H5","H6"]},default:{control:{type:"text"}},header:{control:{type:"text"}}},k={package:"@ui5/webcomponents"},T="ui5-panel";let D=0;const O={title:"Main/Panel",component:"Panel",parameters:{docs:{page:q({...k,component:T})}},argTypes:H},o=e=>s`
<ui5-panel
    id="panel-${++D}"
    accessible-role="${i(e.accessibleRole)}"
    header-text="${i(e.headerText)}"
    ?fixed="${i(e.fixed)}"
    ?collapsed="${i(e.collapsed)}"
    ?no-animation="${i(e.noAnimation)}"
    header-level="${i(e.headerLevel)}"
    accessible-name="${i(e.accessibleName)}"
    ?sticky-header="${i(e.stickyHeader)}"
>
    ${u(e.header)}
    ${u(e.default)}
</ui5-panel>`,a=o.bind({});a.decorators=[e=>s`
            <style>
                .content-color {
                    color: var(--sapField_TextColor);
                }
            </style>
            ${e()}`];a.args={headerText:"Both expandable and expanded",default:`
    <ui5-title level="H1"> I am a heading! </ui5-title>
    <ui5-label wrapping-type="Normal">Short text.</ui5-label>
    <br/>
    <ui5-label wrapping-type="Normal">Another text.</ui5-label>
    <p class="content-color">Aute ullamco officia fugiat culpa do tempor tempor aute excepteur magna.
        Quis velit adipisicing excepteur do eu duis elit. Sunt ea pariatur nulla est laborum proident sunt labore
        commodo Lorem laboris nisi Lorem.
    </p>`};const n=o.bind({});n.args={headerText:"Country Of Birth",accessibleRole:y.Complementary,fixed:!0,default:`
    <ui5-list mode="SingleSelectBegin">
        <ui5-li key="country1">Argentina</ui5-li>
        <ui5-li key="country2">Bulgaria</ui5-li>
        <ui5-li key="country3">China</ui5-li>
        <ui5-li key="country4">Germany</ui5-li>
    </ui5-list>`};const r=o.bind({});r.decorators=[e=>s`
            <style>
                #panel-${D+1} {
                    width: 90%;
                    margin: 0 auto 0 auto;
                }
                .content-color {
                    color: var(--sapField_TextColor);
                }
            </style>
            <div style="height: 250px; overflow: scroll;">
                ${e()}
            </div>`];r.args={headerText:"Sticky header",stickyHeader:!0,default:`
    <ui5-title>Lorem ipsum!</ui5-title>
    <p class="content-color">
        Lorem ipsum dolor sit amet, tamquam invidunt cu sed, unum regione mel ea, quo ea alia novum. Ne qui illud zril
        nostrum, vel ea sint dicant postea. Vel ne facete tritani, neglegentur concludaturque sed te. His animal dolorum ut.
        Aeterno appareat ei mei, cu sed elit scripserit, an quodsi oportere accusamus quo. Pri ea probo corpora rationibus,
        soluta incorrupte ex his.
        Mei ei brute cetero, id duo magna aeque torquatos. Quodsi erroribus mediocritatem his ut, ad pri legere iracundia
        democritum. Menandri intellegam in mea, ex vero movet qualisque sed. Maiorum verterem perfecto nec ea, est velit
        elaboraret consequuntur eu, eam ad reque postea admodum. Ne inimicus convenire pri, doctus vidisse te ius.
        Percipitur contentiones in vis, cu vim propriae phaedrum. Has ad magna errem honestatis, duo vero graeco epicurei
        no, populo semper sit ne. Vulputate dissentiunt interpretaris ea vis, nec civibus moderatius at. Cu vim stet
        dissentias, no vidit saperet indoctum nec, et pro magna prima nobis. Vis consul feugiat qualisque in, regione
        persecuti cotidieque id eos, id ius omnesque vituperata.
        Lorem ipsum dolor sit amet, tamquam invidunt cu sed, unum regione mel ea, quo ea alia novum. Ne qui illud zril
        nostrum, vel ea sint dicant postea. Vel ne facete tritani, neglegentur concludaturque sed te. His animal dolorum ut.
        Aeterno appareat ei mei, cu sed elit scripserit, an quodsi oportere accusamus quo. Pri ea probo corpora rationibus,
        soluta incorrupte ex his.
        Mei ei brute cetero, id duo magna aeque torquatos. Quodsi erroribus mediocritatem his ut, ad pri legere iracundia
        democritum. Menandri intellegam in mea, ex vero movet qualisque sed. Maiorum verterem perfecto nec ea, est velit
        elaboraret consequuntur eu, eam ad reque postea admodum. Ne inimicus convenire pri, doctus vidisse te ius.
        Percipitur contentiones in vis, cu vim propriae phaedrum. Has ad magna errem honestatis, duo vero graeco epicurei
        no, populo semper sit ne. Vulputate dissentiunt interpretaris ea vis, nec civibus moderatius at. Cu vim stet
        dissentias, no vidit saperet indoctum nec, et pro magna prima nobis. Vis consul feugiat qualisque in, regione
        persecuti cotidieque id eos, id ius omnesque vituperata.
    </p>`};const t=o.bind({});t.decorators=[e=>s`
<style>
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
</style>
    ${e()}`];t.args={accessibleRole:y.Complementary,header:`
    <div slot="header" class="header">
        <ui5-title>Countries</ui5-title>
        <div>
            <ui5-button design="Emphasized">Add</ui5-button>
            <ui5-button design="Negative">Remove</ui5-button>
            <ui5-button>Edit</ui5-button>
        </div>
    </div>`,default:`
    <ui5-list mode="MultiSelect">
        <ui5-li key="country1">Argentina</ui5-li>
        <ui5-li key="country2">Bulgaria</ui5-li>
        <ui5-li key="country3">China</ui5-li>
    </ui5-list>`};var l,d,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`args => html\`
<ui5-panel
    id="panel-\${++index}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
    header-text="\${ifDefined(args.headerText)}"
    ?fixed="\${ifDefined(args.fixed)}"
    ?collapsed="\${ifDefined(args.collapsed)}"
    ?no-animation="\${ifDefined(args.noAnimation)}"
    header-level="\${ifDefined(args.headerLevel)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    ?sticky-header="\${ifDefined(args.stickyHeader)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-panel>\``,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,p,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => html\`
<ui5-panel
    id="panel-\${++index}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
    header-text="\${ifDefined(args.headerText)}"
    ?fixed="\${ifDefined(args.fixed)}"
    ?collapsed="\${ifDefined(args.collapsed)}"
    ?no-animation="\${ifDefined(args.noAnimation)}"
    header-level="\${ifDefined(args.headerLevel)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    ?sticky-header="\${ifDefined(args.stickyHeader)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-panel>\``,...(f=(p=n.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,h,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => html\`
<ui5-panel
    id="panel-\${++index}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
    header-text="\${ifDefined(args.headerText)}"
    ?fixed="\${ifDefined(args.fixed)}"
    ?collapsed="\${ifDefined(args.collapsed)}"
    ?no-animation="\${ifDefined(args.noAnimation)}"
    header-level="\${ifDefined(args.headerLevel)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    ?sticky-header="\${ifDefined(args.stickyHeader)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-panel>\``,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var $,v,x;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:`args => html\`
<ui5-panel
    id="panel-\${++index}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
    header-text="\${ifDefined(args.headerText)}"
    ?fixed="\${ifDefined(args.fixed)}"
    ?collapsed="\${ifDefined(args.collapsed)}"
    ?no-animation="\${ifDefined(args.noAnimation)}"
    header-level="\${ifDefined(args.headerLevel)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    ?sticky-header="\${ifDefined(args.stickyHeader)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-panel>\``,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const j=["Basic","Fixed","StickyHeader","CustomHeader"];export{a as Basic,t as CustomHeader,n as Fixed,r as StickyHeader,j as __namedExportsOrder,O as default};
//# sourceMappingURL=Panel.stories-ec0fdd98.js.map
