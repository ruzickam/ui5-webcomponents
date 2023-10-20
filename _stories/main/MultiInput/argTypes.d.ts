declare const _default: {
    tokens: {
        control: {
            type: string;
        };
    };
    "token-delete": {
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
    previewItem: {
        control: {
            type: boolean;
        };
    };
    type: {
        control: string;
        options: string[];
    };
    valueState: {
        control: string;
        options: string[];
    };
    default: {
        control: {
            type: string;
        };
    };
    icon: {
        control: {
            type: string;
        };
    };
    valueStateMessage: {
        control: {
            type: string;
        };
    };
    openPicker: {
        description: string;
        table: {
            category: string;
        };
    };
    "suggestion-item-preview": {
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
    "suggestion-item-select": {
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
    tokens: string;
    default: string;
    icon: string;
    valueStateMessage: string;
};
