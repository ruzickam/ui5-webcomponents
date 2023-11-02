import{x as u}from"./lit-element-c5a2b594.js";import{D as d}from"./docs-33d4f08d.js";import{o as h}from"./unsafe-html-0ddd83da.js";import{l as v}from"./if-defined-c29cffe1.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-efc7f360.js";import"./iframe-72f32e3d.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-0c80a90b.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const U={default:{control:{type:"text"}},header:{control:{type:"text"}}},p={package:"@ui5/webcomponents"},b="ui5-card",ee={title:"Main/Card",component:"Card",subcomponents:{CardHeader:"CardHeader"},parameters:{docs:{page:d({...p,component:b}),story:{iframeHeight:"370px",inline:!1}}},argTypes:U},o=e=>u`
<ui5-card
    accessible-name="${v(e.accessibleName)}"
    accessible-name-ref="${v(e.accessibleNameRef)}"
>
    ${h(e.header)}
    ${h(e.default)}
</ui5-card>
    `,i=(e,n,c,g,f,L)=>`<ui5-card-header
    slot="header"
    title-text="${e}"
    subtitle-text="${n}"
    ${c?`status="${c}"`:""}
    ${L?"interactive":""}
>
    ${f||""}
    ${g?g.map(W=>`<ui5-button design="Transparent" slot="action">${W}</ui5-button>`):""}
</ui5-card-header>`,m=e=>{const n=u`
        <style>
            ui5-card {
                width: ${e};
            }
        </style>`;return c=>u`
        ${n}
        ${c()}`},t=o.bind({});t.args={header:i("This header is interactive","Click, press Enter or Space","3 of 6",[],'<ui5-icon name="group" slot="avatar"></ui5-icon>',!0),default:`<ui5-list separators="None" style="margin-block-end: 0.75rem;">
    <ui5-li image="../assets/images/avatars/man_avatar_2.png" description="Software Architect">Richard Wilson</ui5-li>
    <ui5-li image="../assets/images/avatars/woman_avatar_3.png" description="Visual Designer">Elena Petrova</ui5-li>
    <ui5-li image="../assets/images/avatars/man_avatar_3.png" description="Quality Specialist">John Miller</ui5-li>
</ui5-list>`};t.decorators=[m("22rem")];const l=o.bind({});l.args={header:i("Team Space","Direct Reports","3 of 10",["View All"],'<ui5-icon name="group" slot="avatar"></ui5-icon>'),default:`<ui5-list separators="None" style="margin-block-end: 0.75rem;">
    <ui5-li image="../assets/images/avatars/man_avatar_1.png" description="User Researcher">Alain Chevalier</ui5-li>
    <ui5-li image="../assets/images/avatars/woman_avatar_1.png" description="Artist">Monique Legrand</ui5-li>
    <ui5-li image="../assets/images/avatars/woman_avatar_2.png" description="UX Specialist">Isabella Adams</ui5-li>
