import{x as s}from"./lit-element-c5a2b594.js";import{l as n}from"./if-defined-c29cffe1.js";import{o as M}from"./unsafe-html-0ddd83da.js";import{D as b}from"./docs-6716a6bb.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-6c5c91c2.js";import"./iframe-8224ce09.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-20414205.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const T={selectedOption:{control:{type:!1}},valueState:{control:"select",options:["Error","Information","None","Success","Warning"]},default:{control:{type:"text"}},label:{control:{type:"text"}},valueStateMessage:{control:{type:"text"}},change:{description:"Fired when the selected option changes.",table:{category:"events"},UI5CustomData:{parameters:[{name:"selectedOption",type:"HTMLElement",description:"the selected option."}]}},"live-change":{description:"Fired when the user navigates through the options, but the selection is not finalized, or when pressing the ESC key to revert the current selection.",table:{category:"events"},UI5CustomData:{parameters:[{name:"selectedOption",type:"HTMLElement",description:"the selected option."}]}}},C={package:"@ui5/webcomponents",since:"0.8.0"};var l=Object.freeze,B=Object.defineProperty,I=(e,S)=>l(B(e,"raw",{value:l(S||e.slice())})),u;const $="ui5-select",F={title:"Main/Select",component:"Select",subcomponents:{Option:"Option",SelectMenu:"SelectMenu",SelectMenuOption:"SelectMenuOption"},argTypes:T,parameters:{docs:{page:b({...C,component:$})}}},L=e=>s`<ui5-select
    name="${n(e.name)}"
    ?disabled="${n(e.disabled)}"
    ?required="${n(e.required)}"
    value-state="${n(e.valueState)}"
    value-state-message="${n(e.valueStateMessage)}"
    selected-option="${n(e.selectedOption)}"
    accessible-name="${n(e.accessibleName)}"
    accessible-name-ref="${n(e.accessibleNameRef)}"
  >
    ${M(e.default)}
  </ui5-select> `,t=L.bind({});t.storyName="Basic";t.args={default:`<ui5-option icon="iphone">Phone</ui5-option>
    <ui5-option icon="ipad">Tablet</ui5-option>
    <ui5-option icon="laptop" selected="">Desktop</ui5-option>`};const i=()=>s`<ui5-select value-state="Success" class="select">
      <ui5-option icon="meal" selected="">Apple</ui5-option>
      <ui5-option icon="meal">Avocado</ui5-option>
      <ui5-option icon="meal">Mango</ui5-option>
    </ui5-select>
    <ui5-select value-state="Warning" class="select">
      <ui5-option icon="meal">Orange</ui5-option>
      <ui5-option icon="meal" selected="">Pumpkin</ui5-option>
      <ui5-option icon="meal">Carrot</ui5-option>
      <div slot="valueStateMessage">
        Information message. This is a <a href="#">Link</a>. Extra long text
        used as an information message. Extra long text used as an information
        message - 2. Extra long text used as an information message - 3.
      </div>
      <div slot="valueStateMessage">
        Information message 2. This is a <a href="#">Link</a>. Extra long text
        used as an information message. Extra long text used as an information
        message - 2. Extra long text used as an information message - 3.
      </div>
    </ui5-select>
    <ui5-select value-state="Error" class="select">
      <ui5-option icon="meal">Strawberry</ui5-option>
      <ui5-option icon="meal">Tomato</ui5-option>
      <ui5-option icon="meal" selected="">Red Chili Pepper</ui5-option>
      <div slot="valueStateMessage">
        Information message. This is a <a href="#">Link</a>. Extra long text
        used as an information message. Extra long text used as an information
        message - 2. Extra long text used as an information message - 3.
      </div>
      <div slot="valueStateMessage">
        Information message 2. This is a <a href="#">Link</a>. Extra long text
        used as an information message. Extra long text used as an information
        message - 2. Extra long text used as an information message - 3.
      </div>
    </ui5-select>
    <ui5-select value-state="Information" class="select">
      <ui5-option icon="meal">Blueberry</ui5-option>
      <ui5-option icon="meal">Grape</ui5-option>
      <ui5-option icon="meal" selected="">Plum</ui5-option>
      <div slot="valueStateMessage">
        Information message. This is a <a href="#">Link</a>. Extra long text
        used as an information message. Extra long text used as an information
        message - 2. Extra long text used as an information message - 3.
      </div>
      <div slot="valueStateMessage">
        Information message 2. This is a <a href="#">Link</a>. Extra long text
        used as an information message. Extra long text used as an information
        message - 2. Extra long text used as an information message - 3.
      </div>
    </ui5-select>`;i.storyName="Value State";const o=()=>s` <ui5-select class="select">
    <ui5-option additional-text="AT">Austria</ui5-option>
    <ui5-option additional-text="BE">Belgium</ui5-option>
    <ui5-option additional-text="BR">Brazil</ui5-option>
    <ui5-option additional-text="BG">Bulgaria</ui5-option>
    <ui5-option additional-text="CA">Canada</ui5-option>
  </ui5-select>`;o.storyName="Two-column layout";const a=()=>s(u||(u=I([`
  <ui5-select menu="selectMenu"></ui5-select>



  <template id="selectMenuTemplate">
    <style>
      .optionContent {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width:100%;
      }
    </style>

    <ui5-select-menu id="selectMenu">
      <ui5-select-menu-option display-text="AR">
          <div class="optionContent">
              <ui5-icon name="soccer"></ui5-icon>
              Argentina
              <ui5-icon name="employee"></ui5-icon>
          </div>
      </ui5-select-menu-option>

      <ui5-select-menu-option display-text="BE">
          <div class="optionContent">
              <ui5-icon name="soccer"></ui5-icon>
              Belgium
              <ui5-icon name="employee"></ui5-icon>
          </div>
      </ui5-select-menu-option>

      <ui5-select-menu-option display-text="BR">
          <div class="optionContent">
              <ui5-icon name="soccer"></ui5-icon>
              Brazil
              <ui5-icon name="employee"></ui5-icon>
          </div>
      </ui5-select-menu-option>
  </ui5-select-menu>
