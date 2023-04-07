import UI5Element, { ChangeInfo } from "@ui5/webcomponents-base/dist/UI5Element.js";

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
import PopoverPlacementType from "./types/PopoverPlacementType.js";

interface BaseInlineHelpTrigger {
	isOpenAction: boolean;
	eventName: string;
}

interface InlineHelpOpenTrigger extends BaseInlineHelpTrigger {
	isOpenAction: true;
	preventInitialFocus?: boolean;
}

type InlineHelpTrigger = InlineHelpOpenTrigger | BaseInlineHelpTrigger;

type Handler = (event: Event) => void;

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

	@property()
	placementType?: `${PopoverPlacementType}`;

	/**
	 * Every odd member of the passed list will be opener event and every even will be closer
	 */
	@property({ noAttribute: true })
	triggers: string | string[] | InlineHelpTrigger[] = "mouseenter,mouseleave,focusin,focusout";

	@slot({ type: Node })
	private content?: Array<Node>;

	@slot({ "default": true, type: Node })
	private trigger?: Array<Node>;

	@query(Popover)
	_popover?: Popover;

	@query(".ui5-popover-trigger")
	_popoverTrigger?: HTMLDivElement;

	_onComponentStateFinalized = () => {
	}

	get _trigger(): Node | undefined {
		return this.trigger?.[0];
	}

	get tabindex() {
		return this._tabIndex || "0";
	}

	private eventHandlersMap = new WeakMap<InlineHelpTrigger, Handler>();

	private _triggers?: InlineHelpTrigger[];

	constructor() {
		super();
	}

	private _clearTriggers() {
		this._triggers?.forEach(trigger => {
			const handler = this.eventHandlersMap.get(trigger) as Handler;
			this._popoverTrigger!.removeEventListener(trigger.eventName, handler);
		});
	}

	private _initializeTriggers() {
		const normalizedTriggers = Array.isArray(this.triggers) ? this.triggers : this.triggers.replace(/ /g, "").split(",");
		this._triggers = normalizedTriggers.map((triggerEventName, index) => {
			if (typeof triggerEventName === "string") {
				return {
					eventName: triggerEventName,
					isOpenAction: index % 2 === 0,
				};
			}

			return triggerEventName;
		});

		this._triggers?.forEach(trigger => {
			const handler = trigger.isOpenAction ? this.open(trigger as InlineHelpOpenTrigger) : this.close();
			this.eventHandlersMap.set(trigger, handler);
			this._popoverTrigger!.addEventListener(trigger.eventName, handler);
		});
	}

	private syncTriggers(): void {
		this._clearTriggers();
		this._initializeTriggers();
	}

	open = (options: Omit<InlineHelpOpenTrigger, "eventName" | "isOpenAction">) => {
		return () => this._popover!.showAt(this._popoverTrigger!, !!options?.preventInitialFocus);
	}

	close = (): () => void => {
		return () => this._popover!.close();
	}

	onInvalidation(changes: ChangeInfo) {
		if ((changes.type === "slot" && changes.name === "trigger") || (changes.type === "property" && changes.name === "triggers")) {
			this.syncTriggers();
		}
	}

	onEnterDOM() {
		this.syncTriggers();
	}

	onExitDOM() {
		this._clearTriggers();
	}
}

InlineHelp.define();

export default InlineHelp;
