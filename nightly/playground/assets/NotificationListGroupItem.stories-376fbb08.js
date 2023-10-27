import{x as n}from"./lit-element-c5a2b594.js";import{l as i}from"./if-defined-c29cffe1.js";import{o as a}from"./unsafe-html-0ddd83da.js";import{D as x}from"./docs-b52c2ee0.js";import{P as g}from"./Priority-ed61c98b.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-b3224925.js";import"./iframe-ab38114b.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-45de4e8f.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const b={default:{control:{type:"text"}},actions:{control:{type:"text"}},close:{description:"Fired when the <code>Close</code> button is pressed.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"the closed item."}]}}},D={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.8"};var s=Object.freeze,L=Object.defineProperty,h=(t,w)=>s(L(t,"raw",{value:s(w||t.slice())})),r,c;const A="ui5-li-notification-group",I={title:"Fiori/Notification List Group Item",component:"NotificationListGroupItem",subcomponents:{NotificationAction:"NotificationAction"},parameters:{docs:{page:x({...D,component:A}),story:{inline:!1}}},argTypes:b},v=t=>n`<ui5-li-notification-group
    ?collapsed="${i(t.collapsed)}"
    ?show-counter="${i(t.showCounter)}"
    title-text="${i(t.titleText)}"
    priority="${i(t.priority)}"
    ?show-close="${i(t.showClose)}"
    ?read="${i(t.read)}"
    ?busy="${i(t.busy)}"
    busy-delay="${i(t.busyDelay)}"
>
    ${a(t.default)}
    ${a(t.actions)}
</ui5-li-notification-group>`,o=v.bind({});o.args={showClose:!0,showCounter:!0,titleText:"Orders",priority:g.High,default:`<ui5-li-notification show-close title-text="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="High">
    <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
    <span slot="footnotes">Office Notifications</span>
    <span slot="footnotes">3 Days</span>
    <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
    <ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>
    And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
</ui5-li-notification>
<ui5-li-notification show-close title-text="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="High">
    <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
    <span slot="footnotes">Office Notifications</span>
    <span slot="footnotes">3 Days</span>
    <ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>
    <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
    And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
</ui5-li-notification>`,actions:`<ui5-notification-action icon="accept" text="Accept All" slot="actions"></ui5-notification-action>
<ui5-notification-action icon="message-error" text="Reject All" slot="actions"></ui5-notification-action>`};const y=t=>n(r||(r=h([`<ui5-list header-text="Notifications Grouped">
    `,`
</ui5-list>

<script>
    var notificationList = document.querySelector("ui5-list");
    notificationList.addEventListener("item-close", e => {
        e.detail.item.hidden = true;
    });
<\/script>`])),t());o.decorators=[t=>n`${t()}
<ui5-li-notification-group
    show-close
    show-counter
    title-text="Deliveries"
    priority="Medium"
    collapsed
>
    <ui5-li-notification show-close title-text="New Delivery (#2900) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="Medium">
        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
        <span slot="footnotes">Office Notifications</span>
        <span slot="footnotes">3 Days</span>
        <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
    </ui5-li-notification>

    <ui5-li-notification show-close title-text="New Delivery (#29001) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="Medium">
        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
        <span slot="footnotes">Office Notifications</span>
        <span slot="footnotes">3 Days</span>
        <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
    </ui5-li-notification>

    <ui5-notification-action icon="accept" text="Accept All" slot="actions"></ui5-notification-action>
    <ui5-notification-action icon="message-error" text="Reject All" slot="actions"></ui5-notification-action>
</ui5-li-notification-group>

<ui5-li-notification-group
    show-close
    show-counter
    priority="Low"
    collapsed
    title-text="Meetings With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."
>
    <ui5-li-notification show-close title-text="New meeting at Building (#35001)" priority="Low" read>
        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
        <span slot="footnotes">Office Notifications</span>
        <span slot="footnotes">3 Days</span>
        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
    </ui5-li-notification>

    <ui5-li-notification show-close title-text="New meeting at Building (#35001)" priority="Low" read>
        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
        <span slot="footnotes">Office Notifications</span>
        <span slot="footnotes">3 Days</span>
        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
    </ui5-li-notification>
</ui5-li-notification-group>`,y];const e=v.bind({});e.args={showClose:!0,showCounter:!0,titleText:"Orders",priority:g.High,default:`<ui5-li-notification show-close title-text="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="High">
    <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
    <span slot="footnotes">Office Notifications</span>
    <span slot="footnotes">3 Days</span>
    <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
    <ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>
    And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
</ui5-li-notification>

<ui5-li-notification show-close title-text="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="High">
    <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
    <span slot="footnotes">Office Notifications</span>
    <span slot="footnotes">3 Days</span>
    <ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>
    <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
    And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
</ui5-li-notification>`,actions:`<ui5-notification-action icon="accept" text="Accept All" slot="actions"></ui5-notification-action>
<ui5-notification-action icon="message-error" text="Reject All" slot="actions"></ui5-notification-action>`};e.decorators=[t=>n`<style>
        #popover-with-notifications::part(content) {
            padding: 0;
            max-width: 400px;
        }
    </style>
    ${t()}
