import{x as i}from"./lit-element-c5a2b594.js";import{l as d}from"./if-defined-c29cffe1.js";import{o as m}from"./unsafe-html-0ddd83da.js";import{D as f}from"./docs-33d4f08d.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-efc7f360.js";import"./iframe-72f32e3d.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-0c80a90b.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const v={alignContent:{control:"select",options:["End","Start"]},default:{control:{type:"text"}}},y={package:"@ui5/webcomponents",since:"1.17.0"},h=()=>i`
<div> Toolbar with spacer:
    <ui5-toolbar>
        <ui5-toolbar-button icon="add" text="Left 1 (long)" width="150px" design="Default"></ui5-toolbar-button>
        <ui5-toolbar-button icon="decline" text="Left 2"></ui5-toolbar-button>
        <ui5-toolbar-button icon="employee" text="Left 3"></ui5-toolbar-button>
        <ui5-toolbar-select>
                <ui5-toolbar-select-option>1</ui5-toolbar-select-option>
                <ui5-toolbar-select-option selected>2</ui5-toolbar-select-option>
                <ui5-toolbar-select-option>3</ui5-toolbar-select-option>
            </ui5-toolbar-select>
        <ui5-toolbar-button icon="add" text="Mid 1"></ui5-toolbar-button>
        <ui5-toolbar-spacer></ui5-toolbar-spacer>
        <ui5-toolbar-button icon="decline" text="Mid 2"></ui5-toolbar-button>
        <ui5-toolbar-button icon="add" text="Right 1"></ui5-toolbar-button>
        <ui5-toolbar-button icon="employee" text="Right 4"></ui5-toolbar-button>
        <ui5-toolbar-button id="myOverflowBtn" icon="employee" text="Call me later"></ui5-toolbar-button>
    </ui5-toolbar>
</div>

</br>

<div> Toolbar with separator:
    <ui5-toolbar>
        <ui5-toolbar-button icon="add" text="Left 1 (long)" width="150px" design="Default"></ui5-toolbar-button>
        <ui5-toolbar-button icon="decline" text="Left 2"></ui5-toolbar-button>
        <ui5-toolbar-button icon="employee" text="Left 3"></ui5-toolbar-button>
        <ui5-toolbar-select>
            <ui5-toolbar-select-option>1</ui5-toolbar-select-option>
            <ui5-toolbar-select-option selected>2</ui5-toolbar-select-option>
            <ui5-toolbar-select-option>3</ui5-toolbar-select-option>
        </ui5-toolbar-select>
        <ui5-toolbar-button icon="add" text="Mid 1"></ui5-toolbar-button>
        <ui5-toolbar-separator></ui5-toolbar-separator>
        <ui5-toolbar-button icon="decline" text="Mid 2"></ui5-toolbar-button>
        <ui5-toolbar-button icon="add" text="Right 1"></ui5-toolbar-button>
        <ui5-toolbar-button icon="employee" text="Right 4"></ui5-toolbar-button>
        <ui5-toolbar-button id="myOverflowBtn" icon="employee" text="Call me later"></ui5-toolbar-button>
    </ui5-toolbar>
</div>

</br>

<div> Toolbar with 'AlwaysOverflow' items:
    <ui5-toolbar>
        <ui5-toolbar-button icon="add" text="Left 1 (long)" width="150px" design="Default"></ui5-toolbar-button>
        <ui5-toolbar-button icon="decline" text="Left 2"></ui5-toolbar-button>
        <ui5-toolbar-button icon="employee" text="Left 3"></ui5-toolbar-button>
        <ui5-toolbar-select>
            <ui5-toolbar-select-option>1</ui5-toolbar-select-option>
            <ui5-toolbar-select-option selected>2</ui5-toolbar-select-option>
            <ui5-toolbar-select-option>3</ui5-toolbar-select-option>
        </ui5-toolbar-select>
        <ui5-toolbar-button icon="add" text="Mid 1"></ui5-toolbar-button>
        <ui5-toolbar-button icon="decline" text="Mid 2" overflow-priority="AlwaysOverflow"></ui5-toolbar-button>
        <ui5-toolbar-button icon="add" text="Right 1" overflow-priority="AlwaysOverflow"></ui5-toolbar-button>
        <ui5-toolbar-button icon="employee" text="Right 4" overflow-priority="AlwaysOverflow"></ui5-toolbar-button>
        <ui5-toolbar-button id="myOverflowBtn" icon="employee" text="Call me later" overflow-priority="AlwaysOverflow"></ui5-toolbar-button>
    </ui5-toolbar>
