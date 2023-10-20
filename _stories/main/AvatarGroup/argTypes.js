export default {
    "colorScheme": {
        "control": {
            "type": false
        }
    },
    "hiddenItems": {
        "control": {
            "type": false
        }
    },
    "type": {
        "control": "select",
        "options": [
            "Group",
            "Individual"
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
    "click": {
        "description": "Fired when the component is activated either with a click/tap or by using the Enter or Space key.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "targetRef",
                    "type": "HTMLElement",
                    "description": "The DOM ref of the clicked item."
                },
                {
                    "name": "overflowButtonClicked",
                    "type": "boolean",
                    "description": "indicates if the overflow button is clicked"
                }
            ]
        }
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents",
    "since": "1.0.0-rc.11"
};
//# sourceMappingURL=argTypes.js.map