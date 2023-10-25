import{x as l}from"./lit-element-c5a2b594.js";import{l as i}from"./if-defined-c29cffe1.js";import{o as n}from"./unsafe-html-0ddd83da.js";import{D as v}from"./docs-468b42ef.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-0efa6310.js";import"./iframe-34ad69be.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-168fc227.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const h={files:{control:{type:!1}},valueState:{control:"select",options:["Error","Information","None","Success","Warning"]},default:{control:{type:"text"}},valueStateMessage:{control:{type:"text"}},change:{description:"Event is fired when the value of the file path has been changed. <b>Note:</b> Keep in mind that because of the HTML input element of type file, the event is also fired in Chrome browser when the Cancel button of the uploads window is pressed.",table:{category:"events"},UI5CustomData:{parameters:[{name:"files",type:"FileList",description:"The current files."}]}}},b={package:"@ui5/webcomponents",since:"1.0.0-rc.6"};var r=Object.freeze,$=Object.defineProperty,D=(e,g)=>r($(e,"raw",{value:r(g||e.slice())})),o;const y="ui5-file-uploader",R={title:"Main/FileUploader",component:"FileUploader",parameters:{docs:{page:v({...b,component:y})}},argTypes:h},m=e=>l`<ui5-file-uploader
    accept="${i(e.accept)}"
    ?hide-input="${i(e.hideInput)}"
    ?disabled="${i(e.disabled)}"
    ?multiple="${i(e.multiple)}"
    name="${i(e.name)}"
    placeholder="${i(e.placeholder)}"
    value="${i(e.value)}"
    valueState="${i(e.valueState)}"
    id="${i(e.id)}"
>
    ${n(e.default)}
    ${n(e.valueStateMessage)}
</ui5-file-uploader>`,t=m.bind({});t.args={default:'<ui5-button icon="upload" accessible-name-ref="upload-single-file-label">Upload Single File</ui5-button>'};t.decorators=[e=>l`<ui5-label id="upload-single-file-label" style="display: none">File Uploader, which accepts only one file.</ui5-label>
    ${e()}`];const a=m.bind({});a.storyName="Image Uploader";a.args={id:"fileuploader",accept:"image/*",default:'<ui5-button icon="upload" accessible-name-ref="upload-img-label">Upload Images</ui5-button>',multiple:!0};a.decorators=[e=>l(o||(o=D([`<ui5-label id="upload-img-label" style="display: none">File Uploader, which accepts only images.</ui5-label>
    `,`
    <div id="result"></div>
    <script>
        var fileUploader = document.querySelector("#fileuploader"),
        resultDiv = document.querySelector("#result");
        fileUploader.addEventListener("change", function(event) {
            var files = event.target.files;
            if (!files.length) {
                resultDiv.innerHTML = "<ui5-label>No Files Selected</ui5-label>";
            } else {
                resultDiv.innerHTML = "";
                resultDiv.style.marginTop = "1rem";
                for (var i = 0; i < files.length; i++) {
                    var img = document.createElement("img");
                    img.src = URL.createObjectURL(files[i]);
                    img.width = 100;
                    img.height = 100;
                    img.onload = function() {
                        URL.revokeObjectURL(img.src);
                    }
                    resultDiv.appendChild(img);
                }
            }
        })
    <\/script>`])),e())];a.parameters={docs:{story:{inline:!1}}};var s,d,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:'args => html`<ui5-file-uploader\n    accept="${ifDefined(args.accept)}"\n    ?hide-input="${ifDefined(args.hideInput)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?multiple="${ifDefined(args.multiple)}"\n    name="${ifDefined(args.name)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    value="${ifDefined(args.value)}"\n    valueState="${ifDefined(args.valueState)}"\n    id="${ifDefined(args.id)}"\n>\n    ${unsafeHTML(args.default)}\n    ${unsafeHTML(args.valueStateMessage)}\n</ui5-file-uploader>`',...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,c,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:'args => html`<ui5-file-uploader\n    accept="${ifDefined(args.accept)}"\n    ?hide-input="${ifDefined(args.hideInput)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?multiple="${ifDefined(args.multiple)}"\n    name="${ifDefined(args.name)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    value="${ifDefined(args.value)}"\n    valueState="${ifDefined(args.valueState)}"\n    id="${ifDefined(args.id)}"\n>\n    ${unsafeHTML(args.default)}\n    ${unsafeHTML(args.valueStateMessage)}\n</ui5-file-uploader>`',...(f=(c=a.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};const P=["Basic","Advanced"];export{a as Advanced,t as Basic,P as __namedExportsOrder,R as default};
//# sourceMappingURL=FileUploader.stories-8596458d.js.map
