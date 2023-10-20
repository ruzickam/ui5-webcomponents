export default {
    "design": {
        "control": "select",
        "options": [
            "Default",
            "Emphasized",
            "Subtle"
        ]
    },
    "wrappingType": {
        "control": "select",
        "options": [
            "None",
            "Normal"
        ]
    },
    "default": {
        "control": {
            "type": "text"
        }
    },
    "click": {
        "description": "Fired when the component is triggered either with a mouse/tap or by using the Enter key.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
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
    "package": "@ui5/webcomponents"
};
//# sourceMappingURL=argTypes.js.map