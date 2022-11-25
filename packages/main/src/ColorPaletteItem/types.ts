/* eslint-disable */
import { HTMLAttributes } from "react";

type ChildrenType = undefined;

type Inputs = {
  value: any;
};
type Outputs = {};
export type ColorPaletteItemProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
>;
