import{x as m}from"./lit-element-c5a2b594.js";import{o as i}from"./unsafe-html-0ddd83da.js";import{l as o}from"./if-defined-c29cffe1.js";import{D as p}from"./docs-12315973.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-27169319.js";import"./iframe-d3ab26ac.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-c8a9de12.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const c={filterItems:{control:{type:"text"}},sortItems:{control:{type:"text"}},setConfirmedSettings:{description:`Sets a JavaScript object, as settings to the <code>ui5-view-settings-dialog</code>. This method can be used after the dialog is initially open, as the dialog needs to set its initial settings.<br> The <code>ui5-view-settings-dialog</code> throws an event called "before-open", which can be used as a trigger point.<br> The object should have the following format:<br> <pre>
{
	sortOrder: "Ascending",
	sortBy: "Name",
	filters: [
		{"Filter 1": ["Some filter 1", "Some filter 2"]},
		{"Filter 2": ["Some filter 4"]},
	]
}
</pre>`,table:{category:"methods"},UI5CustomData:{parameters:[{name:"settings",type:"Object",optional:!1,parameterProperties:{sortOrder:{name:"sortOrder",type:"string",optional:!1,description:"sort order"},sortBy:{name:"sortBy",type:"string",optional:!1,description:"sort by"},filters:{name:"filters",type:"Object[]",optional:!1,description:"filters"}},description:"predefined settings."}]}},show:{description:"Shows the dialog.",table:{category:"methods"}},cancel:{description:"Fired when cancel button is activated.",table:{category:"events"},UI5CustomData:{parameters:[{name:"sortOrder",type:"String",description:"The current sort order selected."},{name:"sortBy",type:"String",description:"The currently selected <code>ui5-sort-item</code> text attribute."},{name:"sortByItem",type:"HTMLElement",description:"The currently selected <code>ui5-sort-item</code>."},{name:"sortDescending",type:"Boolean",description:"The selected sort order (true = descending, false = ascending)."},{name:"filters",type:"Array",description:"The selected filters items."}]}},confirm:{description:"Fired when confirmation button is activated.",table:{category:"events"},UI5CustomData:{parameters:[{name:"sortOrder",type:"String",description:"The current sort order selected."},{name:"sortBy",type:"String",description:"The currently selected <code>ui5-sort-item</code> text attribute."},{name:"sortByItem",type:"HTMLElement",description:"The currently selected <code>ui5-sort-item</code>."},{name:"sortDescending",type:"Boolean",description:"The selected sort order (true = descending, false = ascending)."},{name:"filters",type:"Array",description:"The selected filters items."}]}}},u={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.16"};var r=Object.freeze,f=Object.defineProperty,g=(t,d)=>r(f(t,"raw",{value:r(d||t.slice())})),s;const v="ui5-view-settings-dialog",E={title:"Fiori/ViewSettingsDialog",component:"ViewSettingsDialog",subcomponents:{SortItem:"SortItem",FilterItem:"FilterItem",FilterItemOption:"FilterItemOption"},parameters:{docs:{page:p({...u,component:v})}},argTypes:c},y=t=>m`<ui5-view-settings-dialog
    id="${o(t.id)}"
    sort-descending="${o(t.sortDescending)}"
>
    ${i(t.sortItems)}
    ${i(t.filterItems)}
</ui5-view-settings-dialog>`,e=y.bind({});e.storyName="Example Usage";e.args={id:"vsd1",sortDescending:!0,sortItems:`<ui5-sort-item slot="sortItems" text="Name" selected=""></ui5-sort-item>
<ui5-sort-item slot="sortItems" text="Position"></ui5-sort-item>
<ui5-sort-item slot="sortItems" text="Company"></ui5-sort-item>
<ui5-sort-item slot="sortItems" text="Department"></ui5-sort-item>`,filterItems:`<ui5-filter-item slot="filterItems" text="Position">
    <ui5-filter-item-option slot="values" text="CTO"></ui5-filter-item-option>
    <ui5-filter-item-option slot="values" text="CPO"></ui5-filter-item-option>
    <ui5-filter-item-option slot="values" text="VP"></ui5-filter-item-option>
</ui5-filter-item>
<ui5-filter-item slot="filterItems" text="Department">
    <ui5-filter-item-option slot="values" text="Sales"></ui5-filter-item-option>
    <ui5-filter-item-option slot="values" text="Management"></ui5-filter-item-option>
    <ui5-filter-item-option slot="values" text="PR"></ui5-filter-item-option>
</ui5-filter-item>
<ui5-filter-item slot="filterItems" text="Location">
    <ui5-filter-item-option slot="values" text="Walldorf"></ui5-filter-item-option>
    <ui5-filter-item-option slot="values" text="New York"></ui5-filter-item-option>
    <ui5-filter-item-option slot="values" text="London"></ui5-filter-item-option>
</ui5-filter-item>
<ui5-filter-item slot="filterItems" text="Reports to">
    <ui5-filter-item-option slot="values" text="CTO"></ui5-filter-item-option>
    <ui5-filter-item-option slot="values" text="CPO"></ui5-filter-item-option>
    <ui5-filter-item-option slot="values" text="VP"></ui5-filter-item-option>
</ui5-filter-item>`};e.decorators=[t=>m(s||(s=g([`<ui5-button id="btnOpenDialog1">Open ViewSettingsDialog</ui5-button>
    `,`
    <br/>
    <br/>
    <div id="vsdResults"></div>
    <script>
        var vsdResults = document.getElementById("vsdResults");
        btnOpenDialog1.addEventListener("click", function () {
            vsdResults.innerHTML = "";
            vsd1.show();
        });
        vsd1.addEventListener("confirm", function(evt) {
            vsdResults.innerHTML = JSON.stringify(evt.detail);
        });
    <\/script>
    `])),t())];e.parameters={docs:{story:{inline:!1,iframeHeight:"500px"}}};var n,l,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:'args => html`<ui5-view-settings-dialog\n    id="${ifDefined(args.id)}"\n    sort-descending="${ifDefined(args.sortDescending)}"\n>\n    ${unsafeHTML(args.sortItems)}\n    ${unsafeHTML(args.filterItems)}\n</ui5-view-settings-dialog>`',...(a=(l=e.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const H=["Basic"];export{e as Basic,H as __namedExportsOrder,E as default};
//# sourceMappingURL=ViewSettingsDialog.stories-7d2a43c9.js.map
