export default {
    "selectedOption": {
        "control": {
            "type": false
        }
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
    "label": {
        "control": {
            "type": "text"
        }
    },
    "valueStateMessage": {
        "control": {
            "type": "text"
        }
    },
    "change": {
        "description": "Fired when the selected option changes.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "selectedOption",
                    "type": "HTMLElement",
                    "description": "the selected option."
                }
            ]
        }
    },
    "live-change": {
        "description": "Fired when the user navigates through the options, but the selection is not finalized, or when pressing the ESC key to revert the current selection.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "selectedOption",
                    "type": "HTMLElement",
                    "description": "the selected option."
                }
            ]
        }
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents",
    "since": "0.8.0"
};
//# sourceMappingURL=argTypes.js.map