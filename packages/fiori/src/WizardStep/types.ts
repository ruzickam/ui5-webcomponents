/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

interface Slots {}

type ChildrenType = ReactNode;

type Inputs = {
  branching?: boolean;
  disabled?: boolean;
  icon?: string;
  selected?: boolean;
  subtitleText?: string;
  titleText?: string;
};
type Outputs = {};
export type WizardStepProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
