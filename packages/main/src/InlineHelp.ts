import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";

import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import { ITabbable } from "@ui5/webcomponents-base/dist/delegate/ItemNavigation.js";

import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import query from "@ui5/webcomponents-base/dist/decorators/query.js";
import template from "./generated/templates/InlineHelpTemplate.lit.js";
import styles from "./generated/themes/InlineHelp.css.js";
import Icon from "./Icon.js";
import Popover from "./Popover.js";
import "@ui5/webcomponents-icons/dist/question-mark.js";

@customElement({
	tag: "ui5-inline-help",
	renderer: litRender,
	template,
	styles,
	dependencies: [Icon, Popover],
})
export class InlineHelp extends UI5Element implements ITabbable {
	@property({ noAttribute: true })
	_tabIndex!: string;

	@property()
	icon = "question-mark";

	@property()
	text!: string;

	@slot()
	private trigger?: Array<HTMLElement>;

	@query(Popover)
	_popover?: Popover;

	@query(".popover-trigger")
	_popoverTrigger?: HTMLDivElement;

	get _trigger(): HTMLElement | undefined {
		return this.trigger?.[0];
	}

	get tabindex() {
		return this._tabIndex || "0";
	}

	open = () => {
		this._popover!.showAt(this._popoverTrigger!);
	}

	close = () => {
		this._popover!.close();
	}

	toggle = () => {
		// Eslint rules do not allow me to do it more elegantly.
		if (this._popover!.isOpen()) {
			this.close();
		} else {
			this.open();
		}
	}

	onAfterRendering() {
		this._popoverTrigger!.addEventListener("mouseenter", this.open);
		this._popoverTrigger!.addEventListener("mouseleave", this.close);
	}

	onExitDOM() {
		this._popoverTrigger!.removeEventListener("mouseenter", this.open);
		this._popoverTrigger!.removeEventListener("mouseleave", this.close);
	}
}

InlineHelp.define();

export default InlineHelp;
