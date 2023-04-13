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

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 * Inline help is used to display help text in a popover, often inline with headers, body text and form labels.
 * It also uses the popover component internally and supports some of its functionality.
 *
 * <h3>Usage</h3>
 * The most common use case is to display a short text in a popover when the user hovers over or focuses on an element.
 * By default, the trigger element for a inline help is the icon <code>question-mark</code>, but it can be changed to any other element.
 * Also, the events, which trigger popover opening and closing, can be changed as well as the content which is displayed in the popover.
 *
 * <h3>Responsive Behavior</h3>
 * The default slot will be centered in the available space between the startContent and the endContent areas,
 * therefore it might not always be centered in the entire bar.
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/InlineHelp.js";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webc.main.InlineHelp
 * @extends sap.ui.webc.base.UI5Element
 * @tagname ui5-inline-help
 * @since 1.13.0-rc.1
 * @public
 */
@customElement({
	tag: "ui5-inline-help",
	renderer: litRender,
	template,
	styles,
	dependencies: [Icon, Popover],
})
class InlineHelp extends UI5Element implements ITabbable {
	@property({ noAttribute: true })
	_tabIndex!: string;

	/**
	 * Defines the name of the UI5 Icon, that will be displayed.
	 * <br>
	 * <b>Note:</b> If default slot is provided, the property will be ignored.
	 * <br>
	 * <b>Note:</b> You should import the desired icon first, then use its name as "icon".
	 * <br><br>
	 * import "@ui5/webcomponents-icons/dist/{icon_name}.js"
	 * <br>
	 * <pre>&lt;ui5-avatar icon="employee"></pre>
	 * <br>
	 *
	 * See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.
	 * @type {string}
	 * @name sap.ui.webc.main.InlineHelp.prototype.icon
	 * @defaultvalue "question-mark"
	 * @public
	 */
	@property({ defaultValue: "question-mark" })
	icon!: string;

	/**
	 * Defines the text which will be displayed in the popover.
	 * <br>
	 * <b>Note:</b> If <code>content</code> slot is provided, the property will be ignored.
	 *
	 * @type {string}
	 * @name sap.ui.webc.main.InlineHelp.prototype.text
	 * @defaultvalue ""
	 * @public
	 */
	@property()
	text?: string;

	/**
	 * Defines the placement of the popover.
	 * <br><br>
	 * Available options are:
	 * <ul>
	 * <li><code>Left</code></li>
	 * <li><code>Right</code></li>
	 * <li><code>Top</code></li>
	 * <li><code>Bottom</code></li>
	 * </ul>
	 *
	 * @type {sap.ui.webc.main.types.PopoverPlacementType}
	 * @name sap.ui.webc.main.InlineHelp.prototype.placementType
	 * @defaultvalue "Right"
	 * @public
	 * */
	@property()
	placementType?: `${PopoverPlacementType}`;

	/**
	 * Defines the events, which will trigger the opening and closing of the popover.
	 * Every odd member of the passed list will be opener event and every even will be closer.
	 * Events can be passed as array of string or Object with two properties, one for the name of
	 * the event(eventName) and whether the item is an open action(<code>isOpenAction</code> property).
	 * if <code>isOpenAction</code> is set to true, then you can also specify
	 * <code>preventInitialFocus: boolean</code> property to configure popover open behavior.
	 * <br>Events also can be passed as comma separated string.
	 * <br>
	 * <b>Note:</b> If the list contains only one member, it will be opener event.
	 * <br>
	 * <b>Note:</b> If the list contains more than two members, the first one will be opener and the last one will be closer.
	 * <br>
	 * @type {string[] | string | object[]}
	 * @name sap.ui.webc.main.InlineHelp.prototype.triggers
	 * @defaultvalue "mouseenter,mouseleave,focusin,focusout"
	 * @public
	 */
	@property({ noAttribute: true })
	triggers: string | string[] | InlineHelpTrigger[] = "mouseenter,mouseleave,focusin,focusout";

	/**
	 * Defines the content of the popover.
	 * <br>
	 * @slot content
	 * @type {Node}
	 * @name sap.ui.webc.main.InlineHelp.prototype.content
	 * @public
	 */
	@slot({ type: Node })
	content?: Array<Node>;

	/**
	 * Defines the trigger element of the popover.
	 * @slot default
	 * @type {Node}
	 * @name sap.ui.webc.main.InlineHelp.prototype.default
	 * @public
	 */
	@slot({ "default": true, type: HTMLElement })
	trigger?: Array<Node>;

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
