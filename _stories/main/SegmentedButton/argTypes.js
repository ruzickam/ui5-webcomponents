export default {
    "mode": {
        "control": "select",
        "options": [
            "MultiSelect",
            "SingleSelect"
        ]
    },
    "selectedItem": {
        "control": {
            "type": false
        }
    },
    "selectedItems": {
        "control": {
            "type": false
        }
    },
    "default": {
        "control": {
            "type": "text"
        }
    },
    "selection-change": {
        "description": "Fired when the selected item changes.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "selectedItem",
                    "type": "HTMLElement",
                    "description": "the pressed item. Note: deprecated since 1.14.0 and will be removed in the next major release, use the <code>selectedItems</code> parameter instead."
                },
                {
                    "name": "selectedItems",
                    "type": "HTMLElement[]",
                    "description": "an array of selected items. Note: available since 1.14.0."
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