declare const _default: {
    colorScheme: {
        control: {
            type: boolean;
        };
    };
    hiddenItems: {
        control: {
            type: boolean;
        };
    };
    type: {
        control: string;
        options: string[];
    };
    default: {
        control: {
            type: string;
        };
    };
    overflowButton: {
        control: {
            type: string;
        };
    };
    click: {
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
    overflowButton: string;
};
