import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";

import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import event from "@ui5/webcomponents-base/dist/decorators/event.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import { ITabbable } from "@ui5/webcomponents-base/dist/delegate/ItemNavigation.js";

import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import template from "./generated/templates/InlineHelpTemplate.lit.js";
import styles from "./generated/themes/InlineHelp.css.js";
import Icon from "./Icon.js";
import "@ui5/webcomponents-icons/dist/question-mark.js";

@customElement({
	tag: "ui5-inline-help",
	renderer: litRender,
	template,
	styles,
	dependencies: [Icon],
})
export class InlineHelp extends UI5Element implements ITabbable {
	@property({ noAttribute: true })
	_tabIndex!: string;

	@property()
	icon = "question-mark";

	@property()
	text!: string;

	@slot()
	trigger?: HTMLElement;

	get tabindex() {
		return this._tabIndex || "0";
	}
}

InlineHelp.define();

export default InlineHelp;
