export default {
    "tokens": {
        "control": {
            "type": "text"
        }
    },
    "token-delete": {
        "description": "Fired when a token is about to be deleted.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "token",
                    "type": "HTMLElement",
                    "description": "deleted token."
                }
            ]
        }
    },
    "previewItem": {
        "control": {
            "type": false
        }
    },
    "type": {
        "control": "select",
        "options": [
            "Email",
            "Number",
            "Password",
            "Tel",
            "Text",
            "URL"
        ]
    },
    "valueState": {
        "control": "select",
        "options": [
            "Error",
            "Information",
            "None",
            "Success",
            "Warning"
        ]
    },
    "default": {
        "control": {
            "type": "text"
        }
    },
    "icon": {
        "control": {
            "type": "text"
        }
    },
    "valueStateMessage": {
        "control": {
            "type": "text"
        }
    },
    "openPicker": {
        "description": "Manually opens the suggestions popover, assuming suggestions are enabled. Items must be preloaded for it to open.",
        "table": {
            "category": "methods"
        }
    },
    "suggestion-item-preview": {
        "description": "Fired when the user navigates to a suggestion item via the ARROW keys, as a preview, before the final selection.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "description": "The previewed suggestion item."
                },
                {
                    "name": "targetRef",
                    "type": "HTMLElement",
                    "description": "The DOM ref of the suggestion item."
                }
            ]
        }
    },
    "suggestion-item-select": {
        "description": "Fired when a suggestion item, that is displayed in the suggestion popup, is selected.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "description": "The selected item."
                }
            ]
        }
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents",
    "since": "1.0.0-rc.9"
};
//# sourceMappingURL=argTypes.js.map