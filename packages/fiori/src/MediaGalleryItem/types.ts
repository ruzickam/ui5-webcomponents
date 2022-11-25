/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

interface Slots {
  slotThumbnail?: ReactNode;
}

type ChildrenType = ReactNode;

type Inputs = {
  disabled?: boolean;
  layout?: "Square" | "Wide";
  selected?: boolean;
};
type Outputs = {};
export type MediaGalleryItemProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
