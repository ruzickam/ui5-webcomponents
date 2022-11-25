/* eslint-disable */
import { HTMLAttributes } from "react";

type ChildrenType = undefined;

type Inputs = {
  accessibleName: string;
  disabled?: boolean;
  labelInterval?: any;
  max?: any;
  min?: any;
  showTickmarks?: boolean;
  showTooltip?: boolean;
  step?: any;
};
type Outputs = {
  onUi5Change: (e: CustomEvent<void>) => void;
  onUi5Input: (e: CustomEvent<void>) => void;
};
export type SliderBaseProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
>;
