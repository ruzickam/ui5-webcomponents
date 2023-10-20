export default {
    "growing": {
        "control": "select",
        "options": [
            "Button",
            "None",
            "Scroll"
        ]
    },
    "mode": {
        "control": "select",
        "options": [
            "MultiSelect",
            "None",
            "SingleSelect"
        ]
    },
    "columns": {
        "control": {
            "type": "text"
        }
    },
    "default": {
        "control": {
            "type": "text"
        }
    },
    "popin-change": {
        "description": "Fired when <code>ui5-table-column</code> is shown as a pop-in instead of hiding it.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "poppedColumns",
                    "type": "Array",
                    "description": "popped-in columns."
                }
            ]
        }
    },
    "row-click": {
        "description": "Fired when a row in <code>Active</code> mode is clicked or <code>Enter</code> key is pressed.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "row",
                    "type": "HTMLElement",
                    "description": "the activated row."
                }
            ]
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
                    "name": "selectedRows",
                    "type": "Array",
                    "description": "An array of the selected rows."
                },
                {
                    "name": "previouslySelectedRows",
                    "type": "Array",
                    "description": "An array of the previously selected rows."
                }
            ]
        }
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents"
};
//# sourceMappingURL=argTypes.js.map