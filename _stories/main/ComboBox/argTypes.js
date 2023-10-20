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
        "description": "Fired when selection is changed by user interaction",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "item",
                    "type": "sap.ui.webc.main.IComboBoxItem",
                    "description": "item to be selected."
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