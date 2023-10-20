declare const _default: {
    horizontalAlign: {
        control: string;
        options: string[];
    };
    placementType: {
        control: string;
        options: string[];
    };
    verticalAlign: {
        control: string;
        options: string[];
    };
    footer: {
        control: {
            type: string;
        };
    };
    header: {
        control: {
            type: string;
        };
    };
    showAt: {
        description: string;
        table: {
            category: string;
        };
        UI5CustomData: {
            parameters: ({
                name: string;
                type: string;
                optional: boolean;
                description: string;
                defaultValue?: undefined;
            } | {
                name: string;
                type: string;
                optional: boolean;
                defaultValue: boolean;
                description: string;
            })[];
            returnValue: {
                type: string;
                description: string;
            };
        };
    };
    accessibleRole: {
        control: string;
        options: string[];
    };
    default: {
        control: {
            type: string;
        };
    };
    applyFocus: {
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
    close: {
        description: string;
        table: {
            category: string;
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
    "before-close": {
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
    footer: string;
    header: string;
    default: string;
};
