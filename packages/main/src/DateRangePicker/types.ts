/* eslint-disable */
import { HTMLAttributes } from "react";

type ChildrenType = undefined;

type Inputs = {
  dateValue: any;
  dateValueUtc: any;
  delimiter: string;
  endDateValue: any;
  startDateValue: any;
};
type Outputs = {};
export type DateRangePickerProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
>;
