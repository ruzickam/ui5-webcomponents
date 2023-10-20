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
            "Delete",
            "MultiSelect",
            "None",
            "SingleSelect",
            "SingleSelectAuto",
            "SingleSelectBegin",
            "SingleSelectEnd"
        ]
    },
    "separators": {
        "control": "select",
        "options": [
            "All",
            "Inner",
            "None"
        ]
    },
    "default": {
        "control": {
            "type": "text"
        }
    },
    "header": {
        "control": {
            "type": "text"
        }
    },
    "item-click": {
        "description": "Fired when an item is activated, unless the item's <code>type</code> property is set to <code>Inactive</code>.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "description": "The clicked item."
                }
            ]
        }
    },
    "item-close": {
        "description": "Fired when the <code>Close</code> button of any item is clicked <br><br> <b>Note:</b> This event is only applicable to list items that can be closed (such as notification list items), not to be confused with <code>item-delete</code>.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "description": "the item about to be closed."
                }
            ]
        }
    },
    "item-delete": {
        "description": "Fired when the Delete button of any item is pressed. <br><br> <b>Note:</b> A Delete button is displayed on each item, when the component <code>mode</code> property is set to <code>Delete</code>.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "description": "the deleted item."
                }
            ]
        }
    },
    "item-toggle": {
        "description": "Fired when the <code>Toggle</code> button of any item is clicked. <br><br> <b>Note:</b> This event is only applicable to list items that can be toggled (such as notification group list items).",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "description": "the toggled item."
                }
            ]
        }
    },
    "selection-change": {
        "description": "Fired when selection is changed by user interaction in <code>SingleSelect</code>, <code>SingleSelectBegin</code>, <code>SingleSelectEnd</code> and <code>MultiSelect</code> modes.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "selectedItems",
                    "type": "Array",
                    "description": "An array of the selected items."
                },
                {
                    "name": "previouslySelectedItems",
                    "type": "Array",
                    "description": "An array of the previously selected items."
                }
            ]
        }
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents"
};
//# sourceMappingURL=argTypes.js.map