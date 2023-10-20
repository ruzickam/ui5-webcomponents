export default {
    "filter": {
        "control": "select",
        "options": [
            "Contains",
            "None",
            "StartsWith",
            "StartsWithPerTerm"
        ]
    },
    "open": {
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
    "selection-change": {
        "description": "Fired when selection is changed by user interaction in <code>SingleSelect</code> and <code>MultiSelect</code> modes.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "items",
                    "type": "Array",
                    "description": "an array of the selected items."
                }
            ]
        }
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents",
    "since": "0.11.0"
};
//# sourceMappingURL=argTypes.js.map