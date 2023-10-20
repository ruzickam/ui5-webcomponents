import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import argTypes, { componentInfo } from "./argTypes.js";
import { DocsPage } from "../../../.storybook/docs";
const component = "ui5-color-picker";
export default {
    title: "Main/ColorPicker",
    component: "ColorPicker",
    parameters: {
        docs: {
            page: DocsPage({ ...componentInfo, component })
        },
    },
    argTypes,
};
const Template = (args) => html `<ui5-color-picker
	color="${ifDefined(args.color)}"
>Picker</ui5-color-picker>`;
export const Basic = Template.bind({});
Basic.args = {
    color: "rgba(220, 208, 255, 1)",
};
//# sourceMappingURL=ColorPicker.stories.js.map