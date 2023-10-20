declare const _default: {
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
};
export type StoryArgsSlots = {
    default: string;
    icon: string;
    valueStateMessage: string;
};
