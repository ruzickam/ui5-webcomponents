export default {
    "design": {
        "control": "select",
        "options": [
            "NoCurrentPage",
            "Standard"
        ]
    },
    "separatorStyle": {
        "control": "select",
        "options": [
            "BackSlash",
            "DoubleBackSlash",
            "DoubleGreaterThan",
            "DoubleSlash",
            "GreaterThan",
            "Slash"
        ]
    },
    "default": {
        "control": {
            "type": "text"
        }
    },
    "item-click": {
        "description": "Fires when a <code>BreadcrumbsItem</code> is clicked. <b>Note:</b> You can prevent browser location change by calling <code>event.preventDefault()</code>.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "item",
                    "type": "HTMLElement",
                    "description": "The clicked item."
                },
                {
                    "name": "altKey",
                    "type": "Boolean",
                    "description": "Returns whether the \"ALT\" key was pressed when the event was triggered."
                },
                {
                    "name": "ctrlKey",
                    "type": "Boolean",
                    "description": "Returns whether the \"CTRL\" key was pressed when the event was triggered."
                },
                {
                    "name": "metaKey",
                    "type": "Boolean",
                    "description": "Returns whether the \"META\" key was pressed when the event was triggered."
                },
                {
                    "name": "shiftKey",
                    "type": "Boolean",
                    "description": "Returns whether the \"SHIFT\" key was pressed when the event was triggered."
                }
            ]
        }
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents",
    "since": "1.0.0-rc.15"
};
//# sourceMappingURL=argTypes.js.map