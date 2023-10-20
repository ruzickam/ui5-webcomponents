export default {
    "columnLayout": {
        "control": {
            "type": false
        }
    },
    "endColumnVisible": {
        "control": {
            "type": false
        }
    },
    "layout": {
        "control": "select",
        "options": [
            "EndColumnFullScreen",
            "MidColumnFullScreen",
            "OneColumn",
            "ThreeColumnsEndExpanded",
            "ThreeColumnsMidExpanded",
            "ThreeColumnsMidExpandedEndHidden",
            "ThreeColumnsStartExpandedEndHidden",
            "TwoColumnsMidExpanded",
            "TwoColumnsStartExpanded"
        ]
    },
    "midColumnVisible": {
        "control": {
            "type": false
        }
    },
    "startColumnVisible": {
        "control": {
            "type": false
        }
    },
    "visibleColumns": {
        "control": {
            "type": false
        }
    },
    "endColumn": {
        "control": {
            "type": "text"
        }
    },
    "midColumn": {
        "control": {
            "type": "text"
        }
    },
    "startColumn": {
        "control": {
            "type": "text"
        }
    },
    "layout-change": {
        "description": "Fired when the layout changes via user interaction by clicking the arrows or by changing the component size due to resizing.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "layout",
                    "type": "sap.ui.webc.fiori.types.FCLLayout",
                    "description": "The current layout"
                },
                {
                    "name": "columnLayout",
                    "type": "array",
                    "description": "The effective column layout, f.e [67%, 33%, 0]"
                },
                {
                    "name": "startColumnVisible",
                    "type": "boolean",
                    "description": "Indicates if the start column is currently visible"
                },
                {
                    "name": "midColumnVisible",
                    "type": "boolean",
                    "description": "Indicates if the middle column is currently visible"
                },
                {
                    "name": "endColumnVisible",
                    "type": "boolean",
                    "description": "Indicates if the end column is currently visible"
                },
                {
                    "name": "arrowsUsed",
                    "type": "boolean",
                    "description": "Indicates if the layout is changed via the arrows"
                },
                {
                    "name": "resize",
                    "type": "boolean",
                    "description": "Indicates if the layout is changed via resizing"
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