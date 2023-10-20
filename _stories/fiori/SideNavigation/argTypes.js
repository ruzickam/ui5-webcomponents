export default {
    "default": {
        "control": {
            "type": "text"
        }
    },
    "fixedItems": {
        "control": {
            "type": "text"
        }
    },
    "header": {
        "control": {
            "type": "text"
        }
    },
    "selection-change": {
        "description": "Fired when the selection has changed via user interaction",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "item",
                    "type": "sap.ui.webc.fiori.ISideNavigationItem|sap.ui.webc.fiori.ISideNavigationSubItem",
                    "description": "the clicked item."
                }
            ]
        }
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents-fiori",
    "since": "1.0.0-rc.8"
};
//# sourceMappingURL=argTypes.js.map