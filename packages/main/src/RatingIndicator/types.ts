/* eslint-disable */
import { HTMLAttributes } from "react";

type ChildrenType = undefined;

type Inputs = {
  accessibleName: string;
  disabled?: boolean;
  max?: any;
  readonly?: boolean;
  value?: any;
};
type Outputs = {
  onUi5Change: (e: CustomEvent<void>) => void;
};
export type RatingIndicatorProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
>;
