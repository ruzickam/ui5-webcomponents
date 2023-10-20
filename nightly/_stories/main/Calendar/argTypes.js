export default {
    "selectionMode": {
        "control": "select",
        "options": [
            "Multiple",
            "Range",
            "Single"
        ]
    },
    "default": {
        "control": {
            "type": "text"
        }
    },
    "selected-dates-change": {
        "description": "Fired when the selected dates change. <b>Note:</b> If you call <code>preventDefault()</code> for this event, the component will not create instances of <code>ui5-date</code> for the newly selected dates. In that case you should do this manually.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "values",
                    "type": "Array",
                    "description": "The selected dates"
                },
                {
                    "name": "dates",
                    "type": "Array",
                    "description": "The selected dates as UTC timestamps"
                }
            ]
        }
    },
    "primaryCalendarType": {
        "control": "select",
        "options": [
            "Buddhist",
            "Gregorian",
            "Islamic",
            "Japanese",
            "Persian"
        ]
    },
    "secondaryCalendarType": {
        "control": "select",
        "options": [
            "Buddhist",
            "Gregorian",
            "Islamic",
            "Japanese",
            "Persian"
        ]
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents",
    "since": "1.0.0-rc.11"
};
//# sourceMappingURL=argTypes.js.map