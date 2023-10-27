import{x as n}from"./lit-element-c5a2b594.js";import{D as _}from"./docs-dadb505e.js";import{l as t}from"./if-defined-c29cffe1.js";import{o as d}from"./unsafe-html-0ddd83da.js";import{T as U,a as A}from"./TableGrowingMode-c57ef93b.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-fa025d48.js";import"./iframe-092e8e21.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-f860885c.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const j={growing:{control:"select",options:["Button","None","Scroll"]},mode:{control:"select",options:["MultiSelect","None","SingleSelect"]},columns:{control:{type:"text"}},default:{control:{type:"text"}},"popin-change":{description:"Fired when <code>ui5-table-column</code> is shown as a pop-in instead of hiding it.",table:{category:"events"},UI5CustomData:{parameters:[{name:"poppedColumns",type:"Array",description:"popped-in columns."}]}},"row-click":{description:"Fired when a row in <code>Active</code> mode is clicked or <code>Enter</code> key is pressed.",table:{category:"events"},UI5CustomData:{parameters:[{name:"row",type:"HTMLElement",description:"the activated row."}]}},"selection-change":{description:"Fired when selection is changed by user interaction in <code>SingleSelect</code> and <code>MultiSelect</code> modes.",table:{category:"events"},UI5CustomData:{parameters:[{name:"selectedRows",type:"Array",description:"An array of the selected rows."},{name:"previouslySelectedRows",type:"Array",description:"An array of the previously selected rows."}]}}},K={package:"@ui5/webcomponents"};var p=Object.freeze,V=Object.defineProperty,E=(l,W)=>p(V(l,"raw",{value:p(W||l.slice())})),g,m;const O="ui5-table";let e=0;const ce={title:"Main/Table",component:"Table",subcomponents:{TableColumn:"TableColumn",TableRow:"TableRow",TableGroupRow:"TableGroupRow",TableCell:"TableCell"},parameters:{docs:{page:_({...K,component:O})}},argTypes:j},o=l=>n`
<ui5-table
    id="table-${++e}"
    no-data-text="${t(l.noDataText)}"
    growing-button-text="${t(l.growingButtonText)}"
    growing-button-subtext="${t(l.growingButtonSubtext)}"
    ?hide-no-data="${t(l.hideNoData)}"
    growing="${t(l.growing)}"
    ?busy="${t(l.busy)}"
    busy-delay="${t(l.busyDelay)}"
    ?sticky-column-header="${t(l.stickyColumnHeader)}"
    mode="${t(l.mode)}"
    accessible-name="${t(l.accessibleName)}"
    accessible-name-ref="${t(l.accessibleNameRef)}"
>
    ${d(l.default)}
    ${d(l.columns)}
