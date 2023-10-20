export default {
    "layout": {
        "control": "select",
        "options": [
            "Auto",
            "Horizontal",
            "Vertical"
        ]
    },
    "menuHorizontalAlign": {
        "control": "select",
        "options": [
            "Left",
            "Right"
        ]
    },
    "menuVerticalAlign": {
        "control": "select",
        "options": [
            "Bottom",
            "Top"
        ]
    },
    "default": {
        "control": {
            "type": "text"
        }
    },
    "selection-change": {
        "description": "Fired when selection is changed by user interaction.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "description": "the selected item."
                }
            ]
        }
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents-fiori",
    "since": "1.1.0"
};
//# sourceMappingURL=argTypes.js.map