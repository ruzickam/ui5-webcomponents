/* eslint-disable */
import { HTMLAttributes } from "react";

type ChildrenType = undefined;

type Inputs = {
  cyclic?: boolean;
  disabled?: boolean;
  expanded?: boolean;
  label?: string;
  value?: string;
};
type Outputs = {};
export type WheelSliderProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
>;
