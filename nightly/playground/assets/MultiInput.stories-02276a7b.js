import{x as y}from"./lit-element-c5a2b594.js";import{D as w}from"./docs-29da5e12.js";import{l as t}from"./if-defined-c29cffe1.js";import{o}from"./unsafe-html-0ddd83da.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-30187b9d.js";import"./iframe-42e34fdf.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-60f77cb7.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const S={tokens:{control:{type:"text"}},"token-delete":{description:"Fired when a token is about to be deleted.",table:{category:"events"},UI5CustomData:{parameters:[{name:"token",type:"HTMLElement",description:"deleted token."}]}},previewItem:{control:{type:!1}},type:{control:"select",options:["Email","Number","Password","Tel","Text","URL"]},valueState:{control:"select",options:["Error","Information","None","Success","Warning"]},default:{control:{type:"text"}},icon:{control:{type:"text"}},valueStateMessage:{control:{type:"text"}},openPicker:{description:"Manually opens the suggestions popover, assuming suggestions are enabled. Items must be preloaded for it to open.",table:{category:"methods"}},"suggestion-item-preview":{description:"Fired when the user navigates to a suggestion item via the ARROW keys, as a preview, before the final selection.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"The previewed suggestion item."},{name:"targetRef",type:"HTMLElement",description:"The DOM ref of the suggestion item."}]}},"suggestion-item-select":{description:"Fired when a suggestion item, that is displayed in the suggestion popup, is selected.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"The selected item."}]}}},M={package:"@ui5/webcomponents",since:"1.0.0-rc.9"};var l=Object.freeze,L=Object.defineProperty,E=(e,b)=>l(L(e,"raw",{value:l(b||e.slice())})),d;const I="ui5-multi-input",G={title:"Main/Multi Input",component:"MultiInput",subcomponents:{Token:"Token"},parameters:{docs:{page:w({...M,component:I})}},argTypes:S};let r=0;const u=e=>y`
<ui5-multi-input
    id="multi-input-${++r}"
    ?disabled="${t(e.disabled)}"
    placeholder="${t(e.placeholder)}"
    ?readonly="${t(e.readonly)}"
    ?required="${t(e.required)}"
    ?no-typeahead="${t(e.noTypeahead)}"
    type="${t(e.type)}"
    value="${t(e.value)}"
    value-state="${t(e.valueState)}"
    name="${t(e.name)}"
    ?show-suggestions="${t(e.showSuggestions)}"
    maxlength="${t(e.maxlength)}"
    accessible-name="${t(e.accessibleName)}"
    accessible-name-ref="${t(e.accessibleNameRef)}"
    ?show-clear-icon="${t(e.showClearIcon)}"
    ?show-value-help-icon="${t(e.showValueHelpIcon)}"
>
    ${o(e.default)}
    ${o(e.valueStateMessage)}
    ${o(e.icon)}
    ${o(e.tokens)}
</ui5-multi-input>`,i=u.bind({});i.args={value:"basic input"};const a=u.bind({});a.args={tokens:`
    <ui5-token slot="tokens" text="Argentina"></ui5-token>
    <ui5-token slot="tokens" text="Bulgaria"></ui5-token>
    <ui5-token slot="tokens" text="England"></ui5-token>
    <ui5-token slot="tokens" text="Finland"></ui5-token>
    <ui5-token slot="tokens" text="Germany"></ui5-token>
    <ui5-token slot="tokens" text="Hungary"></ui5-token>
    <ui5-token slot="tokens" text="Italy"></ui5-token>
    <ui5-token slot="tokens" text="Luxembourg"></ui5-token>
    <ui5-token slot="tokens" text="Mexico"></ui5-token>
    <ui5-token slot="tokens" text="Philippines"></ui5-token>
    <ui5-token slot="tokens" text="Sweden"></ui5-token>
    <ui5-token slot="tokens" text="USA"></ui5-token>`};const n=u.bind({});n.args={placeholder:"Start typing country name",showSuggestions:!0,default:`
    <ui5-suggestion-item text="Argentina"></ui5-suggestion-item>
    <ui5-suggestion-item text="Bulgaria"></ui5-suggestion-item>
    <ui5-suggestion-item text="England"></ui5-suggestion-item>
    <ui5-suggestion-item text="Finland"></ui5-suggestion-item>
    <ui5-suggestion-item text="Germany"></ui5-suggestion-item>
    <ui5-suggestion-item text="Hungary"></ui5-suggestion-item>
    <ui5-suggestion-item text="Italy"></ui5-suggestion-item>
    <ui5-suggestion-item text="Luxembourg"></ui5-suggestion-item>
    <ui5-suggestion-item text="Mexico"></ui5-suggestion-item>
    <ui5-suggestion-item text="Philippines"></ui5-suggestion-item>
    <ui5-suggestion-item text="Sweden"></ui5-suggestion-item>
    <ui5-suggestion-item text="USA"></ui5-suggestion-item>`,valueStateMessage:'<div slot="valueStateMessage">Token is already in the list</div>'};n.decorators=[e=>y(d||(d=E([`
    `,`
<script>
    var createTokenFromText = function (text) {
        let token = document.createElement("ui5-token");
        token.setAttribute("text", text);
        token.setAttribute("slot", "tokens");
        return token;
    };
    document.getElementById("multi-input-`,`").addEventListener("token-delete", function (event) {
        const token = event.detail?.token;
        token && token.remove();
    });
    document.getElementById("multi-input-`,`").addEventListener("paste", function (event) {
        event.preventDefault();

        let pastedText = (event.clipboardData || window.clipboardData).getData('text/plain');;

        if (!pastedText) {
            return;
        }

        let separatedTexts = pastedText.split(/\\r\\n|\\r|\\n|\\t/g).filter(t => !!t);

        if (separatedTexts.length === 1) {

            event.target.value += separatedTexts[0];
            return;
        }

        separatedTexts.forEach((tokenText) => {
            if (tokenText) {
                event.target.appendChild(createTokenFromText(tokenText));
            }
        })
    });
    document.getElementById("multi-input-`,`").addEventListener("change", function (event) {
        if (!event.target.value) {
            return;
        }
        let isDuplicate = event.target.tokens.some(function(token) {
            return token.text === event.target.value
        });
        if (isDuplicate) {
            event.target.valueState = "Error";
            setTimeout(function () {
                event.target.valueState = "Normal";
            }, 2000);
            return;
        }
        event.target.appendChild(createTokenFromText(event.target.value));
        event.target.value = "";
    });
<\/script>`],[`
    `,`
<script>
    var createTokenFromText = function (text) {
        let token = document.createElement("ui5-token");
        token.setAttribute("text", text);
        token.setAttribute("slot", "tokens");
        return token;
    };
    document.getElementById("multi-input-`,`").addEventListener("token-delete", function (event) {
        const token = event.detail?.token;
        token && token.remove();
    });
    document.getElementById("multi-input-`,`").addEventListener("paste", function (event) {
        event.preventDefault();

        let pastedText = (event.clipboardData || window.clipboardData).getData('text/plain');;

        if (!pastedText) {
            return;
        }

        let separatedTexts = pastedText.split(\\/\\\\r\\\\n\\|\\\\r\\|\\\\n\\|\\\\t\\/g).filter(t => !!t);

        if (separatedTexts.length === 1) {

            event.target.value += separatedTexts[0];
            return;
        }

        separatedTexts.forEach((tokenText) => {
            if (tokenText) {
                event.target.appendChild(createTokenFromText(tokenText));
            }
        })
    });
    document.getElementById("multi-input-`,`").addEventListener("change", function (event) {
        if (!event.target.value) {
            return;
        }
        let isDuplicate = event.target.tokens.some(function(token) {
            return token.text === event.target.value
        });
        if (isDuplicate) {
            event.target.valueState = "Error";
            setTimeout(function () {
                event.target.valueState = "Normal";
            }, 2000);
            return;
        }
        event.target.appendChild(createTokenFromText(event.target.value));
        event.target.value = "";
    });
<\/script>`])),e(),r,r,r)];const s=u.bind({});s.args={placeholder:"Enter product",showSuggestions:!0,default:`
    <ui5-suggestion-item text="Wireless DSL/ Repeater and Print Server Lorem ipsum dolar st amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor incidunt ut labore et dolore magna aliquyam erat, diam nonumy eirmod tempor individunt ut labore et dolore magna aliquyam erat, sed justo et ea rebum."></ui5-suggestion-item>
    <ui5-suggestion-item text="Widescreen Portable DVD Player w MP3, consetetur sadipscing, sed diam nonumy eirmod tempor invidunt ut labore et dolore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergen, no sea takimata. Tortor pretium viverra suspendisse potenti nullam. Congue quisque egestas diam in arcu cursus.Rutrum tellus pellentesque eu tincidunt tortor. Nec tincidunt praesent semper feugiat nibh sed"></ui5-suggestion-item>
    <ui5-suggestion-item text="Portable DVD Player with 9 inches LCD Monitor"></ui5-suggestion-item>`,valueStateMessage:'<div slot="valueStateMessage">Token is already in the list</div>'};var g,m,c;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`args => html\`
<ui5-multi-input
    id="multi-input-\${++index}"
    ?disabled="\${ifDefined(args.disabled)}"
    placeholder="\${ifDefined(args.placeholder)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    ?no-typeahead="\${ifDefined(args.noTypeahead)}"
    type="\${ifDefined(args.type)}"
    value="\${ifDefined(args.value)}"
    value-state="\${ifDefined(args.valueState)}"
    name="\${ifDefined(args.name)}"
    ?show-suggestions="\${ifDefined(args.showSuggestions)}"
    maxlength="\${ifDefined(args.maxlength)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
    ?show-clear-icon="\${ifDefined(args.showClearIcon)}"
    ?show-value-help-icon="\${ifDefined(args.showValueHelpIcon)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.valueStateMessage)}
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.tokens)}
</ui5-multi-input>\``,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,f,v;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => html\`
<ui5-multi-input
    id="multi-input-\${++index}"
    ?disabled="\${ifDefined(args.disabled)}"
    placeholder="\${ifDefined(args.placeholder)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    ?no-typeahead="\${ifDefined(args.noTypeahead)}"
    type="\${ifDefined(args.type)}"
    value="\${ifDefined(args.value)}"
    value-state="\${ifDefined(args.valueState)}"
    name="\${ifDefined(args.name)}"
    ?show-suggestions="\${ifDefined(args.showSuggestions)}"
    maxlength="\${ifDefined(args.maxlength)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
    ?show-clear-icon="\${ifDefined(args.showClearIcon)}"
    ?show-value-help-icon="\${ifDefined(args.showValueHelpIcon)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.valueStateMessage)}
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.tokens)}
</ui5-multi-input>\``,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var h,$,k;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`args => html\`
<ui5-multi-input
    id="multi-input-\${++index}"
    ?disabled="\${ifDefined(args.disabled)}"
    placeholder="\${ifDefined(args.placeholder)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    ?no-typeahead="\${ifDefined(args.noTypeahead)}"
    type="\${ifDefined(args.type)}"
    value="\${ifDefined(args.value)}"
    value-state="\${ifDefined(args.valueState)}"
    name="\${ifDefined(args.name)}"
    ?show-suggestions="\${ifDefined(args.showSuggestions)}"
    maxlength="\${ifDefined(args.maxlength)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
    ?show-clear-icon="\${ifDefined(args.showClearIcon)}"
    ?show-value-help-icon="\${ifDefined(args.showValueHelpIcon)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.valueStateMessage)}
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.tokens)}
</ui5-multi-input>\``,...(k=($=n.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var x,D,T;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`args => html\`
<ui5-multi-input
    id="multi-input-\${++index}"
    ?disabled="\${ifDefined(args.disabled)}"
    placeholder="\${ifDefined(args.placeholder)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    ?no-typeahead="\${ifDefined(args.noTypeahead)}"
    type="\${ifDefined(args.type)}"
    value="\${ifDefined(args.value)}"
    value-state="\${ifDefined(args.valueState)}"
    name="\${ifDefined(args.name)}"
    ?show-suggestions="\${ifDefined(args.showSuggestions)}"
    maxlength="\${ifDefined(args.maxlength)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
    ?show-clear-icon="\${ifDefined(args.showClearIcon)}"
    ?show-value-help-icon="\${ifDefined(args.showValueHelpIcon)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.valueStateMessage)}
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.tokens)}
</ui5-multi-input>\``,...(T=(D=s.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const J=["Basic","Tokens","TokenCreation","SuggestionsWrapping"];export{i as Basic,s as SuggestionsWrapping,n as TokenCreation,a as Tokens,J as __namedExportsOrder,G as default};
//# sourceMappingURL=MultiInput.stories-02276a7b.js.map
