/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

interface Slots {}

type ChildrenType = ReactNode;

type Inputs = {
  level?: "H1" | "H2" | "H3" | "H4" | "H5" | "H6";
  wrappingType?: "None" | "Normal";
};
type Outputs = {};
export type TitleProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
