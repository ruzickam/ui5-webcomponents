import{x as k}from"./lit-element-c5a2b594.js";import{l as t}from"./if-defined-c29cffe1.js";import{o as y}from"./unsafe-html-0ddd83da.js";import{D as w}from"./docs-fda2c664.js";import{T as L}from"./TabLayout-8f6a62b3.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-f4c88fd4.js";import"./iframe-20b64930.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-8dceee91.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const B={allItems:{control:{type:!1}},contentBackgroundDesign:{control:"select",options:["Solid","Translucent","Transparent"]},headerBackgroundDesign:{control:"select",options:["Solid","Translucent","Transparent"]},tabLayout:{control:"select",options:["Inline","Standard"]},tabsOverflowMode:{control:"select",options:["End","StartAndEnd"]},default:{control:{type:"text"}},overflowButton:{control:{type:"text"}},startOverflowButton:{control:{type:"text"}},"tab-select":{description:"Fired when a tab is selected.",table:{category:"events"},UI5CustomData:{parameters:[{name:"tab",type:"HTMLElement",description:"The selected <code>tab</code>."},{name:"tabIndex",type:"Integer",description:"The selected <code>tab</code> index in the flattened array of all tabs and their subTabs, provided by the <code>allItems</code> getter."}]}}},O={package:"@ui5/webcomponents"},S="ui5-tabcontainer",z={title:"Main/Tab Container",component:"TabContainer",subcomponents:{Tab:"Tab",TabSeparator:"TabSeparator"},parameters:{docs:{page:w({...O,component:S})}},argTypes:B},r=e=>k`<ui5-tabcontainer
    ?fixed="${t(e.fixed)}"
    ?collapsed="${t(e.collapsed)}"
    tab-layout="${t(e.tabLayout)}"
    tabs-overflow-mode="${t(e.tabsOverflowMode)}"
    header-background-design="${t(e.headerBackgroundDesign)}"
    content-background-design="${t(e.contentBackgroundDesign)}"
    tabs-placement="${t(e.tabsPlacement)}"
>
    ${y(e.default)}
</ui5-tabcontainer>`,a=r.bind({});a.args={default:`<ui5-tab icon="menu" text="Tab 1">
    <ui5-label>Quibusdam, veniam! Architecto debitis iusto ad et, asperiores quisquam perferendis reprehenderit ipsa voluptate minus minima, perspiciatis cum. Totam harum necessitatibus numquam voluptatum.</ui5-label>
</ui5-tab>
<ui5-tab icon="activities" text="Tab 2" selected>
    <ui5-label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magni facere error dicta beatae optio repudiandae vero, quidem voluptatibus perferendis eum maiores rem tempore voluptates aperiam eos enim delectus unde.</ui5-label>
</ui5-tab>
<ui5-tab icon="add" text="Tab 3">
    <ui5-label>Dignissimos debitis architecto temporibus doloribus reiciendis libero rem nemo, nobis quidem dolor praesentium, beatae voluptatum iste eveniet, nam voluptatem obcaecati ducimus dolore.</ui5-label>
</ui5-tab>
<ui5-tab icon="calendar" text="Tab 4">
    <ui5-label>Possimus ipsa eos impedit aut nisi repellendus recusandae, temporibus ducimus, necessitatibus tenetur facere, minima vero fugit rem reiciendis natus ratione quia numquam?</ui5-label>
</ui5-tab>
<ui5-tab-separator></ui5-tab-separator>
<ui5-tab icon="action-settings" text="Tab 5">
    <ui5-label>Explicabo laboriosam ab consequuntur, qui dignissimos inventore sapiente ullam quaerat ratione libero vero, beatae laudantium! Aperiam numquam tempore, laudantium perferendis recusandae autem.</ui5-label>
</ui5-tab>`};const i=r.bind({});i.args={collapsed:!0,fixed:!0,default:`<ui5-tab text="Home"></ui5-tab>
<ui5-tab text="What's new" selected></ui5-tab>
<ui5-tab text="Who are we"></ui5-tab>
<ui5-tab text="About"></ui5-tab>
<ui5-tab text="Contacts"></ui5-tab>`};const n=r.bind({});n.args={collapsed:!0,fixed:!0,default:`<ui5-tab text="Tab 1"></ui5-tab>
<ui5-tab text="Tab 2"></ui5-tab>
<ui5-tab text="Tab 3"></ui5-tab>
<ui5-tab text="Tab 4"></ui5-tab>
<ui5-tab text="Tab 5"></ui5-tab>
<ui5-tab text="Tab 6"></ui5-tab>
<ui5-tab text="Tab 7"></ui5-tab>
<ui5-tab text="Tab 8"></ui5-tab>
<ui5-tab text="Tab 9"></ui5-tab>
<ui5-tab text="Tab 10"></ui5-tab>
<ui5-tab text="Tab 11"></ui5-tab>
<ui5-tab text="Tab 12"></ui5-tab>
<ui5-tab text="Tab 13" selected></ui5-tab>
<ui5-tab text="Tab 14"></ui5-tab>
<ui5-tab text="Tab 15"></ui5-tab>
<ui5-tab text="Tab 16"></ui5-tab>
<ui5-tab text="Tab 17"></ui5-tab>
<ui5-tab text="Tab 18"></ui5-tab>
<ui5-tab text="Tab 19"></ui5-tab>
<ui5-tab text="Tab 20"></ui5-tab>
<ui5-tab text="Tab 21"></ui5-tab>
<ui5-tab text="Tab 22"></ui5-tab>
<ui5-tab text="Tab 23"></ui5-tab>`};const o=r.bind({});o.args={tabLayout:L.Inline,collapsed:!0,fixed:!0,default:`<ui5-tab icon="laptop" text="Monitors" additional-text="10"></ui5-tab>
<ui5-tab icon="video" text="Cameras" additional-text="2" selected></ui5-tab>
<ui5-tab icon="home" text="Rooms" additional-text="16"></ui5-tab>`};const s=r.bind({});s.args={default:`<ui5-tab text="Notes">
    Notes go here ...
