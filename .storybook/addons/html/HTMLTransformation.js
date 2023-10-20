import { AttributeProcessor } from "./processors";
/**
 * This class is responsible for transforming the HTML code of the story.
 * Used by the HTML addon.
 */
export class HTMLTransformation {
    constructor(processors) {
        this.processors = processors;
        this.processors = processors;
    }
    transform(html) {
        const dom = this.convertToDOM(html);
        this.walk(dom, (node) => {
            this.processors.forEach((processor) => {
                processor.process(node);
            });
        });
        const transformed = this.convertToString(dom);
        return transformed;
    }
    walk(node, callback) {
        callback(node);
        node = node.firstElementChild;
        while (node) {
            this.walk(node, callback);
            node = node.nextElementSibling;
        }
    }
    convertToString(dom) {
        const serializer = new XMLSerializer();
        return serializer.serializeToString(dom);
    }
    convertToDOM(html) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        return doc.body;
    }
}
const processors = [new AttributeProcessor()];
export const htmlTransformation = new HTMLTransformation(processors);
//# sourceMappingURL=HTMLTransformation.js.map