</div>

</br>

<div> Toolbar with 'NeverOverflow' items:
    <ui5-toolbar>
        <ui5-toolbar-button icon="add" text="Left 1 (long)" width="150px" design="Default"></ui5-toolbar-button>
        <ui5-toolbar-button icon="decline" text="Left 2" ></ui5-toolbar-button>
        <ui5-toolbar-button icon="employee" text="Left 3"></ui5-toolbar-button>
        <ui5-toolbar-select>
            <ui5-toolbar-select-option>1</ui5-toolbar-select-option>
            <ui5-toolbar-select-option selected>2</ui5-toolbar-select-option>
            <ui5-toolbar-select-option>3</ui5-toolbar-select-option>
        </ui5-toolbar-select>
        <ui5-toolbar-button icon="add" text="Mid 1"></ui5-toolbar-button>
        <ui5-toolbar-button icon="decline" text="Mid 2" ></ui5-toolbar-button>
        <ui5-toolbar-button icon="add" text="Right 1" overflow-priority="NeverOverflow"></ui5-toolbar-button>
        <ui5-toolbar-button icon="employee" text="Right 4" ></ui5-toolbar-button>
        <ui5-toolbar-button id="myOverflowBtn" icon="employee" text="Call me later" overflow-priority="NeverOverflow"></ui5-toolbar-button>
    </ui5-toolbar>
</div>

</br>

<div> Toolbar with 'Start' aligned items:
    <ui5-toolbar align-content="Start">
        <ui5-toolbar-button icon="decline" text="Mid 2"></ui5-toolbar-button>
        <ui5-toolbar-button icon="add" text="Right 1"></ui5-toolbar-button>
        <ui5-toolbar-button icon="employee" text="Right 4"></ui5-toolbar-button>
        <ui5-toolbar-button id="myOverflowBtn" icon="employee" text="Call me later"></ui5-toolbar-button>
    </ui5-toolbar>
</div>

`;var a=Object.freeze,T=Object.defineProperty,g=(t,x)=>a(T(t,"raw",{value:a(x||t.slice())})),l,n;const S="ui5-toolbar",z={title:"Main/Toolbar",component:"Toolbar",subcomponents:{ToolbarButton:"ToolbarButton",ToolbarSelect:"ToolbarSelect",ToolbarSelectOption:"ToolbarSelectOption",ToolbarSeparator:"ToolbarSeparator",ToolbarSpacer:"ToolbarSpacer"},argTypes:v,parameters:{docs:{page:f({...y,component:S})}}},w=t=>i(l||(l=g([`<ui5-toolbar
        align-content="`,`"
    >
        `,`
</ui5-toolbar>
<script>
    select.addEventListener("ui5-change", e => {
        textarea.setAttribute("value", "Selected option is:" + e.detail.selectedOption.textContent);
    });
<\/script>
`])),d(t.alignContent),m(t.default)),o=w.bind({});o.storyName="Basic";o.args={default:`
    <ui5-toolbar-button
    icon="decline"
    text="Mid 2">
    </ui5-toolbar-button>
    <ui5-toolbar-button
        icon="add"
        text="Right 1">
    </ui5-toolbar-button>
    <ui5-toolbar-button
        icon="employee"
        text="Right 4">
    </ui5-toolbar-button>
    <ui5-toolbar-button
        id="myOverflowBtn"
        icon="employee"
        text="Call me later">
    </ui5-toolbar-button>`};const H=h.bind({}),e=t=>i(n||(n=g([`<ui5-toolbar
        align-content="`,`"
    >
        `,`
</ui5-toolbar>
<ui5-textarea disabled id="ToolbarStoryTextarea" placeholder="Change selection of the first Select Box"></ui5-textarea>
<script>
    ToolbarStorySelect.addEventListener("ui5-change", e => {
        ToolbarStoryTextarea.setAttribute("value", "Selected option is: " + e.detail.selectedOption.textContent);
    });
