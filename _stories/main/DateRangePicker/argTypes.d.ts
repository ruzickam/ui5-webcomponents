declare const _default: {
    dateValue: {
        control: {
            type: boolean;
        };
    };
    dateValueUTC: {
        control: {
            type: boolean;
        };
    };
    endDateValue: {
        control: {
            type: boolean;
        };
    };
    startDateValue: {
        control: {
            type: boolean;
        };
    };
    valueState: {
        control: string;
        options: string[];
    };
    valueStateMessage: {
        control: {
            type: string;
        };
    };
    closePicker: {
        description: string;
        table: {
            category: string;
        };
    };
    formatValue: {
        description: string;
        table: {
            category: string;
        };
        UI5CustomData: {
            parameters: {
                name: string;
                type: string;
                optional: boolean;
                description: string;
            }[];
            returnValue: {
                type: string;
                description: string;
            };
        };
    };
    isInValidRange: {
        description: string;
        table: {
            category: string;
        };
        UI5CustomData: {
            parameters: {
                name: string;
                type: string;
                optional: boolean;
                defaultValue: string;
                description: string;
            }[];
            returnValue: {
                type: string;
            };
        };
    };
    isOpen: {
        description: string;
        table: {
            category: string;
        };
        UI5CustomData: {
            returnValue: {
                type: string;
                description: string;
            };
        };
    };
    isValid: {
        description: string;
        table: {
            category: string;
        };
        UI5CustomData: {
            parameters: {
                name: string;
                type: string;
                optional: boolean;
                defaultValue: string;
                description: string;
            }[];
            returnValue: {
                type: string;
            };
        };
    };
    openPicker: {
        description: string;
        table: {
            category: string;
        };
        UI5CustomData: {
            returnValue: {
                type: string;
                description: string;
            };
        };
    };
    change: {
        description: string;
        table: {
            category: string;
        };
        UI5CustomData: {
            parameters: {
                name: string;
                type: string;
                description: string;
            }[];
        };
    };
    input: {
        description: string;
        table: {
            category: string;
        };
        UI5CustomData: {
            parameters: {
                name: string;
                type: string;
                description: string;
            }[];
        };
    };
    primaryCalendarType: {
        control: string;
        options: string[];
    };
    secondaryCalendarType: {
        control: string;
        options: string[];
    };
};
export default _default;
export declare const componentInfo: {
    package: string;
    since: string;
};
export type StoryArgsSlots = {
    valueStateMessage: string;
};
