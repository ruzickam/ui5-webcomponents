export default {
    "dateValue": {
        "control": {
            "type": false
        }
    },
    "dateValueUTC": {
        "control": {
            "type": false
        }
    },
    "endDateValue": {
        "control": {
            "type": false
        }
    },
    "startDateValue": {
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
        "description": "Closes the picker.",
        "table": {
            "category": "methods"
        }
    },
    "formatValue": {
        "description": "Formats a Java Script date object into a string representing a locale date according to the <code>formatPattern</code> property of the DatePicker instance",
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
                "type": "string",
                "description": "The date as string"
            }
        }
    },
    "isInValidRange": {
        "description": "Checks if a date is between the minimum and maximum date.",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "value",
                    "type": "string",
                    "optional": true,
                    "defaultValue": "\"\"",
                    "description": "A value to be checked"
                }
            ],
            "returnValue": {
                "type": "boolean"
            }
        }
    },
    "isOpen": {
        "description": "Checks if the picker is open.",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "returnValue": {
                "type": "boolean",
                "description": "true if the picker is open, false otherwise"
            }
        }
    },
    "isValid": {
        "description": "Checks if a value is valid against the current date format of the DatePicker.",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "value",
                    "type": "string",
                    "optional": true,
                    "defaultValue": "\"\"",
                    "description": "A value to be tested against the current date format"
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
        "description": "Fired when the input operation has finished by pressing Enter or on focusout.",
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
        "description": "Fired when the value of the component is changed at each key stroke.",
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
    "since": "1.0.0-rc.8"
};
//# sourceMappingURL=argTypes.js.map