/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { WizardStepComponent } from "@ui5/webcomponents-fiori/src/WizardStep";

interface Slots {}

type ChildrenType = ReactElement<typeof WizardStepComponent>[];

type Inputs = {};
type Outputs = {
  onUi5StepChange: (
    e: CustomEvent<{
      step: HTMLElement;
      previousStep: HTMLElement;
      changeWithClick: boolean;
    }>
  ) => void;
};
export type WizardProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