<\/script>
`])),d(t.alignContent),m(t.default));e.storyName="Multiple Toolbar Select components";e.args={default:`<ui5-toolbar-select id="ToolbarStorySelect">
                <ui5-toolbar-select-option>Apple</ui5-toolbar-select-option>
                <ui5-toolbar-select-option>Orange</ui5-toolbar-select-option>
                <ui5-toolbar-select-option>Pear</ui5-toolbar-select-option>
            </ui5-toolbar-select>
            <ui5-toolbar-select>
                <ui5-toolbar-select-option>1</ui5-toolbar-select-option>
                <ui5-toolbar-select-option>2</ui5-toolbar-select-option>
                <ui5-toolbar-select-option>3</ui5-toolbar-select-option>
            </ui5-toolbar-select>
            <ui5-toolbar-select>
                <ui5-toolbar-select-option>Bulgaria</ui5-toolbar-select-option>
                <ui5-toolbar-select-option>Bolivia</ui5-toolbar-select-option>
                <ui5-toolbar-select-option>Brunei</ui5-toolbar-select-option>
                <ui5-toolbar-select-option>Bangladesh</ui5-toolbar-select-option>
                <ui5-toolbar-select-option>Belarus</ui5-toolbar-select-option>
                <ui5-toolbar-select-option>Belgium</ui5-toolbar-select-option>
            </ui5-toolbar-select>
            <ui5-toolbar-select value-state="Success" width="auto">
                <ui5-toolbar-select-option icon="meal" selected="">Apple</ui5-toolbar-select-option>
                <ui5-toolbar-select-option icon="meal">Avocado</ui5-toolbar-select-option>
                <ui5-toolbar-select-option icon="meal">Mango</ui5-toolbar-select-option>
            </ui5-toolbar-select>
            <ui5-toolbar-select value-state="Warning" width="auto">
                <ui5-toolbar-select-option icon="meal">Orange</ui5-toolbar-select-option>
                <ui5-toolbar-select-option icon="meal" selected="">Pumpkin</ui5-toolbar-select-option>
                <ui5-toolbar-select-option icon="meal">Carrot</ui5-toolbar-select-option>
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
            </ui5-toolbar-select>
            <ui5-toolbar-select value-state="Error">
                <ui5-toolbar-select-option icon="meal">Strawberry</ui5-toolbar-select-option>
                <ui5-toolbar-select-option icon="meal">Tomato</ui5-toolbar-select-option>
                <ui5-toolbar-select-option icon="meal" selected="">Red Chili Pepper</ui5-toolbar-select-option>
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
            </ui5-toolbar-select>
            <ui5-toolbar-select value-state="Information">
                <ui5-toolbar-select-option icon="meal">Blueberry</ui5-toolbar-select-option>
                <ui5-toolbar-select-option icon="meal">Grape</ui5-toolbar-select-option>
                <ui5-toolbar-select-option icon="meal" selected="">Plum</ui5-toolbar-select-option>
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
            </ui5-toolbar-select>
            `};var r,u,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  return html\`<ui5-toolbar
        align-content="\${ifDefined(args.alignContent)}"
    >
        \${unsafeHTML(args.default)}
</ui5-toolbar>
<script>
    select.addEventListener("ui5-change", e => {
        textarea.setAttribute("value", "Selected option is:" + e.detail.selectedOption.textContent);
    });
<\/script>
\`;
}`,...(s=(u=o.parameters)==null?void 0:u.docs)==null?void 0:s.source}}};var b,c,p;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  return html\`<ui5-toolbar
        align-content="\${ifDefined(args.alignContent)}"
    >
        \${unsafeHTML(args.default)}
</ui5-toolbar>
<ui5-textarea disabled id="ToolbarStoryTextarea" placeholder="Change selection of the first Select Box"></ui5-textarea>
<script>
    ToolbarStorySelect.addEventListener("ui5-change", e => {
        ToolbarStoryTextarea.setAttribute("value", "Selected option is: " + e.detail.selectedOption.textContent);
    });
<\/script>
\`;
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const U=["Basic","Types","MultipleUI5SelectComponents"];export{o as Basic,e as MultipleUI5SelectComponents,H as Types,U as __namedExportsOrder,z as default};
//# sourceMappingURL=Toolbar.stories-3374d714.js.map
