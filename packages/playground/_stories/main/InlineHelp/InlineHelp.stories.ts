import {DocsPage} from "../../../.storybook/docs";

import argTypes, {componentInfo} from "./argTypes";
import type {StoryArgsSlots} from "./argTypes";
import type {UI5StoryArgs} from "../../../types.js";

// @ts-ignore
import type InlineHelp from "@ui5/webcomponents/dist/InlineHelp.js";
import {Meta} from "@storybook/web-components";
import {html} from "lit-html";
import {unsafeHTML} from "lit-html/directives/unsafe-html.js";
import {ifDefined} from "lit-html/directives/if-defined.js";

const component = "ui5-inline-help";

export default {
	title: "Main/InlineHelp",
	component,
	parameters: {
		docs: {
			page: DocsPage({...componentInfo, component})
		},
	},
	argTypes,
} as Meta<InlineHelp>;

const Template: UI5StoryArgs<InlineHelp, StoryArgsSlots> = (args) => {
	return html`
      <ui5-inline-help
              placement-type="${ifDefined(args.placementType)}"
              icon="${ifDefined(args.icon)}"
              text="${ifDefined(args.text)}">
          ${unsafeHTML(args.default)}
          ${args.content ? html`
              <slot slot="content">
                  ${unsafeHTML(args.content)}
              </slot>` : ""}
      </ui5-inline-help>
	`
};

export const Basic = Template.bind({});
Basic.args = {
	text: 'Basic example text',
}

export const WithContent = Template.bind({});
WithContent.args = {
	text: undefined,
	content: 'With content example content',
}

export const WithPlacementType = Template.bind({});
WithPlacementType.args = {
	text: 'With placement type example text',
	placementType: 'Left',
}

export const WithIcon = Template.bind({});
WithIcon.args = {
	text: 'With icon example text',
	icon: 'employee',
}

export const WithCustomTrigger = Template.bind({});
WithCustomTrigger.args = {
	text: 'With custom trigger example text',
	default: '<span>With custom trigger example trigger</span>',
}
