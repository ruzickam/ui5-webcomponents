export default {
    "files": {
        "control": {
            "type": false
        }
    },
    "valueState": {
        "control": "select",
        "options": [
            "Error",
            "Information",
            "None",
            "Success",
            "Warning"
        ]
    },
    "default": {
        "control": {
            "type": "text"
        }
    },
    "valueStateMessage": {
        "control": {
            "type": "text"
        }
    },
    "change": {
        "description": "Event is fired when the value of the file path has been changed. <b>Note:</b> Keep in mind that because of the HTML input element of type file, the event is also fired in Chrome browser when the Cancel button of the uploads window is pressed.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "files",
                    "type": "FileList",
                    "description": "The current files."
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