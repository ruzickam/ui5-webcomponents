import { html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { ifDefined } from "lit/directives/if-defined.js";
import argTypes, { componentInfo } from "./argTypes.js";
import { DocsPage } from "../../../.storybook/docs";
const component = "ui5-segmented-button";
export default {
    title: "Main/SegmentedButton",
    component: "SegmentedButton",
    subcomponents: { 'SegmentedButtonItem': 'SegmentedButtonItem' },
    parameters: {
        docs: {
            page: DocsPage({ ...componentInfo, component })
        },
    },
    argTypes,
};
const Template = (args) => html `<ui5-segmented-button
	accessible-name="${ifDefined(args.accessibleName)}"
	mode="${ifDefined(args.mode)}"
>
	${unsafeHTML(args.default)}
</ui5-segmented-button>`;
export const Basic = Template.bind({});
Basic.args = {
    default: `<ui5-segmented-button-item>Map</ui5-segmented-button-item>
<ui5-segmented-button-item pressed="">Satellite</ui5-segmented-button-item>
<ui5-segmented-button-item>Terrain</ui5-segmented-button-item>`,
    accessibleName: "Geographic location",
};
export const WithIcons = Template.bind({});
WithIcons.args = {
    default: `<ui5-segmented-button-item icon="employee" pressed=""></ui5-segmented-button-item>
<ui5-segmented-button-item icon="menu"></ui5-segmented-button-item>
<ui5-segmented-button-item icon="factory"></ui5-segmented-button-item>`,
};
export const WithMoreItems = Template.bind({});
WithMoreItems.storyName = "More Segmented Button Items";
WithMoreItems.args = {
    default: `<ui5-segmented-button-item>Item</ui5-segmented-button-item>
<ui5-segmented-button-item pressed="">Pressed SegmentedButtonItem With Bigger Text</ui5-segmented-button-item>
<ui5-segmented-button-item>Item</ui5-segmented-button-item>
<ui5-segmented-button-item>SegmentedButtonItem</ui5-segmented-button-item>
<ui5-segmented-button-item>Press me</ui5-segmented-button-item>`,
};
//# sourceMappingURL=SegmentedButton.stories.js.map