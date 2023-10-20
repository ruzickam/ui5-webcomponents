export default {
    "dateValue": {
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
    "valueStateMessage": {
        "control": {
            "type": "text"
        }
    },
    "closePicker": {
        "description": "Closes the picker",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "returnValue": {
                "type": "Promise",
                "description": "Resolves when the picker is closed"
            }
        }
    },
    "formatValue": {
        "description": "Formats a Java Script date object into a string representing a locale date and time according to the <code>formatPattern</code> property of the TimePicker instance",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "date",
                    "type": "Date",
                    "optional": false,
                    "description": "A Java Script date object to be formatted as string"
                }
            ],
            "returnValue": {
                "type": "string"
            }
        }
    },
    "isOpen": {
        "description": "Checks if the picker is open",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "returnValue": {
                "type": "boolean"
            }
        }
    },
    "isValid": {
        "description": "Checks if a value is valid against the current <code>formatPattern</code> value.\n\n<br><br> <b>Note:</b> an empty string is considered as valid value.",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "value",
                    "type": "string",
                    "optional": false,
                    "description": "The value to be tested against the current date format"
                }
            ],
            "returnValue": {
                "type": "boolean"
            }
        }
    },
    "openPicker": {
        "description": "Opens the picker.",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "returnValue": {
                "type": "Promise",
                "description": "Resolves when the picker is open"
            }
        }
    },
    "change": {
        "description": "Fired when the input operation has finished by clicking the \"OK\" button or when the text in the input field has changed and the focus leaves the input field.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "value",
                    "type": "string",
                    "description": "The submitted value."
                },
                {
                    "name": "valid",
                    "type": "boolean",
                    "description": "Indicator if the value is in correct format pattern and in valid range."
                }
            ]
        }
    },
    "input": {
        "description": "Fired when the value of the <code>ui5-time-picker</code> is changed at each key stroke.",
        "table": {
            "category": "events"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "value",
                    "type": "string",
                    "description": "The current value."
                },
                {
                    "name": "valid",
                    "type": "boolean",
                    "description": "Indicator if the value is in correct format pattern and in valid range."
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