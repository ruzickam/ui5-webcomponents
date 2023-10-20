import{x as s}from"./lit-element-c5a2b594.js";import{o as b}from"./unsafe-html-0ddd83da.js";import{l as a}from"./if-defined-c29cffe1.js";import{D as T}from"./docs-b408a008.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-175c2aa7.js";import"./iframe-2292ef40.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-ffca3e54.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const H={layout:{control:"select",options:["Auto","Horizontal","Vertical"]},menuHorizontalAlign:{control:"select",options:["Left","Right"]},menuVerticalAlign:{control:"select",options:["Bottom","Top"]},default:{control:{type:"text"}},"selection-change":{description:"Fired when selection is changed by user interaction.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"the selected item."}]}}},j={package:"@ui5/webcomponents-fiori",since:"1.1.0"},D=()=>s`
<div> Horizontal Media Gallery with initially selected item:
    <ui5-media-gallery layout="Horizontal">
        <ui5-media-gallery-item>
            <img src="../assets/images/HT-1000.jpg" />
        </ui5-media-gallery-item>
        <ui5-media-gallery-item selected="">
            <img src="../assets/images/HT-1010.jpg" />
        </ui5-media-gallery-item>
    </ui5-media-gallery>
</div>

</br>

<div> Vertical Media Gallery with initially disabled item:
    <ui5-media-gallery layout="Vertical" show-all-thumbnails>
        <ui5-media-gallery-item disabled>
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
</div>

</br>

<div> Horizontal Media Gallery with thumbnails on the right:
    <ui5-media-gallery layout="Horizontal" show-all-thumbnails menu-horizontal-align="Right">
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
</div>

</br>

<div> Media Gallery with seperate image thumbnail:
    <ui5-media-gallery layout="Horizontal" show-all-thumbnails menu-horizontal-align="Right">
        <ui5-media-gallery-item>
            <img src="../assets/images/HT-1000.jpg" />
            <img src="../assets/images/HT-1000-small.jpg" slot="thumbnail"/>
        </ui5-media-gallery-item>
    </ui5-media-gallery>
</div>`;var m=Object.freeze,w=Object.defineProperty,$=(e,v)=>m(w(e,"raw",{value:m(v||e.slice())})),n;const A="ui5-media-gallery",G=e=>s`
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
`,F={title:"Fiori/Media Gallery",component:"MediaGallery",subcomponents:{MediaGalleryItem:"MediaGalleryItem"},parameters:{docs:{page:T({...j,component:A})}},decorators:[G],argTypes:H};let x=0;const r=e=>s` <ui5-media-gallery
        id="media-gallery-${x++}"
        ?show-all-thumbnails="${a(e.showAllThumbnails)}"
        ?interactive-display-area="${a(e.interactiveDisplayArea)}"
        layout="${a(e.layout)}"
        menu-horizontal-align="${a(e.menuHorizontalAlign)}"
        menu-vertical-align="${a(e.menuVerticalAlign)}"
    >
        ${b(e.default)}
    </ui5-media-gallery>`,l=r.bind({});l.args={showAllThumbnails:!0,default:`
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
    </ui5-media-gallery-item>`};const N=D.bind({}),t=r.bind({});t.args={default:`
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
    </ui5-media-gallery-item>`};const i=r.bind({});i.decorators=[e=>s(n||(n=$([`
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
<\/script>`])),e())];i.args={interactiveDisplayArea:!0,default:`
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
    </ui5-media-gallery-item>`};i.parameters={docs:{story:{inline:!1,iframeHeight:"800px"}}};var g,o,u;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
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
}`,...(u=(o=l.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};var d,c,y;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
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
}`,...(y=(c=t.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};var p,f,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Q=["Basic","Types","VideoContent","ThumbnailOverflow"];export{l as Basic,i as ThumbnailOverflow,N as Types,t as VideoContent,Q as __namedExportsOrder,F as default};
//# sourceMappingURL=MediaGallery.stories-c04de958.js.map
