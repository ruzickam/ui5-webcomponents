/* eslint-disable */
import { HTMLAttributes } from "react";

type ChildrenType = undefined;

type Inputs = {};
type Outputs = {
  onUi5ScanError: (e: CustomEvent<{ message: string }>) => void;
  onUi5ScanSuccess: (
    e: CustomEvent<{ text: string; rawBytes: Record<string, any> }>
  ) => void;
};
export type BarcodeScannerDialogProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
>;
