/* eslint-disable */
import UI5Element from "../UI5Element.js";

export default function query(child: string | UI5Element | (new (...args: any[]) => UI5Element)): PropertyDecorator {
	return (el, propertyKey): void => {
		const childSelector = typeof child === "string" ? child : `[${(child as any).getMetadata().getTag()}]`;
		Object.defineProperty(el, propertyKey, {
			get(): any {
				return this.shadowRoot.querySelector(childSelector);
			},
		});
	};
}