</ui5-table>
`,r=o.bind({});r.decorators=[l=>n`
            <style>
                ui5-table ui5-table-column.table-header-text-alignment::part(column) {
                    text-align: end;
                }
            </style>
            ${l()}`];r.args={mode:U.None,columns:`
        <ui5-table-column slot="columns">
            <span>Product</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="800">
            <span>Supplier</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="600" popin-text="Dimensions" demand-popin="" class="table-header-text-alignment">
            <span>Dimensions</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="600" popin-text="Weight" demand-popin="" class="table-header-text-alignment">
            <span>Weight</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" class="table-header-text-alignment">
            <span>Price</span>
        </ui5-table-column>`,default:`
        <ui5-table-row>
            <ui5-table-cell>
                <span>Notebook Basic 15</span>
            </ui5-table-cell>
            <ui5-table-cell>
                <span>Very Best Screens</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span>30 x 18 x 3cm</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span style="color: #2b7c2b"><b style='padding-right: 0.125rem'>4.2</b>KG</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span><b style='padding-right: 0.125rem'>956</b>EUR</span>
            </ui5-table-cell>
        </ui5-table-row>`};const c=o.bind({});c.decorators=[l=>n`
            <style>
                ui5-table ui5-table-column.table-header-text-alignment::part(column) {
                    text-align: end;
                }
            </style>
            ${l()}`];c.args={columns:`
        <ui5-table-column slot="columns" popin-display="Inline">
            <span>Product</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="600" popin-text="Supplier" demand-popin="" popin-display="Inline">
            <span>Supplier</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="800" popin-text="Dimensions" demand-popin="" class="table-header-text-alignment" popin-display="Inline">
            <span>Dimensions</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="800" popin-text="Weight" demand-popin="" class="table-header-text-alignment" popin-display="Inline">
            <span>Weight</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" class="table-header-text-alignment" popin-display="Inline">
            <span>Price</span>
        </ui5-table-column>`,default:`
        <ui5-table-row>
            <ui5-table-cell>
                <span>Notebook Basic 15</span>
            </ui5-table-cell>
            <ui5-table-cell>
                <span>Very Best Screens</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span>30 x 18 x 3cm</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span style="color: #2b7c2b"><b style='padding-right: 0.125rem'>4.2</b>KG</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span><b style='padding-right: 0.125rem'>956</b>EUR</span>
            </ui5-table-cell>
        </ui5-table-row>
        <ui5-table-row>
            <ui5-table-cell>
                <span>Notebook Basic 175</span>
            </ui5-table-cell>
            <ui5-table-cell>
                <span>Very Best Screens</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span>29 x 17 x 3.1cm</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span style="color: #2b7c2b"><b style='padding-right: 0.125rem'>4.5</b>KG</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span><b style='padding-right: 0.125rem'>1249</b>EUR</span>
            </ui5-table-cell>
        </ui5-table-row>
        <ui5-table-row>
            <ui5-table-cell>
                <span>Notebook Basic 18</span>
            </ui5-table-cell>
            <ui5-table-cell>
                <span>Very Best Screens</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span>28 x 19 x 2.5cm</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span style="color: #2b7c2b"><b style='padding-right: 0.125rem'>4.2</b>KG</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span><b style='padding-right: 0.125rem'>1570</b>EUR</span>
            </ui5-table-cell>
        </ui5-table-row>`};const u=o.bind({});u.decorators=[l=>n`
            <style>
                ui5-table ui5-table-column.table-header-text-alignment::part(column) {
                    text-align: end;
                }
            </style>
            <div style="height: 150px; overflow: scroll;">
                ${l()}
            </div>`];u.args={stickyColumnHeader:!0,columns:`
        <ui5-table-column slot="columns">
            <span>Product</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="800">
            <span>Supplier</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="600" popin-text="Dimensions" demand-popin="" class="table-header-text-alignment">
            <span>Dimensions</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="600" popin-text="Weight" demand-popin="" class="table-header-text-alignment">
            <span>Weight</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" class="table-header-text-alignment">
            <span>Price</span>
        </ui5-table-column>`,default:`
        <ui5-table-row>
            <ui5-table-cell>
                <span>Notebook Basic 15</span>
            </ui5-table-cell>
            <ui5-table-cell>
                <span>Very Best Screens</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span>30 x 18 x 3cm</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span style="color: #2b7c2b"><b style='padding-right: 0.125rem'>4.2</b>KG</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span><b style='padding-right: 0.125rem'>956</b>EUR</span>
            </ui5-table-cell>
        </ui5-table-row>
        <ui5-table-row>
            <ui5-table-cell>
                <span>Notebook Basic 175</span>
            </ui5-table-cell>
            <ui5-table-cell>
                <span>Very Best Screens</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span>29 x 17 x 3.1cm</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span style="color: #2b7c2b"><b style='padding-right: 0.125rem'>4.5</b>KG</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span><b style='padding-right: 0.125rem'>1249</b>EUR</span>
            </ui5-table-cell>
        </ui5-table-row>
        <ui5-table-row>
            <ui5-table-cell>
                <span>Notebook Basic 18</span>
            </ui5-table-cell>
            <ui5-table-cell>
                <span>Very Best Screens</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span>28 x 19 x 2.5cm</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span style="color: #2b7c2b"><b style='padding-right: 0.125rem'>4.2</b>KG</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span><b style='padding-right: 0.125rem'>1570</b>EUR</span>
            </ui5-table-cell>
        </ui5-table-row>
        <ui5-table-row>
            <ui5-table-cell>
                <span>Notebook Basic 19</span>
            </ui5-table-cell>
            <ui5-table-cell>
                <span>Smartcards</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span>32 x 21 x 4cm</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span style="color: #2b7c2b"><b style='padding-right: 0.125rem'>4.2</b>KG</span>
            </ui5-table-cell>
            <ui5-table-cell style="text-align: right">
                <span><b style='padding-right: 0.125rem'>1650</b>EUR</span>
            </ui5-table-cell>
        </ui5-table-row>`};const a=o.bind({});a.decorators=[l=>n`
            <style>
                ui5-table ui5-table-column.table-header-text-alignment::part(column) {
                    text-align: end;
                }
            </style>
            ${l()}`];a.args={noDataText:"No Data",columns:`
        <ui5-table-column slot="columns">
            <span>Product</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="800">
            <span>Supplier</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="600" popin-text="Dimensions" demand-popin="" class="table-header-text-alignment">
            <span>Dimensions</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="600" popin-text="Weight" demand-popin="" class="table-header-text-alignment">
            <span>Weight</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" class="table-header-text-alignment">
            <span>Price</span>
        </ui5-table-column>`};const i=o.bind({});a.decorators=[l=>n`
            <style>
                ui5-table ui5-table-column.table-header-text-alignment::part(column) {
                    text-align: end;
                }
            </style>
            ${l()}`];i.args={growing:A.Button,columns:`
        <ui5-table-column slot="columns">
            <span>Product</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="800">
            <span>Supplier</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="600" popin-text="Dimensions" demand-popin="" class="table-header-text-alignment">
            <span>Dimensions</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" min-width="600" popin-text="Weight" demand-popin="" class="table-header-text-alignment">
            <span>Weight</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" class="table-header-text-alignment">
            <span>Price</span>
        </ui5-table-column>`};i.decorators=[l=>n(g||(g=E([`
            `,`
            <script>
                const growingTable`,' = document.getElementById("table-',`");
                const rows`,` = 4;
                let loads`,` = 1;
                let sliceIndex`,` = 0;
                let endSliceIndex`," = sliceIndex"," + rows",`;
                const init`,` = async (rows) => {
                    const response = await fetch("../assets/data/products.json");
                    const products = await response.json();
                    const collectionLength = products.length;
                    const loadsAll = Math.ceil(collectionLength / rows);
                    const result = products.slice(sliceIndex`,", endSliceIndex",`).map((product, index) => {
                        return "<ui5-table-row  id=roll-" + index + ">" +
                            "<ui5-table-cell><span>" + product.name +"</span></ui5-table-cell>" +
                            "<ui5-table-cell><span>" + product.supplierName + "</span></ui5-table-cell>" +
                            "<ui5-table-cell style='text-align: right'><span>" + product.width + " x " + product.depth + " x " + product.height + product.dimUnit + "</span></ui5-table-cell>" +
                            "<ui5-table-cell style='text-align: right'><span style='color: #2b7c2b' class='middle'><b style='padding-right: 0.125rem'>" + product.weightMeasure + "</b>" + product.weightUnit + "</span></ui5-table-cell>" +
                            "<ui5-table-cell style='text-align: right'><span><b style='padding-right: 0.125rem'> " + product.price + "</b>" + product.currencyCode + "</span></ui5-table-cell></ui5-table-row>";
                    }).join("");
                    if (loads`,` >= loadsAll) {
                        growingTable`,`.growing = "None";
                    } else {
                        growingTable`,'.setAttribute("growing-button-subtext", loads',` * rows + " of " + collectionLength);
                        sliceIndex`,` += rows;
                    }
                    growingTable`,`.insertAdjacentHTML('beforeend', result);
                }
                const loadMore`,` = () => {
                    growingTable`,`.busy = true;
                    setTimeout(() => {
                        ++loads`,`;
                        endSliceIndex`," = sliceIndex"," + rows",`;
                        init`,"(rows",`);
                        growingTable`,`.busy = false;
                    }, 1500);
                }
                growingTable`,'.addEventListener("load-more", loadMore',`);
                init`,"(rows",`);
            <\/script>
            <style>
                ui5-table ui5-table-column.table-header-text-alignment::part(column) {
                    text-align: end;
                }
            </style>`])),l(),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e)];i.storyName='Growing with "More" Button';const s=o.bind({});s.args={growing:A.Scroll,columns:`
        <ui5-table-column id="column-1" slot="columns" width="350px">
            <ui5-label>Product</ui5-label>
        </ui5-table-column>
        <ui5-table-column id="column-2" slot="columns" min-width="800" popin-text="Supplier">
            <ui5-label>Supplier</ui5-label>
        </ui5-table-column>
        <ui5-table-column id="column-3" slot="columns" min-width="600" popin-text="Dimensions" demand-popin="" class="table-header-text-alignment">
            <div class="column-content">
                <ui5-label>Dimensions</ui5-label>
            </div>
        </ui5-table-column>
        <ui5-table-column id="column-4" slot="columns" min-width="600" popin-text="Weight" demand-popin="" class="table-header-text-alignment">
            <ui5-label>Weight</ui5-label>
        </ui5-table-column>
        <ui5-table-column id="column-5" slot="columns" class="table-header-text-alignment">
            <ui5-label>Price</ui5-label>
        </ui5-table-column>`};s.decorators=[l=>n(m||(m=E([`
            <div style="height: 200px; overflow: scroll;">
                `,`
            </div>
            <script>
                const growingTableScroll`,' = document.getElementById("table-',`");
                const rowsScroll`,` = 4;
                let sliceIndexScroll`,` = 0;
                let loadsScroll`,` = 1;
                let endSliceIndexScroll`," = sliceIndexScroll"," + rowsScroll",`;
                const fill`,` = async (rowsScroll) => {
                    const responseScrollTable = await fetch("../assets/data/products.json");
                    const productsScrollTable = await responseScrollTable.json();
                    const collectionLengthScroll = productsScrollTable.length;
                    let loadsAllScroll = Math.ceil(collectionLengthScroll / rowsScroll);
                    const result = productsScrollTable.slice(sliceIndexScroll`,", endSliceIndexScroll",`).map((product, index) => {
                        return "<ui5-table-row  id=roll-" + index + ">" +
                            "<ui5-table-cell><span>" + product.name +"</span></ui5-table-cell>" +
                            "<ui5-table-cell><span>" + product.supplierName + "</span></ui5-table-cell>" +
                            "<ui5-table-cell style='text-align: right'><span>" + product.width + " x " + product.depth + " x " + product.height + product.dimUnit + "</span></ui5-table-cell>" +
                            "<ui5-table-cell style='text-align: right'><span style='color: #2b7c2b'><b style='padding-right: 0.125rem'>" + product.weightMeasure + "</b>" + product.weightUnit + "</span></ui5-table-cell>" +
                            "<ui5-table-cell style='text-align: right'><span><b style='padding-right: 0.125rem'> " + product.price + "</b>" + product.currencyCode + "</span></ui5-table-cell></ui5-table-row>";
                    }).join("");
                    if (loadsScroll`,` >= loadsAllScroll) {
                        growingTableScroll`,`.growing = "None";
                    } else {
                        sliceIndexScroll`,` += rowsScroll;
                    }
                    growingTableScroll`,`.insertAdjacentHTML('beforeend', result);
                }
                const growOnScroll`,` = () => {
                    let timeout`,`;
                    growingTableScroll`,`.busy = true;
                    if (timeout`,`) {
                        clearTimeout(timeout`,`);
                    }
                    timeout`,` = setTimeout(() => {
                        loadsScroll`,`++
                        endSliceIndexScroll`," = sliceIndexScroll"," + rowsScroll",`;
                        fill`,"(rowsScroll",`);
                        growingTableScroll`,`.busy = false;
                    }, 1500);
                }
                growingTableScroll`,'.addEventListener("load-more", growOnScroll',`);
                fill`,"(rowsScroll",`);
            <\/script>
            <style>
                ui5-table ui5-table-column.table-header-text-alignment::part(column) {
                    text-align: end;
                }
            </style>`])),l(),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e)];s.storyName="Growing on Scroll";const b=o.bind({});b.args={mode:U.SingleSelect,columns:`
        <ui5-table-column id="column-1" slot="columns">
            <ui5-label>City</ui5-label>
        </ui5-table-column>
        <ui5-table-column id="column-2" slot="columns" min-width="500" popin-text="Supplier" demand-popin="">
            <ui5-label>Supplier</ui5-label>
        </ui5-table-column>
        <ui5-table-column id="column-3" slot="columns" min-width="500">
            <ui5-label>Country</ui5-label>
        </ui5-table-column>
        `,default:`
        <ui5-table-group-row>Country: Bulgaria</ui5-table-group-row>
        <ui5-table-row>
            <ui5-table-cell><span>Sofia</span></ui5-table-cell>
            <ui5-table-cell><span>Company 1</span></ui5-table-cell>
            <ui5-table-cell><span>Bulgaria</span></ui5-table-cell>
        </ui5-table-row>
        <ui5-table-row>
            <ui5-table-cell><span>Plovdiv</span></ui5-table-cell>
            <ui5-table-cell><span>Company 2</span></ui5-table-cell>
            <ui5-table-cell><span>Bulgaria</span></ui5-table-cell>
        </ui5-table-row>
        <ui5-table-group-row><span>Country: USA</span></ui5-table-group-row>
        <ui5-table-row>
            <ui5-table-cell><span>Denver</span></ui5-table-cell>
            <ui5-table-cell><span>Company 3</span></ui5-table-cell>
            <ui5-table-cell><span>USA</span></ui5-table-cell>
        </ui5-table-row>
        <ui5-table-row>
            <ui5-table-cell><span>Boston</span></ui5-table-cell>
            <ui5-table-cell><span>Company 4</span></ui5-table-cell>
            <ui5-table-cell><span>USA</span></ui5-table-cell>
        </ui5-table-row>
        `};b.storyName="Grouping and Selection";var f,y,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`args => html\`
<ui5-table
    id="table-\${++index}"
    no-data-text="\${ifDefined(args.noDataText)}"
    growing-button-text="\${ifDefined(args.growingButtonText)}"
    growing-button-subtext="\${ifDefined(args.growingButtonSubtext)}"
    ?hide-no-data="\${ifDefined(args.hideNoData)}"
    growing="\${ifDefined(args.growing)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    ?sticky-column-header="\${ifDefined(args.stickyColumnHeader)}"
    mode="\${ifDefined(args.mode)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.columns)}
</ui5-table>
\``,...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var h,w,D;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`args => html\`
<ui5-table
    id="table-\${++index}"
    no-data-text="\${ifDefined(args.noDataText)}"
    growing-button-text="\${ifDefined(args.growingButtonText)}"
    growing-button-subtext="\${ifDefined(args.growingButtonSubtext)}"
    ?hide-no-data="\${ifDefined(args.hideNoData)}"
    growing="\${ifDefined(args.growing)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    ?sticky-column-header="\${ifDefined(args.stickyColumnHeader)}"
    mode="\${ifDefined(args.mode)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.columns)}
</ui5-table>
\``,...(D=(w=c.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var $,S,T;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`args => html\`
<ui5-table
    id="table-\${++index}"
    no-data-text="\${ifDefined(args.noDataText)}"
    growing-button-text="\${ifDefined(args.growingButtonText)}"
    growing-button-subtext="\${ifDefined(args.growingButtonSubtext)}"
    ?hide-no-data="\${ifDefined(args.hideNoData)}"
    growing="\${ifDefined(args.growing)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    ?sticky-column-header="\${ifDefined(args.stickyColumnHeader)}"
    mode="\${ifDefined(args.mode)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.columns)}
</ui5-table>
\``,...(T=(S=u.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var N,B,M;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`args => html\`
<ui5-table
    id="table-\${++index}"
    no-data-text="\${ifDefined(args.noDataText)}"
    growing-button-text="\${ifDefined(args.growingButtonText)}"
    growing-button-subtext="\${ifDefined(args.growingButtonSubtext)}"
    ?hide-no-data="\${ifDefined(args.hideNoData)}"
    growing="\${ifDefined(args.growing)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    ?sticky-column-header="\${ifDefined(args.stickyColumnHeader)}"
    mode="\${ifDefined(args.mode)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.columns)}
</ui5-table>
\``,...(M=(B=a.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var k,I,H;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`args => html\`
<ui5-table
    id="table-\${++index}"
    no-data-text="\${ifDefined(args.noDataText)}"
    growing-button-text="\${ifDefined(args.growingButtonText)}"
    growing-button-subtext="\${ifDefined(args.growingButtonSubtext)}"
    ?hide-no-data="\${ifDefined(args.hideNoData)}"
    growing="\${ifDefined(args.growing)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    ?sticky-column-header="\${ifDefined(args.stickyColumnHeader)}"
    mode="\${ifDefined(args.mode)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.columns)}
</ui5-table>
\``,...(H=(I=i.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var C,v,L;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`args => html\`
<ui5-table
    id="table-\${++index}"
    no-data-text="\${ifDefined(args.noDataText)}"
    growing-button-text="\${ifDefined(args.growingButtonText)}"
    growing-button-subtext="\${ifDefined(args.growingButtonSubtext)}"
    ?hide-no-data="\${ifDefined(args.hideNoData)}"
    growing="\${ifDefined(args.growing)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    ?sticky-column-header="\${ifDefined(args.stickyColumnHeader)}"
    mode="\${ifDefined(args.mode)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.columns)}
</ui5-table>
\``,...(L=(v=s.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var R,G,P;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`args => html\`
<ui5-table
    id="table-\${++index}"
    no-data-text="\${ifDefined(args.noDataText)}"
    growing-button-text="\${ifDefined(args.growingButtonText)}"
    growing-button-subtext="\${ifDefined(args.growingButtonSubtext)}"
    ?hide-no-data="\${ifDefined(args.hideNoData)}"
    growing="\${ifDefined(args.growing)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    ?sticky-column-header="\${ifDefined(args.stickyColumnHeader)}"
    mode="\${ifDefined(args.mode)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.columns)}
</ui5-table>
\``,...(P=(G=b.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};const ue=["Basic","PopinDisplayInline","StickyHeader","NoData","GrowingTableMoreButton","GrowingTableScroll","GroupingTableSelect"];export{r as Basic,b as GroupingTableSelect,i as GrowingTableMoreButton,s as GrowingTableScroll,a as NoData,c as PopinDisplayInline,u as StickyHeader,ue as __namedExportsOrder,ce as default};
//# sourceMappingURL=Table.stories-f10fabca.js.map
