declare const _default: {
    filter: {
        control: string;
        options: string[];
    };
    open: {
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
    "selection-change": {
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
    icon: string;
    valueStateMessage: string;
};
