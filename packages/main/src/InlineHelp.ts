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

	/**
	 * Every odd member of the passed list will be opener event and every even will be closer
	 */
	@property()
	set triggers(val: string | string[]) {
		console.log(val);
		const providedEventNames = Array.isArray(val) ? val : val.replace(/ /g, "").split(",");
		this._clearTriggers();
		this._triggers = providedEventNames;
		this._initializeTriggers();
	}

	get triggers() {
		return this._triggers;
	}

	@slot()
	private trigger?: Array<HTMLElement>;

	@query(Popover)
	_popover?: Popover;

	@query(".ui5-popover-trigger")
	_popoverTrigger?: HTMLDivElement;

	_onComponentStateFinalized() {
		console.log(this._state);
	}
	private _triggers: string[] = ["mouseenter", "mouseleave"];

	get _trigger(): HTMLElement | undefined {
		return this.trigger?.[0];
	}

	get tabindex() {
		return this._tabIndex || "0";
	}

	private _clearTriggers() {
		this._triggers.forEach((triggerEventName, index) => {
			const callback = index % 2 === 0 ? this.open : this.close;
			this._popoverTrigger!.removeEventListener(triggerEventName, callback);
		});
	}

	private _initializeTriggers() {
		this._triggers.forEach((triggerEventName, index) => {
			const callback = index % 2 === 0 ? this.open : this.close;
			this._popoverTrigger!.addEventListener(triggerEventName, callback);
		});
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
		console.log(this._triggers);
		this._initializeTriggers();
	}

	onExitDOM() {
		this._clearTriggers();
	}
}

InlineHelp.define();

export default InlineHelp;
