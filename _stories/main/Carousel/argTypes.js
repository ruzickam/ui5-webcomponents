export default {
    "arrowsPlacement": {
        "control": "select",
        "options": [
            "Content",
            "Navigation"
        ]
    },
    "backgroundDesign": {
        "control": "select",
        "options": [
            "Solid",
            "Translucent",
            "Transparent"
        ]
    },
    "pageIndicatorBackgroundDesign": {
        "control": "select",
        "options": [
            "Solid",
            "Translucent",
            "Transparent"
        ]
    },
    "pageIndicatorBorderDesign": {
        "control": "select",
        "options": [
            "Transparent",
            "Solid"
        ]
    },
    "pageIndicatorStyle": {
        "control": "select",
        "options": [
            "Default",
            "Numeric"
        ]
    },
    "default": {
        "control": {
            "type": "text"
        }
    },
    "navigateTo": {
        "description": "Changes the currently displayed page.",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "itemIndex",
                    "type": "Integer",
                    "optional": false,
                    "description": "The index of the target page"
                }
            ]
        }
    },
    "navigate": {
        "description": "Fired whenever the page changes due to user interaction, when the user clicks on the navigation arrows or while resizing, based on the <code>items-per-page-l</code>, <code>items-per-page-m</code> and <code>items-per-page-s</code> properties.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "selectedIndex",
                    "type": "Integer",
                    "description": "the current selected index"
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