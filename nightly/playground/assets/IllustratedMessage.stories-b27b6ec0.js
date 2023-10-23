import{x as b}from"./lit-element-c5a2b594.js";import{l as t}from"./if-defined-c29cffe1.js";import{o as a}from"./unsafe-html-0ddd83da.js";import{D}from"./docs-7347355e.js";import{I as S}from"./IllustrationMessageType-7b8c582d.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-da34ba2e.js";import"./iframe-73fc3c52.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-7cefe925.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const E={name:{control:"select",options:["AddColumn","AddDimensions","AddPeople","BalloonSky","BeforeSearch","Connection","EmptyCalendar","EmptyList","EmptyPlanningCalendar","ErrorScreen","FilterTable","GroupTable","NoActivities","NoColumnsSet","NoData","NoDimensionsSet","NoEntries","NoFilterResults","NoMail","NoMail_v1","NoNotifications","NoSavedItems","NoSavedItems_v1","NoSearchResults","NoTasks","NoTasks_v1","PageNotFound","ReloadScreen","ResizeColumn","SearchEarth","SearchFolder","SimpleBalloon","SimpleBell","SimpleCalendar","SimpleCheckMark","SimpleConnection","SimpleEmptyDoc","SimpleEmptyList","SimpleError","SimpleMagnifier","SimpleMail","SimpleNoSavedItems","SimpleNotFoundMagnifier","SimpleReload","SimpleTask","SleepingBell","SortColumn","SuccessBalloon","SuccessCheckMark","SuccessHighFive","SuccessScreen","Survey","Tent","TntChartArea","TntChartArea2","TntChartBar","TntChartBPMNFlow","TntChartBullet","TntChartDoughnut","TntChartFlow","TntChartGantt","TntChartOrg","TntChartPie","TntCodePlaceholder","TntCompany","TntComponents","TntExternalLink","TntFaceID","TntFingerprint","TntLock","TntMission","TntNoApplications","TntNoFlows","TntNoUsers","TntRadar","TntSecrets","TntServices","TntSessionExpired","TntSessionExpiring","TntSuccess","TntSuccessfulAuth","TntSystems","TntTeams","TntTools","TntUnableToLoad","TntUnlock","TntUnsuccessfulAuth","TntUser2","UnableToLoad","UnableToLoadImage","UnableToUpload","UploadCollection","UploadToCloud"]},size:{control:"select",options:["Auto","Base","Dialog","Scene","Spot"]},default:{control:{type:"text"}},subtitle:{control:{type:"text"}},title:{control:{type:"text"}}},B={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.15"};var s=Object.freeze,x=Object.defineProperty,N=(e,C)=>s(x(e,"raw",{value:s(C||e.slice())})),l;const $="ui5-illustrated-message",G={title:"Fiori/Illustrated Message",component:"IllustratedMessage",parameters:{docs:{page:D({...B,component:$})}},argTypes:E},h=e=>b` <ui5-illustrated-message
    name="${t(e.name)}"
    size="${t(e.size)}"
    subtitle-text="${t(e.subtitleText)}"
    title-text="${t(e.titleText)}"
    accessible-name-ref="${t(e.accessibleNameRef)}"
>
    ${a(e.title)} 
    ${a(e.subtitle)}
    ${a(e.default)}
</ui5-illustrated-message>`,n=h.bind({});n.args={name:S.UnableToUpload,default:`
    <ui5-button design="Emphasized">Action 1</ui5-button>
    <ui5-button>Action 2</ui5-button>
    `};const i=()=>b(l||(l=N([`
    <ui5-button id="openDialogButton">Open Dialog</ui5-button>
    <ui5-dialog id="hello-dialog" header-text="Error">
        <ui5-illustrated-message name="UnableToLoad"></ui5-illustrated-message>
        <ui5-bar design="Footer" slot="footer">
            <ui5-button
                id="closeDialogButton"
                design="Emphasized"
                slot="endContent"
                >Close</ui5-button
            >
        </ui5-bar>
    </ui5-dialog>
    <script>
        const dialogOpener = document.getElementById("openDialogButton");
        const dialog = document.getElementById("hello-dialog");
        const dialogCloser = document.getElementById("closeDialogButton");
        dialogOpener.addEventListener("click", function () {
            dialog.show();
        });
        dialogCloser.addEventListener("click", function () {
            dialog.close();
        });
    <\/script>
`]))),o=h.bind({});o.args={name:S.UnableToUpload,title:`
    <ui5-title slot="title" level="H1">Something went wrong</ui5-title>
    `,subtitle:`
    <div slot="subtitle">
        Please try again or contact us at
        <ui5-link>example@example.com</ui5-link>
    </div>
    `,default:`
    <ui5-button icon="refresh">Try again</ui5-button>`};var r,u,d;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:'args => html` <ui5-illustrated-message\n    name="${ifDefined(args.name)}"\n    size="${ifDefined(args.size)}"\n    subtitle-text="${ifDefined(args.subtitleText)}"\n    title-text="${ifDefined(args.titleText)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n>\n    ${unsafeHTML(args.title)} \n    ${unsafeHTML(args.subtitle)}\n    ${unsafeHTML(args.default)}\n</ui5-illustrated-message>`',...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var c,m,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`() => html\`
    <ui5-button id="openDialogButton">Open Dialog</ui5-button>
    <ui5-dialog id="hello-dialog" header-text="Error">
        <ui5-illustrated-message name="UnableToLoad"></ui5-illustrated-message>
        <ui5-bar design="Footer" slot="footer">
            <ui5-button
                id="closeDialogButton"
                design="Emphasized"
                slot="endContent"
                >Close</ui5-button
            >
        </ui5-bar>
    </ui5-dialog>
    <script>
        const dialogOpener = document.getElementById("openDialogButton");
        const dialog = document.getElementById("hello-dialog");
        const dialogCloser = document.getElementById("closeDialogButton");
        dialogOpener.addEventListener("click", function () {
            dialog.show();
        });
        dialogCloser.addEventListener("click", function () {
            dialog.close();
        });
    <\/script>
\``,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,T,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:'args => html` <ui5-illustrated-message\n    name="${ifDefined(args.name)}"\n    size="${ifDefined(args.size)}"\n    subtitle-text="${ifDefined(args.subtitleText)}"\n    title-text="${ifDefined(args.titleText)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n>\n    ${unsafeHTML(args.title)} \n    ${unsafeHTML(args.subtitle)}\n    ${unsafeHTML(args.default)}\n</ui5-illustrated-message>`',...(f=(T=o.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};const W=["Basic","WithADialog","CustomTitle"];export{n as Basic,o as CustomTitle,i as WithADialog,W as __namedExportsOrder,G as default};
//# sourceMappingURL=IllustratedMessage.stories-b27b6ec0.js.map
