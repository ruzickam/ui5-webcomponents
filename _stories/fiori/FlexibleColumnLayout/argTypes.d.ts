declare const _default: {
    columnLayout: {
        control: {
            type: boolean;
        };
    };
    endColumnVisible: {
        control: {
            type: boolean;
        };
    };
    layout: {
        control: string;
        options: string[];
    };
    midColumnVisible: {
        control: {
            type: boolean;
        };
    };
    startColumnVisible: {
        control: {
            type: boolean;
        };
    };
    visibleColumns: {
        control: {
            type: boolean;
        };
    };
    endColumn: {
        control: {
            type: string;
        };
    };
    midColumn: {
        control: {
            type: string;
        };
    };
    startColumn: {
        control: {
            type: string;
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
    endColumn: string;
    midColumn: string;
    startColumn: string;
};
