/* eslint-disable */
import { HTMLAttributes } from "react";

type ChildrenType = undefined;

type Inputs = {};
type Outputs = {};
export type DateTimePickerProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
>;
