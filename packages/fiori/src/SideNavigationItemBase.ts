import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import event from "@ui5/webcomponents-base/dist/decorators/event.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import { isSpace, isEnter } from "@ui5/webcomponents-base/dist/Keys.js";
import { getEventMark } from "@ui5/webcomponents-base/dist/MarkedEvents.js";
import type { ITabbable } from "@ui5/webcomponents-base/dist/delegate/ItemNavigation.js";
import SideNavigation from "./SideNavigation.js";

/**
 * @class
 * A class to serve as a foundation
 * for the <code>SideNavigationItem</code> and <code>SideNavigationSubItem</code> classes.
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webc.fiori.SideNavigationItemBase
 * @extends sap.ui.webc.base.UI5Element
 * @abstract
 * @public
 * @implements sap.ui.webc.fiori.SideNavigationItemBase
 * @since 1.19.0
 */

/**
 * Fired when the component is activated either with a
 * click/tap or by using the Enter or Space key.
 *
 * @event sap.ui.webc.fiori.SideNavigationItemBase#click
 * @public
 */
@event("click")
class SideNavigationItemBase extends UI5Element implements ITabbable {
	/**
	 * Defines the text of the item.
	 *
	 * @public
	 * @type {string}
	 * @defaultvalue ""
	 * @name sap.ui.webc.fiori.SideNavigationItemBase.prototype.text
	 */
	@property()
	text!: string;

	/**
	 * Defines the icon of the item.
	 * <br><br>
	 *
	 * The SAP-icons font provides numerous options.
	 * <br>
	 * See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.
	 * @public
	 * @type {string}
	 * @defaultvalue ""
	 * @name sap.ui.webc.fiori.SideNavigationItemBase.prototype.icon
	 */
	@property()
	icon!: string;

	/**
	 * Defines whether the item is selected
	 *
	 * @public
	 * @type {boolean}
	 * @defaultvalue false
	 * @name sap.ui.webc.fiori.SideNavigationItemBase.prototype.selected
	 */
	@property({ type: Boolean })
	selected!: boolean;

	/**
	 * Defines the link target URI. Supports standard hyperlink behavior.
	 * If a JavaScript action should be triggered,
	 * this should not be set, but instead an event handler
	 * for the <code>click</code> event should be registered.
	 *
	 * @public
	 * @type {string}
	 * @defaultvalue ""
	 * @name sap.ui.webc.fiori.SideNavigationItemBase.prototype.href
	 * @since 1.19.0
	 */
	@property()
	href!: string;

	/**
	 * Defines the component target.
	 * <br><br>
	 * <b>Notes:</b>
	 *
	 * <ul>
	 * <li><code>_self</code></li>
	 * <li><code>_top</code></li>
	 * <li><code>_blank</code></li>
	 * <li><code>_parent</code></li>
	 * <li><code>_search</code></li>
	 * </ul>
	 *
	 * <b>This property must only be used when the <code>href</code> property is set.</b>
	 *
	 * @public
	 * @type {string}
	 * @defaultvalue ""
	 * @name sap.ui.webc.fiori.SideNavigationItemBase.prototype.target
	 * @since 1.19.0
	 */
	@property()
	target!: string;

	/**
	 * Defines whether the component is disabled.
	 * A disabled component can't be pressed or
	 * focused, and it is not in the tab chain.
	 *
	 * @type {boolean}
	 * @name sap.ui.webc.main.SideNavigationItemBase.prototype.disabled
	 * @defaultvalue false
	 * @public
	 * @since 1.19.0
	 */
	@property({ type: Boolean })
	disabled!: boolean;

	/**
	 * Defines whether pressing the whole item or only pressing the icon will show/hide the items's sub items(if present).
	 * If set to true, pressing the whole item will toggle the sub items, and it won't fire the <code>click</code> event.
	 * By default, only pressing the arrow icon will toggle the sub items & the click event will be fired if the item is pressed outside of the icon.
	 *
	 * @public
	 * @type {boolean}
	 * @defaultvalue false
	 * @name sap.ui.webc.fiori.SideNavigationItemBase.prototype.wholeItemToggleable
	 * @since 1.0.0-rc.11
	 */
	@property({ type: Boolean })
	wholeItemToggleable!: boolean;

	/**
	 * Defines the tooltip of the component.
	 * @type {string}
	 * @defaultvalue ""
	 * @private
	 * @name sap.ui.webc.fiori.SideNavigationItemBase.prototype.title
	 * @since 1.0.0-rc.16
	 */
	@property()
	title!: string;

	@property({ defaultValue: "-1", noAttribute: true })
	_tabIndex!: string;

	get _tooltip() {
		return this.title || this.text;
	}

	get _href() {
		return this.href || undefined;
	}

	get _target() {
		return this.target || undefined;
	}

	get _selected() {
		return this.selected;
	}

	get classesArray() {
		const classes = [];

		if (this.disabled) {
			classes.push("ui5-sn-item-disabled");
		}

		if (this._selected) {
			classes.push("ui5-sn-item-selected");
		}

		return classes;
	}

	get _classes() {
		return this.classesArray.join(" ");
	}

	get _ariaCurrent() {
		if (!this.selected) {
			return undefined;
		}

		return "page";
	}

	get _effectiveTabIndex() {
		if (this.disabled) {
			return undefined;
		}

		return this._tabIndex;
	}

	get sideNavigation() {
		let parentElement = this.parentElement;

		while (parentElement) {
			if (parentElement instanceof SideNavigation) {
				return parentElement;
			}

			parentElement = parentElement.parentElement;
		}
	}

	getDomRef() {
		return this.sideNavigation?.shadowRoot!.querySelector(`#${this._id}`) as HTMLElement;
	}

	_onkeydown(e: KeyboardEvent) {
		if (isSpace(e)) {
			e.preventDefault();
		}

		if (isEnter(e)) {
			this._activate();
		}
	}

	_onkeyup(e: KeyboardEvent) {
		if (isSpace(e)) {
			this._activate();
		}
	}

	_onmousedown(e: MouseEvent) {
		if (getEventMark(e) === "button") {
			return;
		}

		this._activate();
	}

	_onclick() {
		this._activate();
	}

	get isFixedItem() {
		return true;
	}

	_onfocusin(e: FocusEvent) {
		if (e.target !== this.getFocusDomRef()) {
			return;
		}

		e.stopPropagation();

		this.sideNavigation?.focusItem(this);
	}

	_activate() {
		this.sideNavigation?._selectItem(this);
	}
}

export default SideNavigationItemBase;
