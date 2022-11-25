/* eslint-disable */
import { HTMLAttributes } from "react";

type ChildrenType = undefined;

type Inputs = {
  accessibleName?: string;
  accessibleRole?: string;
  interactive?: boolean;
  name?: string;
  showTooltip?: boolean;
};
type Outputs = {};
export type IconProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
>;
