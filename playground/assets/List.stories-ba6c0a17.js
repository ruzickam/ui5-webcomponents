import{x as p}from"./lit-element-c5a2b594.js";import{l as i}from"./if-defined-c29cffe1.js";import{o as F}from"./unsafe-html-0ddd83da.js";import{L as u}from"./ListMode-b6a2b1ad.js";import{L as G}from"./ListSeparators-2f1e4fe1.js";import{D as U}from"./docs-a58dd199.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-d23eae87.js";import"./iframe-17871902.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-9c2f7062.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const W={growing:{control:"select",options:["Button","None","Scroll"]},mode:{control:"select",options:["Delete","MultiSelect","None","SingleSelect","SingleSelectAuto","SingleSelectBegin","SingleSelectEnd"]},separators:{control:"select",options:["All","Inner","None"]},default:{control:{type:"text"}},header:{control:{type:"text"}},"item-click":{description:"Fired when an item is activated, unless the item's <code>type</code> property is set to <code>Inactive</code>.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"The clicked item."}]}},"item-close":{description:"Fired when the <code>Close</code> button of any item is clicked <br><br> <b>Note:</b> This event is only applicable to list items that can be closed (such as notification list items), not to be confused with <code>item-delete</code>.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"the item about to be closed."}]}},"item-delete":{description:"Fired when the Delete button of any item is pressed. <br><br> <b>Note:</b> A Delete button is displayed on each item, when the component <code>mode</code> property is set to <code>Delete</code>.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"the deleted item."}]}},"item-toggle":{description:"Fired when the <code>Toggle</code> button of any item is clicked. <br><br> <b>Note:</b> This event is only applicable to list items that can be toggled (such as notification group list items).",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"the toggled item."}]}},"selection-change":{description:"Fired when selection is changed by user interaction in <code>SingleSelect</code>, <code>SingleSelectBegin</code>, <code>SingleSelectEnd</code> and <code>MultiSelect</code> modes.",table:{category:"events"},UI5CustomData:{parameters:[{name:"selectedItems",type:"Array",description:"An array of the selected items."},{name:"previouslySelectedItems",type:"Array",description:"An array of the previously selected items."}]}}},j={package:"@ui5/webcomponents"};var m=Object.freeze,z=Object.defineProperty,J=(e,P)=>m(z(e,"raw",{value:m(P||e.slice())})),f;const q="ui5-list",pe={title:"Main/List",component:"List",subcomponents:{StandardListItem:"StandardListItem",CustomListItem:"CustomListItem",GroupHeaderListItem:"GroupHeaderListItem"},parameters:{docs:{page:U({...j,component:q})}},argTypes:W},d=e=>p` <ui5-list
    mode="${i(e.mode)}"
    ?busy="${i(e.busy)}"
    ?indent="${i(e.indent)}"
    ?growing="${i(e.growing)}"
    busy-delay="${i(e.busyDelay)}"
    separators="${i(e.separators)}"
    header-text="${i(e.headerText)}"
    footer-text="${i(e.footerText)}"
    no-data-text="${i(e.noDataText)}"
    accessible-name="${i(e.accessibleName)}"
    accessible-role="${i(e.accessibleRole)}"
  >
    ${F(e.default)}
  </ui5-list>`,t=d.bind({});t.storyName="Basic";t.args={default:`<ui5-li
        icon="nutrition-activity"
        description="Tropical plant with an edible fruit"
        additional-text="In-stock"
        additional-text-state="Success"
        >Pineapple</ui5-li>
    <ui5-li
        icon="nutrition-activity"
        description="Occurs between red and yellow"
        additional-text="Expires"
        additional-text-state="Warning"
        >Orange</ui5-li>
    <ui5-li
        icon="nutrition-activity"
        description="The yellow lengthy fruit"
        additional-text="Re-stock"
        additional-text-state="Information"
        >Blueberry</ui5-li>
    <ui5-li
        icon="nutrition-activity"
        description="The tropical stone fruit"
        additional-text="Re-stock"
        additional-text-state="Error"
        >Mango</ui5-li>`};const n=()=>p(f||(f=J([`<ui5-list id="infiniteScrollEx" style="height: 200px" growing="Scroll">
      <ui5-li
        icon="nutrition-activity"
        description="Tropical plant with an edible fruit"
        additional-text="In-stock"
        additional-text-state="Success"
        >Pineapple</ui5-li
      >
      <ui5-li
        icon="nutrition-activity"
        description="Occurs between red and yellow"
        additional-text="Expires"
        additional-text-state="Warning"
        >Orange</ui5-li
      >
      <ui5-li
        icon="nutrition-activity"
        description="The yellow lengthy fruit"
        additional-text="Re-stock"
        additional-text-state="Error"
        >Banana</ui5-li
      >
    </ui5-list>
    <script>
      function template(i) {
        var li = document.createElement("ui5-li");
        li.textContent = "Fruit name";
        li.description = "the description goes here " + i;
        li.additionalText = "Available";
        li.additionalTextState = "Success";
        li.icon = "nutrition-activity";
        return li;
      }
      function insertItems(el, num) {
        for (var i = 0; i < num; i++) {
          el.appendChild(template(i));
        }
      }
      infiniteScrollEx.addEventListener("load-more", (e) => {
        var el = infiniteScrollEx;
        el.busy = true;
        setTimeout(() => {
          insertItems(el, 5);
          el.busy = false;
        }, 200);
      });
    <\/script>`])));n.storyName="Growing";n.parameters={docs:{story:{inline:!1}}};const a=d.bind({});a.storyName="Single Selection";a.args={mode:u.SingleSelect,headerText:"Select a country:",default:`
    <ui5-li selected icon="map" icon-end>Argentina</ui5-li>
    <ui5-li icon="map" icon-end>Bulgaria</ui5-li>
    <ui5-li icon="map" icon-end>China</ui5-li>
    <ui5-li type="Inactive" icon="map" icon-end>Denmark (ui5-li type='Inactive')</ui5-li>`};const s=d.bind({});s.storyName="Multi Selection";s.args={mode:u.MultiSelect,headerText:"Multiple selection is possible",default:`
    <ui5-li>Pineapple</ui5-li>
    <ui5-li selected="">Orange</ui5-li>
    <ui5-li>Banana</ui5-li>
    <ui5-li>Mango</ui5-li>`};const r=d.bind({});r.storyName="Group Headers";r.args={mode:u.MultiSelect,default:`<ui5-li-groupheader
    >Front End Developers</ui5-li-groupheader
    >
    <ui5-li
        image="../assets/images/avatars/woman_avatar_3.png"
        icon="navigation-right-arrow"
        icon-end=""
        >Jennifer</ui5-li
    >
    <ui5-li
        image="../assets/images/avatars/woman_avatar_4.png"
        icon="navigation-right-arrow"
        icon-end=""
        >Lora</ui5-li
    >
    <ui5-li
        image="../assets/images/avatars/woman_avatar_5.png"
        icon="navigation-right-arrow"
        icon-end=""
        >Carlotta</ui5-li
    >
    <ui5-li-groupheader>Back End Developers</ui5-li-groupheader>
    <ui5-li
        image="../assets/images/avatars/man_avatar_1.png"
        icon="navigation-right-arrow"
        icon-end=""
    >Clark</ui5-li
    >
    <ui5-li
        image="../assets/images/avatars/woman_avatar_1.png"
        icon="navigation-right-arrow"
        icon-end=""
    >Ellen</ui5-li
    >
    <ui5-li
        image="../assets/images/avatars/man_avatar_2.png"
        icon="navigation-right-arrow"
        icon-end=""
    >Adam</ui5-li
    >`};const o=d.bind({});o.storyName="Delete Mode";o.args={mode:u.Delete,headerText:"Note: The list items removal is up to application developers",default:`
    <ui5-li>Argentina</ui5-li>
    <ui5-li>Bulgaria</ui5-li>
    <ui5-li>China</ui5-li>`};const l=d.bind({});l.storyName="No Data";l.args={headerText:"Products",noDataText:"No Data Available",separators:G.None};const c=()=>p` <ui5-list
      header-text="No separators"
      separators="None"
      class="full-width"
    >
      <ui5-li icon="product">Item #1</ui5-li>
      <ui5-li icon="product">Item #2</ui5-li>
      <ui5-li icon="product">Item #3</ui5-li>
    </ui5-list>
    <ui5-list
      header-text="Inner separators"
      separators="Inner"
      class="full-width"
    >
      <ui5-li icon="shipping-status">Devilered</ui5-li>
      <ui5-li icon="shipping-status">Pending</ui5-li>
      <ui5-li icon="shipping-status">Declined</ui5-li>
    </ui5-list>`;var g,y,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return html\` <ui5-list
    mode="\${ifDefined(args.mode)}"
    ?busy="\${ifDefined(args.busy)}"
    ?indent="\${ifDefined(args.indent)}"
    ?growing="\${ifDefined(args.growing)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    separators="\${ifDefined(args.separators)}"
    header-text="\${ifDefined(args.headerText)}"
    footer-text="\${ifDefined(args.footerText)}"
    no-data-text="\${ifDefined(args.noDataText)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
  >
    \${unsafeHTML(args.default)}
  </ui5-list>\`;
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var D,h,x;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`() => html\`<ui5-list id="infiniteScrollEx" style="height: 200px" growing="Scroll">
      <ui5-li
        icon="nutrition-activity"
        description="Tropical plant with an edible fruit"
        additional-text="In-stock"
        additional-text-state="Success"
        >Pineapple</ui5-li
      >
      <ui5-li
        icon="nutrition-activity"
        description="Occurs between red and yellow"
        additional-text="Expires"
        additional-text-state="Warning"
        >Orange</ui5-li
      >
      <ui5-li
        icon="nutrition-activity"
        description="The yellow lengthy fruit"
        additional-text="Re-stock"
        additional-text-state="Error"
        >Banana</ui5-li
      >
    </ui5-list>
    <script>
      function template(i) {
        var li = document.createElement("ui5-li");
        li.textContent = "Fruit name";
        li.description = "the description goes here " + i;
        li.additionalText = "Available";
        li.additionalTextState = "Success";
        li.icon = "nutrition-activity";
        return li;
      }
      function insertItems(el, num) {
        for (var i = 0; i < num; i++) {
          el.appendChild(template(i));
        }
      }
      infiniteScrollEx.addEventListener("load-more", (e) => {
        var el = infiniteScrollEx;
        el.busy = true;
        setTimeout(() => {
          insertItems(el, 5);
          el.busy = false;
        }, 200);
      });
    <\/script>\``,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var $,v,S;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  return html\` <ui5-list
    mode="\${ifDefined(args.mode)}"
    ?busy="\${ifDefined(args.busy)}"
    ?indent="\${ifDefined(args.indent)}"
    ?growing="\${ifDefined(args.growing)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    separators="\${ifDefined(args.separators)}"
    header-text="\${ifDefined(args.headerText)}"
    footer-text="\${ifDefined(args.footerText)}"
    no-data-text="\${ifDefined(args.noDataText)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
  >
    \${unsafeHTML(args.default)}
  </ui5-list>\`;
}`,...(S=(v=a.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var T,w,I;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  return html\` <ui5-list
    mode="\${ifDefined(args.mode)}"
    ?busy="\${ifDefined(args.busy)}"
    ?indent="\${ifDefined(args.indent)}"
    ?growing="\${ifDefined(args.growing)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    separators="\${ifDefined(args.separators)}"
    header-text="\${ifDefined(args.headerText)}"
    footer-text="\${ifDefined(args.footerText)}"
    no-data-text="\${ifDefined(args.noDataText)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
  >
    \${unsafeHTML(args.default)}
  </ui5-list>\`;
}`,...(I=(w=s.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var N,E,L;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  return html\` <ui5-list
    mode="\${ifDefined(args.mode)}"
    ?busy="\${ifDefined(args.busy)}"
    ?indent="\${ifDefined(args.indent)}"
    ?growing="\${ifDefined(args.growing)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    separators="\${ifDefined(args.separators)}"
    header-text="\${ifDefined(args.headerText)}"
    footer-text="\${ifDefined(args.footerText)}"
    no-data-text="\${ifDefined(args.noDataText)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
  >
    \${unsafeHTML(args.default)}
  </ui5-list>\`;
}`,...(L=(E=r.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var M,_,C;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  return html\` <ui5-list
    mode="\${ifDefined(args.mode)}"
    ?busy="\${ifDefined(args.busy)}"
    ?indent="\${ifDefined(args.indent)}"
    ?growing="\${ifDefined(args.growing)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    separators="\${ifDefined(args.separators)}"
    header-text="\${ifDefined(args.headerText)}"
    footer-text="\${ifDefined(args.footerText)}"
    no-data-text="\${ifDefined(args.noDataText)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
  >
    \${unsafeHTML(args.default)}
  </ui5-list>\`;
}`,...(C=(_=o.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var H,k,A;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  return html\` <ui5-list
    mode="\${ifDefined(args.mode)}"
    ?busy="\${ifDefined(args.busy)}"
    ?indent="\${ifDefined(args.indent)}"
    ?growing="\${ifDefined(args.growing)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    separators="\${ifDefined(args.separators)}"
    header-text="\${ifDefined(args.headerText)}"
    footer-text="\${ifDefined(args.footerText)}"
    no-data-text="\${ifDefined(args.noDataText)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
  >
    \${unsafeHTML(args.default)}
  </ui5-list>\`;
}`,...(A=(k=l.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var B,R,O;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`() => html\` <ui5-list
      header-text="No separators"
      separators="None"
      class="full-width"
    >
      <ui5-li icon="product">Item #1</ui5-li>
      <ui5-li icon="product">Item #2</ui5-li>
      <ui5-li icon="product">Item #3</ui5-li>
    </ui5-list>
    <ui5-list
      header-text="Inner separators"
      separators="Inner"
      class="full-width"
    >
      <ui5-li icon="shipping-status">Devilered</ui5-li>
      <ui5-li icon="shipping-status">Pending</ui5-li>
      <ui5-li icon="shipping-status">Declined</ui5-li>
    </ui5-list>\``,...(O=(R=c.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};const me=["Basic","Growing","SingleSelection","MultiSelection","GroupHeaders","Delete","NoData","SeparationTypes"];export{t as Basic,o as Delete,r as GroupHeaders,n as Growing,s as MultiSelection,l as NoData,c as SeparationTypes,a as SingleSelection,me as __namedExportsOrder,pe as default};
//# sourceMappingURL=List.stories-ba6c0a17.js.map
