import{x as o}from"./lit-element-c5a2b594.js";import{o as O}from"./unsafe-html-0ddd83da.js";import{l}from"./if-defined-c29cffe1.js";import{D as P}from"./docs-a58dd199.js";import{M as _,a as U}from"./MediaGalleryMenuHorizontalAlign-e4dd353f.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-d23eae87.js";import"./iframe-17871902.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-9c2f7062.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const k={layout:{control:"select",options:["Auto","Horizontal","Vertical"]},menuHorizontalAlign:{control:"select",options:["Left","Right"]},menuVerticalAlign:{control:"select",options:["Bottom","Top"]},default:{control:{type:"text"}},"selection-change":{description:"Fired when selection is changed by user interaction.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"the selected item."}]}}},R={package:"@ui5/webcomponents-fiori",since:"1.1.0"};var d=Object.freeze,F=Object.defineProperty,N=(e,E)=>d(F(e,"raw",{value:d(E||e.slice())})),c;const Q="ui5-media-gallery",W=e=>o`
    <style>
        ui5-media-gallery-item:not(:defined) {
            visibility: hidden;
        }

        @media (min-width: 600px) {
            ui5-media-gallery {
                height: 50rem;
            }
        }
    </style>
    ${e()}
`,ce={title:"Fiori/Media Gallery",component:"MediaGallery",subcomponents:{MediaGalleryItem:"MediaGalleryItem"},parameters:{docs:{page:P({...R,component:Q})}},decorators:[W],argTypes:k};let Y=0;const i=e=>o` <ui5-media-gallery
        id="media-gallery-${Y++}"
        ?show-all-thumbnails="${l(e.showAllThumbnails)}"
        ?interactive-display-area="${l(e.interactiveDisplayArea)}"
        layout="${l(e.layout)}"
        menu-horizontal-align="${l(e.menuHorizontalAlign)}"
        menu-vertical-align="${l(e.menuVerticalAlign)}"
    >
        ${O(e.default)}
    </ui5-media-gallery>`,r=i.bind({});r.args={showAllThumbnails:!0,default:`
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1000.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1010.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1022.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1030.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-2002.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-2026.jpg" />
    </ui5-media-gallery-item>`};const s=i.bind({});s.args={showAllThumbnails:!0,layout:_.Vertical,default:`
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1000.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1010.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1022.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1030.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-2002.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-2026.jpg" />
    </ui5-media-gallery-item>`};const t=i.bind({});t.args={showAllThumbnails:!0,layout:_.Horizontal,menuHorizontalAlign:U.Right,default:`
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1000.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1010.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1022.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1030.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-2002.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-2026.jpg" />
    </ui5-media-gallery-item>`};const n=i.bind({});n.args={default:`
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1000.jpg" />
        <img
            src="../assets/images/HT-1000-small.jpg"
            slot="thumbnail"
        />
    </ui5-media-gallery-item>`};const m=i.bind({});m.args={default:`
    <ui5-media-gallery-item layout="Wide">
        <iframe
            src="https://www.youtube.com/embed/GxGZG2fv6Aw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
        ></iframe>
        <img
            src="../assets/images/sap-logo-square.svg"
            slot="thumbnail"
            alt="SAP Video"
        />
    </ui5-media-gallery-item>`};const g=i.bind({});g.args={default:`
    <ui5-media-gallery-item disabled="">
        <img src="../assets/images/HT-1000.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1010.jpg" />
    </ui5-media-gallery-item>`};const u=i.bind({});u.args={default:`
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1000.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item selected="">
        <img src="../assets/images/HT-1010.jpg" />
    </ui5-media-gallery-item>`};const a=i.bind({});a.decorators=[e=>o(c||(c=N([`
<style>
    @media (min-width: 612px) {
        .container {
            display: grid;
            gap: 1rem;
            grid-template-columns: 1fr 1fr;
        }
    }

    .details {
        background: var(--sapBaseColor);
        padding: 1rem;
    }

    .dialog-footer {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        padding: 0px 0.5rem 0px 0px;
    }
</style>
<div class="container">
    `,`
    <div class="details">
            <ui5-title level="H1">Item Details</ui5-title>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            quam lectus, tristique semper mi et, faucibus viverra metus.
            Quisque nec venenatis massa. Ut eu dolor a justo ornare feugiat.
            Morbi congue diam id enim porttitor, sit amet placerat nunc
            pulvinar. Vivamus eu feugiat justo. Ut eu lectus mauris. Aliquam
            erat volutpat. Vestibulum et enim sit amet ipsum tincidunt
            aliquet nec in dui. Sed dui est, hendrerit non sollicitudin
            quis, venenatis vel libero. Suspendisse sit amet lorem posuere,
            egestas neque eget, sodales ipsum. Donec sollicitudin leo ut
            risus tincidunt tincidunt. Ut vel nisl nisl. Cras leo odio,
            viverra a ante nec, cursus volutpat lectus. Cras ac metus nisi.
            Aliquam fermentum nec felis sit amet tristique. Nunc luctus a
            lacus non semper. Curabitur euismod tellus id massa mattis, in
            consectetur mi luctus. Mauris dignissim efficitur lobortis.
            Etiam sit amet nunc commodo, lacinia nisi sagittis, finibus
            nulla. Proin quis elementum eros. Ut facilisis lacinia viverra.
        </div>
    </div>
</div>

<ui5-dialog id="mediaGalleryDialog" header-text="Item" stretch="">
    <ui5-bar design="Header" slot="header">
        <ui5-label>Item</ui5-label>
    </ui5-bar>
    <ui5-media-gallery show-all-thumbnails="">
        <ui5-media-gallery-item>
            <img src="../assets/images/HT-1000.jpg" />
        </ui5-media-gallery-item>
        <ui5-media-gallery-item>
            <img src="../assets/images/HT-1010.jpg" />
        </ui5-media-gallery-item>
        <ui5-media-gallery-item>
            <img src="../assets/images/HT-1022.jpg" />
        </ui5-media-gallery-item>
        <ui5-media-gallery-item>
            <img src="../assets/images/HT-1030.jpg" />
        </ui5-media-gallery-item>
        <ui5-media-gallery-item>
            <img src="../assets/images/HT-2002.jpg" />
        </ui5-media-gallery-item>
        <ui5-media-gallery-item>
            <img src="../assets/images/HT-2026.jpg" />
        </ui5-media-gallery-item>
    </ui5-media-gallery>
    <div slot="footer" class="dialog-footer">
        <div style="flex: 1;"></div>
        <ui5-button id="closeDialogButton">Close</ui5-button>
    </div>
</ui5-dialog>
<script>
    const mediaGalleryDialog = document.getElementById("mediaGalleryDialog");
    const mediaGallery = document.querySelector(".container > ui5-media-gallery");
    const closeDialogButton = document.getElementById("closeDialogButton");
    
    closeDialogButton.addEventListener("click", () => {
        mediaGalleryDialog.close();
    });
    mediaGallery.addEventListener("overflow-click", (event) => {
        mediaGalleryDialog.show();
    });
    mediaGallery.addEventListener(
        "display-area-click",
        (event) => {
            mediaGalleryDialog.show();
        }
    );
<\/script>`])),e())];a.args={interactiveDisplayArea:!0,default:`
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1000.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1010.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1022.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1030.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-2002.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-2026.jpg" />
    </ui5-media-gallery-item>`};a.parameters={docs:{story:{inline:!1,iframeHeight:"800px"}}};var y,p,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return html\` <ui5-media-gallery
        id="media-gallery-\${index++}"
        ?show-all-thumbnails="\${ifDefined(args.showAllThumbnails)}"
        ?interactive-display-area="\${ifDefined(args.interactiveDisplayArea)}"
        layout="\${ifDefined(args.layout)}"
        menu-horizontal-align="\${ifDefined(args.menuHorizontalAlign)}"
        menu-vertical-align="\${ifDefined(args.menuVerticalAlign)}"
    >
        \${unsafeHTML(args.default)}
    </ui5-media-gallery>\`;
}`,...(f=(p=r.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var h,v,D;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return html\` <ui5-media-gallery
        id="media-gallery-\${index++}"
        ?show-all-thumbnails="\${ifDefined(args.showAllThumbnails)}"
        ?interactive-display-area="\${ifDefined(args.interactiveDisplayArea)}"
        layout="\${ifDefined(args.layout)}"
        menu-horizontal-align="\${ifDefined(args.menuHorizontalAlign)}"
        menu-vertical-align="\${ifDefined(args.menuVerticalAlign)}"
    >
        \${unsafeHTML(args.default)}
    </ui5-media-gallery>\`;
}`,...(D=(v=s.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var T,b,$;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  return html\` <ui5-media-gallery
        id="media-gallery-\${index++}"
        ?show-all-thumbnails="\${ifDefined(args.showAllThumbnails)}"
        ?interactive-display-area="\${ifDefined(args.interactiveDisplayArea)}"
        layout="\${ifDefined(args.layout)}"
        menu-horizontal-align="\${ifDefined(args.menuHorizontalAlign)}"
        menu-vertical-align="\${ifDefined(args.menuVerticalAlign)}"
    >
        \${unsafeHTML(args.default)}
    </ui5-media-gallery>\`;
}`,...($=(b=t.parameters)==null?void 0:b.docs)==null?void 0:$.source}}};var H,A,j;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  return html\` <ui5-media-gallery
        id="media-gallery-\${index++}"
        ?show-all-thumbnails="\${ifDefined(args.showAllThumbnails)}"
        ?interactive-display-area="\${ifDefined(args.interactiveDisplayArea)}"
        layout="\${ifDefined(args.layout)}"
        menu-horizontal-align="\${ifDefined(args.menuHorizontalAlign)}"
        menu-vertical-align="\${ifDefined(args.menuVerticalAlign)}"
    >
        \${unsafeHTML(args.default)}
    </ui5-media-gallery>\`;
}`,...(j=(A=n.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var w,z,x;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  return html\` <ui5-media-gallery
        id="media-gallery-\${index++}"
        ?show-all-thumbnails="\${ifDefined(args.showAllThumbnails)}"
        ?interactive-display-area="\${ifDefined(args.interactiveDisplayArea)}"
        layout="\${ifDefined(args.layout)}"
        menu-horizontal-align="\${ifDefined(args.menuHorizontalAlign)}"
        menu-vertical-align="\${ifDefined(args.menuVerticalAlign)}"
    >
        \${unsafeHTML(args.default)}
    </ui5-media-gallery>\`;
}`,...(x=(z=m.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var M,G,V;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  return html\` <ui5-media-gallery
        id="media-gallery-\${index++}"
        ?show-all-thumbnails="\${ifDefined(args.showAllThumbnails)}"
        ?interactive-display-area="\${ifDefined(args.interactiveDisplayArea)}"
        layout="\${ifDefined(args.layout)}"
        menu-horizontal-align="\${ifDefined(args.menuHorizontalAlign)}"
        menu-vertical-align="\${ifDefined(args.menuVerticalAlign)}"
    >
        \${unsafeHTML(args.default)}
    </ui5-media-gallery>\`;
}`,...(V=(G=g.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var L,S,I;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  return html\` <ui5-media-gallery
        id="media-gallery-\${index++}"
        ?show-all-thumbnails="\${ifDefined(args.showAllThumbnails)}"
        ?interactive-display-area="\${ifDefined(args.interactiveDisplayArea)}"
        layout="\${ifDefined(args.layout)}"
        menu-horizontal-align="\${ifDefined(args.menuHorizontalAlign)}"
        menu-vertical-align="\${ifDefined(args.menuVerticalAlign)}"
    >
        \${unsafeHTML(args.default)}
    </ui5-media-gallery>\`;
}`,...(I=(S=u.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var q,B,C;a.parameters={...a.parameters,docs:{...(q=a.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  return html\` <ui5-media-gallery
        id="media-gallery-\${index++}"
        ?show-all-thumbnails="\${ifDefined(args.showAllThumbnails)}"
        ?interactive-display-area="\${ifDefined(args.interactiveDisplayArea)}"
        layout="\${ifDefined(args.layout)}"
        menu-horizontal-align="\${ifDefined(args.menuHorizontalAlign)}"
        menu-vertical-align="\${ifDefined(args.menuVerticalAlign)}"
    >
        \${unsafeHTML(args.default)}
    </ui5-media-gallery>\`;
}`,...(C=(B=a.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const ye=["Basic","VerticalLayout","ThumbnailsOnTheRight","SeparateImageThumbnail","VideoContent","DisabledContent","InitiallySelected","ThumbnailOverflow"];export{r as Basic,g as DisabledContent,u as InitiallySelected,n as SeparateImageThumbnail,a as ThumbnailOverflow,t as ThumbnailsOnTheRight,s as VerticalLayout,m as VideoContent,ye as __namedExportsOrder,ce as default};
//# sourceMappingURL=MediaGallery.stories-005cf57c.js.map
