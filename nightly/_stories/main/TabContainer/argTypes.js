export default {
    "allItems": {
        "control": {
            "type": false
        }
    },
    "contentBackgroundDesign": {
        "control": "select",
        "options": [
            "Solid",
            "Translucent",
            "Transparent"
        ]
    },
    "headerBackgroundDesign": {
        "control": "select",
        "options": [
            "Solid",
            "Translucent",
            "Transparent"
        ]
    },
    "tabLayout": {
        "control": "select",
        "options": [
            "Inline",
            "Standard"
        ]
    },
    "tabsOverflowMode": {
        "control": "select",
        "options": [
            "End",
            "StartAndEnd"
        ]
    },
    "default": {
        "control": {
            "type": "text"
        }
    },
    "overflowButton": {
        "control": {
            "type": "text"
        }
    },
    "startOverflowButton": {
        "control": {
            "type": "text"
        }
    },
    "tab-select": {
        "description": "Fired when a tab is selected.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "tab",
                    "type": "HTMLElement",
                    "description": "The selected <code>tab</code>."
                },
                {
                    "name": "tabIndex",
                    "type": "Integer",
                    "description": "The selected <code>tab</code> index in the flattened array of all tabs and their subTabs, provided by the <code>allItems</code> getter."
                }
            ]
        }
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents"
};
//# sourceMappingURL=argTypes.js.map