declare const _default: {
    selectedOption: {
        control: {
            type: boolean;
        };
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
    label: {
        control: {
            type: string;
        };
    };
    valueStateMessage: {
        control: {
            type: string;
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
    "live-change": {
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
    default: string;
    label: string;
    valueStateMessage: string;
};
