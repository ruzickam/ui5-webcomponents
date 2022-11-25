/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Slot } from "@ui5/webcomponents-base/src/jsx";

import { MediaGalleryItemComponent } from "@ui5/webcomponents-fiori/src/MediaGalleryItem";

interface Slots {}

type ChildrenType = ReactElement<typeof MediaGalleryItemComponent>[];

type Inputs = {
  interactiveDisplayArea?: boolean;
  layout?: "Auto" | "Horizontal" | "Vertical";
  menuHorizontalAlign?: "Left" | "Right";
  menuVerticalAlign?: "Bottom" | "Top";
  showAllThumbnails?: boolean;
};
type Outputs = {
  onUi5DisplayAreaClick: (e: CustomEvent<void>) => void;
  onUi5OverflowClick: (e: CustomEvent<void>) => void;
  onUi5SelectionChange: (e: CustomEvent<{ item: HTMLElement }>) => void;
};
export type MediaGalleryProps = Partial<
  Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
  Slots;