</ui5-tab>
<ui5-tab text="Products">
    Products go here ...
    <ui5-tab slot="subTabs" text="Computers">
        Computers go here ...
        <ui5-tab slot="subTabs" text="Laptops" selected>
            Laptops go here ...
        </ui5-tab>
        <ui5-tab slot="subTabs" text="Desktops">
            <ui5-tab slot="subTabs" text="Work Stations">
                Work Stations go here ...
            </ui5-tab>
            <ui5-tab slot="subTabs" text="Game Stations">
                Game Stations go here ...
            </ui5-tab>
            Desktops go here ...
        </ui5-tab>
    </ui5-tab>
    <ui5-tab text="Phones" slot="subTabs">
        <ui5-tab text="Smartphones" slot="subTabs">
            Smartphones go here ...
        </ui5-tab>
        <ui5-tab text="Tablets" slot="subTabs">
            Tablets go here ...
        </ui5-tab>
        Phones go here ...
    </ui5-tab>
</ui5-tab>
<ui5-tab text="Orders">
    Orders go here ...
    <ui5-tab slot="subTabs" text="Attachments">
        Order attachments go here ...
    </ui5-tab>
</ui5-tab>`};var u,b,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return html\`<ui5-tabcontainer
    ?fixed="\${ifDefined(args.fixed)}"
    ?collapsed="\${ifDefined(args.collapsed)}"
    tab-layout="\${ifDefined(args.tabLayout)}"
    tabs-overflow-mode="\${ifDefined(args.tabsOverflowMode)}"
    header-background-design="\${ifDefined(args.headerBackgroundDesign)}"
    content-background-design="\${ifDefined(args.contentBackgroundDesign)}"
    tabs-placement="\${ifDefined(args.tabsPlacement)}"
>
    \${unsafeHTML(args.default)}
</ui5-tabcontainer>\`;
}`,...(d=(b=a.parameters)==null?void 0:b.docs)==null?void 0:d.source}}};var c,l,m;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return html\`<ui5-tabcontainer
    ?fixed="\${ifDefined(args.fixed)}"
    ?collapsed="\${ifDefined(args.collapsed)}"
    tab-layout="\${ifDefined(args.tabLayout)}"
    tabs-overflow-mode="\${ifDefined(args.tabsOverflowMode)}"
    header-background-design="\${ifDefined(args.headerBackgroundDesign)}"
    content-background-design="\${ifDefined(args.contentBackgroundDesign)}"
    tabs-placement="\${ifDefined(args.tabsPlacement)}"
>
    \${unsafeHTML(args.default)}
</ui5-tabcontainer>\`;
}`,...(m=(l=i.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var f,p,g;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  return html\`<ui5-tabcontainer
    ?fixed="\${ifDefined(args.fixed)}"
    ?collapsed="\${ifDefined(args.collapsed)}"
    tab-layout="\${ifDefined(args.tabLayout)}"
    tabs-overflow-mode="\${ifDefined(args.tabsOverflowMode)}"
    header-background-design="\${ifDefined(args.headerBackgroundDesign)}"
    content-background-design="\${ifDefined(args.contentBackgroundDesign)}"
    tabs-placement="\${ifDefined(args.tabsPlacement)}"
>
    \${unsafeHTML(args.default)}
</ui5-tabcontainer>\`;
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var x,T,D;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  return html\`<ui5-tabcontainer
    ?fixed="\${ifDefined(args.fixed)}"
    ?collapsed="\${ifDefined(args.collapsed)}"
    tab-layout="\${ifDefined(args.tabLayout)}"
    tabs-overflow-mode="\${ifDefined(args.tabsOverflowMode)}"
    header-background-design="\${ifDefined(args.headerBackgroundDesign)}"
    content-background-design="\${ifDefined(args.contentBackgroundDesign)}"
    tabs-placement="\${ifDefined(args.tabsPlacement)}"
>
    \${unsafeHTML(args.default)}
</ui5-tabcontainer>\`;
}`,...(D=(T=o.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var h,$,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return html\`<ui5-tabcontainer
    ?fixed="\${ifDefined(args.fixed)}"
    ?collapsed="\${ifDefined(args.collapsed)}"
    tab-layout="\${ifDefined(args.tabLayout)}"
    tabs-overflow-mode="\${ifDefined(args.tabsOverflowMode)}"
    header-background-design="\${ifDefined(args.headerBackgroundDesign)}"
    content-background-design="\${ifDefined(args.contentBackgroundDesign)}"
    tabs-placement="\${ifDefined(args.tabsPlacement)}"
>
    \${unsafeHTML(args.default)}
</ui5-tabcontainer>\`;
}`,...(v=($=s.parameters)==null?void 0:$.docs)==null?void 0:v.source}}};const J=["Basic","TextOnlyTabs","TextOnlyEndOverflow","InlineTabLayout","NestedTabs"];export{a as Basic,o as InlineTabLayout,s as NestedTabs,n as TextOnlyEndOverflow,i as TextOnlyTabs,J as __namedExportsOrder,z as default};
//# sourceMappingURL=TabContainer.stories-b7b7115a.js.map
