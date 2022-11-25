/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

interface Slots {}

type ChildrenType = ReactNode;

type Inputs = {
  accessibleName?: string;
  additionalText: string;
  additionalTextState?:
    | "Error"
    | "Information"
    | "None"
    | "Success"
    | "Warning";
  description: string;
  icon: string;
  iconEnd?: boolean;
  image: string;
};
type Outputs = {};
export type StandardListItemProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
