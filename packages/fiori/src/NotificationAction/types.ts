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
  disabled?: boolean;
  icon?: string;
  text?: string;
};
type Outputs = {};
export type NotificationActionProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
>;
