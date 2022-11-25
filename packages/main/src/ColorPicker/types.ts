/* eslint-disable */
import { HTMLAttributes } from "react";

type ChildrenType = undefined;

type Inputs = {
  color: any;
};
type Outputs = {
  onUi5Change: (e: CustomEvent<void>) => void;
};
export type ColorPickerProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
>;
