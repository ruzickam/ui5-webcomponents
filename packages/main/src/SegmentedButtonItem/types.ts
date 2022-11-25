/* eslint-disable */
import { HTMLAttributes } from "react";

type ChildrenType = undefined;

type Inputs = {
  design?:
    | "Attention"
    | "Default"
    | "Emphasized"
    | "Negative"
    | "Positive"
    | "Transparent";
  iconEnd?: boolean;
  submits?: boolean;
};
type Outputs = {};
export type SegmentedButtonItemProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
>;