</ui5-list>`};l.decorators=[m("22rem")];const a=o.bind({});a.args={header:i("New Purchase Orders","Today","3 of 15"),default:`<style>
    .status-error { color: #b00; }
    .status-warning { color: #e9730c; }
    .status-success { color: #107e3e; }
</style>

<ui5-table style="margin-block-end: 0.75rem;">
    <ui5-table-column slot="columns">
        <ui5-label>Sales Order</ui5-label>
    </ui5-table-column>
    <ui5-table-column slot="columns">
        <ui5-label>Customer</ui5-label>
    </ui5-table-column>
    <ui5-table-column slot="columns">
        <ui5-label>Net Amount</ui5-label>
    </ui5-table-column>
    <ui5-table-column slot="columns" min-width="450" popin-text="Status" demand-popin>
        <ui5-label>Status</ui5-label>
    </ui5-table-column>

    <ui5-table-row>
        <ui5-table-cell>
            <ui5-label>5000010050</ui5-label>
        </ui5-table-cell>
        <ui5-table-cell>
            <ui5-label>Entertainment Argentina</ui5-label>
        </ui5-table-cell>
        <ui5-table-cell>
            <ui5-label>6k USD</ui5-label>
        </ui5-table-cell>
        <ui5-table-cell>
            <span class="status-success">Approved</span>
        </ui5-table-cell>
    </ui5-table-row>
    <ui5-table-row>
        <ui5-table-cell>
            <ui5-label>5000010051</ui5-label>
        </ui5-table-cell>
        <ui5-table-cell>
            <ui5-label>Brazil Technologies</ui5-label>
        </ui5-table-cell>
        <ui5-table-cell>
            <ui5-label>2k USD</ui5-label>
        </ui5-table-cell>
        <ui5-table-cell>
            <span class="status-error">Rejected</span>
        </ui5-table-cell>
    </ui5-table-row>
    <ui5-table-row>
        <ui5-table-cell>
            <ui5-label>5000010052</ui5-label>
        </ui5-table-cell>
        <ui5-table-cell>
            <ui5-label>Robert Brown Ent.</ui5-label>
        </ui5-table-cell>
        <ui5-table-cell>
            <ui5-label>17k USD</ui5-label>
        </ui5-table-cell>
        <ui5-table-cell>
            <span class="status-warning">Pending</span>
        </ui5-table-cell>
    </ui5-table-row>
</ui5-table>`};a.decorators=[m("40rem")];a.parameters={docs:{page:d({...p,component:b}),story:{iframeHeight:"250px",inline:!1}}};const s=o.bind({});s.args={header:i("Upcoming Activities","Today"),default:`<ui5-timeline>
    <ui5-timeline-item title-text="called" timestamp="1487583000000" icon="phone" name="John Smith" name-clickable></ui5-timeline-item>
    <ui5-timeline-item title-text="Weekly Sync - BTP Design" timestamp="1517349600000" icon="calendar">
        MR SOF02 2.43
    </ui5-timeline-item>
    <ui5-timeline-item title-text="Video Conference Call - UI5" timestamp="1485813600000" icon="calendar">
        Online meeting
    </ui5-timeline-item>
</ui5-timeline>`};s.decorators=[m("22rem")];const r=o.bind({}),E=[{header:i("David Williams","Sales Manager"),default:`<ui5-list separators="Inner" style="margin-block-end: 0.75rem;">
    <ui5-li icon="competitor" icon-end>Personal Development</ui5-li>
    <ui5-li icon="wallet" icon-end>Finance</ui5-li>
    <ui5-li icon="collaborate" icon-end>Communications Skills</ui5-li>
</ui5-list>`},{header:i("Project Cloud Transformation","Revenue per Product | EUR","3 of 3"),default:`<ui5-list separators="None" style="margin-block-end: 0.75rem;">
    <ui5-li description="ID234522566-D44" additional-text="27.25K EUR" additional-text-state="Success">Avantel</ui5-li>
    <ui5-li description="ID7125852785-A51" additional-text="22.89K EUR" additional-text-state="Warning">Telecomunicaciones Star</ui5-li>
    <ui5-li description="ID123555587-I05" additional-text="7.85K EUR" additional-text-state="Error">Talpa</ui5-li>
</ui5-list>`},{header:i("Donna Maria Moore","Senior Sales Executive",void 0,void 0,'<img src="../assets/images/avatars/man_avatar_1.png" slot="avatar">'),default:`<style>
    .content,
    .content-group {
        display: flex;
        flex-direction: column;
        padding-block-end: 1rem;
    }
    .content-padding {
        padding: 0.5rem 1rem 0 1rem;
        box-sizing: border-box;
    }
</style>
<div class="content content-padding">
    <ui5-title level="H5" style="padding-block-end: 1rem;">Contact details</ui5-title>
    <div class="content-group">
        <ui5-label show-colon>Company Name</ui5-label>
        <span>Company A</span>
    </div>
    <div class="content-group">
        <ui5-label show-colon>Address</ui5-label>
        <span>481 West Street, Anytown 45066, USA</span>
    </div>
    <div class="content-group">
        <ui5-label show-colon>Website</ui5-label>
        <ui5-link target="_blank">www.company_a.example.com</ui5-link>
    </div>
</div>`}];r.decorators=[e=>u`
            <style>
                .grid-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, 22rem);
                    grid-auto-rows: 1fr;
                    gap: 1rem;
                }
            </style>
            <div class="grid-container">
                ${E.map(n=>e({args:{...n}}))}
            </div>`];r.parameters={docs:{page:d({...p,component:b}),story:{iframeHeight:"680px",inline:!1}}};var $,y,w;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  return html\`
<ui5-card
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-card>
    \`;
}`,...(w=(y=t.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var S,x,T;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  return html\`
<ui5-card
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-card>
    \`;
}`,...(T=(x=l.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var D,M,_;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  return html\`
<ui5-card
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-card>
    \`;
}`,...(_=(M=a.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var k,H,N;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  return html\`
<ui5-card
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-card>
    \`;
}`,...(N=(H=s.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var R,C,A;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  return html\`
<ui5-card
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-card>
    \`;
}`,...(A=(C=r.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const ae=["InteractiveHeader","WithList","WithTable","WithTimeline","More"];export{t as InteractiveHeader,r as More,l as WithList,a as WithTable,s as WithTimeline,ae as __namedExportsOrder,ee as default};
//# sourceMappingURL=Card.stories-5ab5f1fc.js.map
