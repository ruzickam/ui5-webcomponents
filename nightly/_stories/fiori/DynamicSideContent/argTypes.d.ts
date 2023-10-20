declare const _default: {
    sideContentFallDown: {
        control: string;
        options: string[];
    };
    sideContentPosition: {
        control: string;
        options: string[];
    };
    sideContentVisibility: {
        control: string;
        options: string[];
    };
    default: {
        control: {
            type: string;
        };
    };
    sideContent: {
        control: {
            type: string;
        };
    };
    toggleContents: {
        description: string;
        table: {
            category: string;
        };
    };
    "layout-change": {
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
    sideContent: string;
};