<ui5-li-notification-group show-close show-counter title-text="Deliveries" priority="Medium" collapsed>
    <ui5-li-notification show-close title-text="New Delivery (#2900) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="Medium">
        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
        <span slot="footnotes">Office Notifications</span>
        <span slot="footnotes">3 Days</span>
        <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
    </ui5-li-notification>

    <ui5-li-notification show-close title-text="New Delivery (#29001) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="Medium">
        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
        <span slot="footnotes">Office Notifications</span>
        <span slot="footnotes">3 Days</span>
        <ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
    </ui5-li-notification>

    <ui5-notification-action icon="accept" text="Accept All" slot="actions"></ui5-notification-action>
    <ui5-notification-action icon="message-error" text="Reject All" slot="actions"></ui5-notification-action>
</ui5-li-notification-group>

<ui5-li-notification-group show-close show-counter priority="High" collapsed title-text="Meetings With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.">
    <ui5-li-notification show-close title-text="New meeting at Building (#35001)" priority="High" read>
        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
        <span slot="footnotes">Office Notifications</span>
        <span slot="footnotes">3 Days</span>
        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
    </ui5-li-notification>

    <ui5-li-notification show-close title-text="New meeting at Building (#35001)" priority="High" read>
        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
        <span slot="footnotes">Office Notifications</span>
        <span slot="footnotes">3 Days</span>
        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
    </ui5-li-notification>
</ui5-li-notification-group>`,t=>n(c||(c=h([`<ui5-shellbar
    primary-title="Corporate Portal"
    logo="../assets/images/sap-logo-svg.svg"
    show-notifications
    notifications-count="6"
></ui5-shellbar>
<ui5-popover
    placement-type="Bottom"
    horizontal-align="Right"
    id="popover-with-notifications"
>
    `,`
</ui5-popover>

<script>
    var shellbar = document.querySelector("ui5-shellbar");
    var notificationsPopover = document.querySelector("ui5-popover");

    shellbar.addEventListener("notifications-click", e => {
        event.preventDefault();
        notificationsPopover.showAt(e.detail.targetRef);
    });
<\/script>`])),y(t))];e.parameters={docs:{story:{iframeHeight:"700px"}}};var l,u,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  return html\`<ui5-li-notification-group
    ?collapsed="\${ifDefined(args.collapsed)}"
    ?show-counter="\${ifDefined(args.showCounter)}"
    title-text="\${ifDefined(args.titleText)}"
    priority="\${ifDefined(args.priority)}"
    ?show-close="\${ifDefined(args.showClose)}"
    ?read="\${ifDefined(args.read)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.actions)}
</ui5-li-notification-group>\`;
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var f,d,m;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  return html\`<ui5-li-notification-group
    ?collapsed="\${ifDefined(args.collapsed)}"
    ?show-counter="\${ifDefined(args.showCounter)}"
    title-text="\${ifDefined(args.titleText)}"
    priority="\${ifDefined(args.priority)}"
    ?show-close="\${ifDefined(args.showClose)}"
    ?read="\${ifDefined(args.read)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.actions)}
</ui5-li-notification-group>\`;
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const E=["Basic","InShellBar"];export{o as Basic,e as InShellBar,E as __namedExportsOrder,I as default};
//# sourceMappingURL=NotificationListGroupItem.stories-376fbb08.js.map
