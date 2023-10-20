export default {
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
    "drop": {
        "description": "Fired when an element is dropped inside the drag and drop overlay. <br><br> <b>Note:</b> The <code>drop</code> event is fired only when elements are dropped within the drag and drop overlay and ignored for the other parts of the <code>ui5-upload-collection</code>.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "dataTransfer",
                    "type": "DataTransfer",
                    "description": "The <code>drop</code> event operation data."
                }
            ]
        }
    },
    "item-delete": {
        "description": "Fired when the delete button of any item is pressed.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "description": "The <code>ui5-upload-collection-item</code> which was deleted."
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
                    "name": "selectedItems",
                    "type": "Array",
                    "description": "An array of the selected items."
                }
            ]
        }
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents-fiori",
    "since": "1.0.0-rc.7"
};
//# sourceMappingURL=argTypes.js.map