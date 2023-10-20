export default {
    "state": {
        "control": "select",
        "options": [
            "Error",
            "Information",
            "None",
            "Success",
            "Warning"
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
    "show": {
        "description": "Shows the dialog.",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "preventInitialFocus",
                    "type": "boolean",
                    "optional": true,
                    "defaultValue": false,
                    "description": "Prevents applying the focus inside the popup"
                }
            ],
            "returnValue": {
                "type": "Promise",
                "description": "Resolves when the dialog is open"
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
    "package": "@ui5/webcomponents"
};
//# sourceMappingURL=argTypes.js.map