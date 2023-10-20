export default {
    "sideContentFallDown": {
        "control": "select",
        "options": [
            "BelowL",
            "BelowM",
            "BelowXL",
            "OnMinimumWidth"
        ]
    },
    "sideContentPosition": {
        "control": "select",
        "options": [
            "End",
            "Start"
        ]
    },
    "sideContentVisibility": {
        "control": "select",
        "options": [
            "AlwaysShow",
            "NeverShow",
            "ShowAboveL",
            "ShowAboveM",
            "ShowAboveS"
        ]
    },
    "default": {
        "control": {
            "type": "text"
        }
    },
    "sideContent": {
        "control": {
            "type": "text"
        }
    },
    "toggleContents": {
        "description": "Toggles visibility of main and side contents on S screen size (mobile device).",
        "table": {
            "category": "methods"
        }
    },
    "layout-change": {
        "description": "Fires when the current breakpoint has been changed.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "currentBreakpoint",
                    "type": "string",
                    "description": "the current breakpoint."
                },
                {
                    "name": "previousBreakpoint",
                    "type": "string",
                    "description": "the breakpoint that was active before change to current breakpoint."
                },
                {
                    "name": "mainContentVisible",
                    "type": "boolean",
                    "description": "visibility of the main content."
                },
                {
                    "name": "sideContentVisible",
                    "type": "boolean",
                    "description": "visibility of the side content."
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