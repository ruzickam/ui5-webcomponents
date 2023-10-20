export default {
    "horizontalAlign": {
        "control": "select",
        "options": [
            "Center",
            "Left",
            "Right",
            "Stretch"
        ]
    },
    "placementType": {
        "control": "select",
        "options": [
            "Bottom",
            "Left",
            "Right",
            "Top"
        ]
    },
    "verticalAlign": {
        "control": "select",
        "options": [
            "Bottom",
            "Center",
            "Stretch",
            "Top"
        ]
    },
    "footer": {
        "control": {
            "type": "text"
        }
    },
    "header": {
        "control": {
            "type": "text"
        }
    },
    "showAt": {
        "description": "Shows the popover.",
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
                },
                {
                    "name": "preventInitialFocus",
                    "type": "boolean",
                    "optional": true,
                    "defaultValue": false,
                    "description": "prevents applying the focus inside the popover"
                }
            ],
            "returnValue": {
                "type": "Promise",
                "description": "Resolved when the popover is open"
            }
        }
    },
    "accessibleRole": {
        "control": "select",
        "options": [
            "AlertDialog",
            "Dialog",
            "None"
        ]
    },
    "default": {
        "control": {
            "type": "text"
        }
    },
    "applyFocus": {
        "description": "Focuses the element denoted by <code>initialFocus</code>, if provided, or the first focusable element otherwise.",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "returnValue": {
                "type": "Promise",
                "description": "Promise that resolves when the focus is applied"
            }
        }
    },
    "close": {
        "description": "Closes the popup.",
        "table": {
            "category": "methods"
        }
    },
    "isOpen": {
        "description": "Tells if the component is opened",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "returnValue": {
                "type": "boolean"
            }
        }
    },
    "before-close": {
        "description": "Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. <b>This event does not bubble.</b>",
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
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents",
    "since": "1.0.0-rc.6"
};
//# sourceMappingURL=argTypes.js.map