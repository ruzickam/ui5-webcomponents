/* eslint-disable */
import { HTMLAttributes } from "react";

type ChildrenType = undefined;

type Inputs = {
  dateValue: any;
};
type Outputs = {};
export type TimePickerProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
>;
