export default {
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
    "walk": {
        "description": "Perform Depth-First-Search walk on the tree and run a callback on each node",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "callback",
                    "type": "function",
                    "optional": false,
                    "description": "function to execute on each node of the tree with 3 arguments: the node, the level and the index"
                }
            ]
        }
    },
    "item-click": {
        "description": "Fired when a tree item is activated.",
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
    "item-delete": {
        "description": "Fired when the Delete button of any tree item is pressed. <br><br> <b>Note:</b> A Delete button is displayed on each item, when the component <code>mode</code> property is set to <code>Delete</code>.",
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
    "item-mouseout": {
        "description": "Fired when the mouse cursor leaves the tree item borders.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "description": "the hovered item."
                }
            ]
        }
    },
    "item-mouseover": {
        "description": "Fired when the mouse cursor enters the tree item borders.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "description": "the hovered item."
                }
            ]
        }
    },
    "item-toggle": {
        "description": "Fired when a tree item is expanded or collapsed. <i>Note:</i> You can call <code>preventDefault()</code> on the event object to suppress the event, if needed. This may be handy for example if you want to dynamically load tree items upon the user expanding a node. Even if you prevented the event's default behavior, you can always manually call <code>toggle()</code> on a tree item.",
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
                },
                {
                    "name": "targetItem",
                    "type": "HTMLElement",
                    "description": "The item triggering the event."
                }
            ]
        }
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents",
    "since": "1.0.0-rc.8"
};
//# sourceMappingURL=argTypes.js.map