</template>

<script>
    const template = document.querySelector("#selectMenuTemplate");
    const clone = template.content.cloneNode(true);

    document.body.appendChild(clone);
<\/script>`])));a.storyName="Custom Options";var r,c,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  return html\`<ui5-select
    name="\${ifDefined(args.name)}"
    ?disabled="\${ifDefined(args.disabled)}"
    ?required="\${ifDefined(args.required)}"
    value-state="\${ifDefined(args.valueState)}"
    value-state-message="\${ifDefined(args.valueStateMessage)}"
    selected-option="\${ifDefined(args.selectedOption)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
  >
    \${unsafeHTML(args.default)}
  </ui5-select> \`;
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,d,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`() => html\`<ui5-select value-state="Success" class="select">
      <ui5-option icon="meal" selected="">Apple</ui5-option>
      <ui5-option icon="meal">Avocado</ui5-option>
      <ui5-option icon="meal">Mango</ui5-option>
    </ui5-select>
    <ui5-select value-state="Warning" class="select">
      <ui5-option icon="meal">Orange</ui5-option>
      <ui5-option icon="meal" selected="">Pumpkin</ui5-option>
      <ui5-option icon="meal">Carrot</ui5-option>
      <div slot="valueStateMessage">
        Information message. This is a <a href="#">Link</a>. Extra long text
        used as an information message. Extra long text used as an information
        message - 2. Extra long text used as an information message - 3.
      </div>
      <div slot="valueStateMessage">
        Information message 2. This is a <a href="#">Link</a>. Extra long text
        used as an information message. Extra long text used as an information
        message - 2. Extra long text used as an information message - 3.
      </div>
    </ui5-select>
    <ui5-select value-state="Error" class="select">
      <ui5-option icon="meal">Strawberry</ui5-option>
      <ui5-option icon="meal">Tomato</ui5-option>
      <ui5-option icon="meal" selected="">Red Chili Pepper</ui5-option>
      <div slot="valueStateMessage">
        Information message. This is a <a href="#">Link</a>. Extra long text
        used as an information message. Extra long text used as an information
        message - 2. Extra long text used as an information message - 3.
      </div>
      <div slot="valueStateMessage">
        Information message 2. This is a <a href="#">Link</a>. Extra long text
        used as an information message. Extra long text used as an information
        message - 2. Extra long text used as an information message - 3.
      </div>
    </ui5-select>
    <ui5-select value-state="Information" class="select">
      <ui5-option icon="meal">Blueberry</ui5-option>
      <ui5-option icon="meal">Grape</ui5-option>
      <ui5-option icon="meal" selected="">Plum</ui5-option>
      <div slot="valueStateMessage">
        Information message. This is a <a href="#">Link</a>. Extra long text
        used as an information message. Extra long text used as an information
        message - 2. Extra long text used as an information message - 3.
      </div>
      <div slot="valueStateMessage">
        Information message 2. This is a <a href="#">Link</a>. Extra long text
        used as an information message. Extra long text used as an information
        message - 2. Extra long text used as an information message - 3.
      </div>
    </ui5-select>\``,...(g=(d=i.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var f,x,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`() => html\` <ui5-select class="select">
    <ui5-option additional-text="AT">Austria</ui5-option>
    <ui5-option additional-text="BE">Belgium</ui5-option>
    <ui5-option additional-text="BR">Brazil</ui5-option>
    <ui5-option additional-text="BG">Bulgaria</ui5-option>
    <ui5-option additional-text="CA">Canada</ui5-option>
  </ui5-select>\``,...(v=(x=o.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var h,E,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => html\`
  <ui5-select menu="selectMenu"></ui5-select>



  <template id="selectMenuTemplate">
    <style>
      .optionContent {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width:100%;
      }
    </style>

    <ui5-select-menu id="selectMenu">
      <ui5-select-menu-option display-text="AR">
          <div class="optionContent">
              <ui5-icon name="soccer"></ui5-icon>
              Argentina
              <ui5-icon name="employee"></ui5-icon>
          </div>
      </ui5-select-menu-option>

      <ui5-select-menu-option display-text="BE">
          <div class="optionContent">
              <ui5-icon name="soccer"></ui5-icon>
              Belgium
              <ui5-icon name="employee"></ui5-icon>
          </div>
      </ui5-select-menu-option>

      <ui5-select-menu-option display-text="BR">
          <div class="optionContent">
              <ui5-icon name="soccer"></ui5-icon>
              Brazil
              <ui5-icon name="employee"></ui5-icon>
          </div>
      </ui5-select-menu-option>
  </ui5-select-menu>
</template>

<script>
    const template = document.querySelector("#selectMenuTemplate");
    const clone = template.content.cloneNode(true);

    document.body.appendChild(clone);
<\/script>\``,...(y=(E=a.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};const U=["Basic","ValueStateAndValueStateMessage","TwoColumnLayout","CustomOptions"];export{t as Basic,a as CustomOptions,o as TwoColumnLayout,i as ValueStateAndValueStateMessage,U as __namedExportsOrder,F as default};
//# sourceMappingURL=Select.stories-af7bde96.js.map
