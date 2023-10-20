export default {
    "default": {
        "control": {
            "type": "text"
        }
    },
    "openPopover": {
        "description": "Shows the ColorPalettePopover. <b>Note:</b> The method is deprecated and will be removed in future, use <code>showAt</code> instead.",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "opener",
                    "type": "HTMLElement",
                    "optional": false,
                    "description": "the element that the popover is shown at"
                }
            ]
        }
    },
    "showAt": {
        "description": "Shows the ColorPalettePopover.",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "opener",
                    "type": "HTMLElement",
                    "optional": false,
                    "description": "the element that the popover is shown at"
                }
            ]
        }
    },
    "item-click": {
        "description": "Fired when the user selects a color.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "color",
                    "type": "string",
                    "description": "the selected color"
                }
            ]
        }
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents",
    "since": "1.0.0-rc.16"
};
//# sourceMappingURL=argTypes.js.map