export default {
    "contentLayout": {
        "control": "select",
        "options": [
            "MultipleSteps",
            "SingleStep"
        ]
    },
    "default": {
        "control": {
            "type": "text"
        }
    },
    "step-change": {
        "description": "Fired when the step is changed by user interaction - either with scrolling, or by clicking on the steps within the component header.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "step",
                    "type": "sap.ui.webc.fiori.IWizardStep",
                    "description": "The new step."
                },
                {
                    "name": "previousStep",
                    "type": "sap.ui.webc.fiori.IWizardStep",
                    "description": "The previous step."
                },
                {
                    "name": "changeWithClick",
                    "type": "boolean",
                    "description": "The step change occurs due to user's click or 'Enter'/'Space' key press on step within the navigation."
                }
            ]
        }
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents-fiori",
    "since": "1.0.0-rc.10"
};
//# sourceMappingURL=argTypes.js.map