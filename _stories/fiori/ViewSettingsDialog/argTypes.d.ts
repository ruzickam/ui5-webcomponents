declare const _default: {
    filterItems: {
        control: {
            type: string;
        };
    };
    sortItems: {
        control: {
            type: string;
        };
    };
    setConfirmedSettings: {
        description: string;
        table: {
            category: string;
        };
        UI5CustomData: {
            parameters: {
                name: string;
                type: string;
                optional: boolean;
                parameterProperties: {
                    sortOrder: {
                        name: string;
                        type: string;
                        optional: boolean;
                        description: string;
                    };
                    sortBy: {
                        name: string;
                        type: string;
                        optional: boolean;
                        description: string;
                    };
                    filters: {
                        name: string;
                        type: string;
                        optional: boolean;
                        description: string;
                    };
                };
                description: string;
            }[];
        };
    };
    show: {
        description: string;
        table: {
            category: string;
        };
    };
    cancel: {
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
    confirm: {
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
    filterItems: string;
    sortItems: string;
};
