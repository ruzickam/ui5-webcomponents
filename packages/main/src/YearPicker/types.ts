/* eslint-disable */
import { HTMLAttributes } from "react";

type ChildrenType = undefined;

type Inputs = {
  selectedDates: Array<any>;
};
type Outputs = {
  onUi5Change: (e: CustomEvent<void>) => void;
  onUi5Navigate: (e: CustomEvent<void>) => void;
};
export type YearPickerProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
>;
