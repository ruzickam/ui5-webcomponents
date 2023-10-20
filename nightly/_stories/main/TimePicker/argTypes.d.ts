declare const _default: {
    dateValue: {
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
        UI5CustomData: {
            returnValue: {
                type: string;
                description: string;
            };
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
};
export default _default;
export declare const componentInfo: {
    package: string;
    since: string;
};
export type StoryArgsSlots = {
    valueStateMessage: string;
};
