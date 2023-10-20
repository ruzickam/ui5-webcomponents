import { IProcessor } from "./processors";
export interface IHTMLTransformation {
    transform(html: string): string;
}
/**
 * This class is responsible for transforming the HTML code of the story.
 * Used by the HTML addon.
 */
export declare class HTMLTransformation implements IHTMLTransformation {
    private processors;
    constructor(processors: IProcessor[]);
    transform(html: string): string;
    private walk;
    private convertToString;
    private convertToDOM;
}
export declare const htmlTransformation: HTMLTransformation;
