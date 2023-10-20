export default {
    "close": {
        "description": "Closes the dialog and the scan session.",
        "table": {
            "category": "methods"
        }
    },
    "show": {
        "description": "Shows a dialog with the camera videostream. Starts a scan session.",
        "table": {
            "category": "methods"
        }
    },
    "scan-error": {
        "description": "Fires when the scan fails with error.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "message",
                    "type": "string",
                    "description": "the error message"
                }
            ]
        }
    },
    "scan-success": {
        "description": "Fires when the scan is completed successfuuly.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "text",
                    "type": "string",
                    "description": "the scan result as string"
                },
                {
                    "name": "rawBytes",
                    "type": "Object",
                    "description": "the scan result as a Uint8Array"
                }
            ]
        }
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents-fiori",
    "since": "1.0.0-rc.15"
};
//# sourceMappingURL=argTypes.js.map