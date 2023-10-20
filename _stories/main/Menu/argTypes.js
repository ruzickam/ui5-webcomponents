export default {
    "default": {
        "control": {
            "type": "text"
        }
    },
    "close": {
        "description": "Closes the Menu.",
        "table": {
            "category": "methods"
        }
    },
    "showAt": {
        "description": "Shows the Menu near the opener element.",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "opener",
                    "type": "HTMLElement",
                    "optional": false,
                    "description": "the element that the popover is shown at"
                }
            ]
        }
    },
    "before-close": {
        "description": "Fired before the menu is closed. This event can be cancelled, which will prevent the menu from closing. <b>This event does not bubble.</b>",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "escPressed",
                    "type": "boolean",
                    "description": "Indicates that <code>ESC</code> key has triggered the event."
                }
            ]
        }
    },
    "before-open": {
        "description": "Fired before the menu is opened. This event can be cancelled, which will prevent the menu from opening. <b>This event does not bubble.</b> <b>Note:</b> Since 1.14.0 the event is also fired before a sub-menu opens.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "description": "The <code>ui5-menu-item</code> that triggers opening of the sub-menu or undefined when fired upon root menu opening. <b>Note:</b> available since 1.14.0."
                }
            ]
        }
    },
    "item-click": {
        "description": "Fired when an item is being clicked. <b>Note:</b> Since 1.17.0 the event is preventable, allowing the menu to remain open after an item is pressed.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "description": "The currently clicked menu item."
                },
                {
                    "name": "text",
                    "type": "string",
                    "description": "The text of the currently clicked menu item."
                }
            ]
        }
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents",
    "since": "1.3.0"
};
//# sourceMappingURL=argTypes.js.map