import { combineParameters } from "@storybook/preview-api";
import { enhanceArgTypesDescriptions } from "./enhancers/enhanceArgTypesDescriptions";
export const enhanceArgTypes = (context) => {
    const { component, argTypes: userArgTypes, parameters: { docs = {} }, } = context;
    const { extractArgTypes } = docs;
    // from custom-elements.json
    const extractedArgTypes = extractArgTypes && component ? extractArgTypes(component) : {};
    // combine with user defined argTypes
    const withExtractedTypes = extractedArgTypes
        ? combineParameters(extractedArgTypes, userArgTypes)
        : userArgTypes;
    // enhance descriptions
    enhanceArgTypesDescriptions(withExtractedTypes);
    return withExtractedTypes;
};
//# sourceMappingURL=enhanceArgTypes.js.map