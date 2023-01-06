// @ts-ignore
import UploadCollectionComponent from "./UploadCollection.js";
import {Show, For} from "@ui5/webcomponents-base/src/jsx/control-flow-elements";
import {ListComponent} from "@ui5/webcomponents/src/List";
import {IconComponent} from "@ui5/webcomponents/src/Icon";
import {LabelComponent} from "@ui5/webcomponents/src/Label";
/* eslint-disable */
import { HTMLAttributes, ReactElement, ReactNode } from "react";

import { UploadCollectionItemComponent } from "@ui5/webcomponents-fiori/src/UploadCollectionItem";

interface Slots {
    slotHeader?: ReactNode;
}

type ChildrenType = ReactElement<typeof UploadCollectionItemComponent>[];

type Inputs = {
    accessibleName?: string;
    hideDragOverlay?: boolean;
    mode?:
        | "Delete"
        | "MultiSelect"
        | "None"
        | "SingleSelect"
        | "SingleSelectAuto"
        | "SingleSelectBegin"
        | "SingleSelectEnd";
    noDataDescription?: string;
    noDataText?: string;
};
type Outputs = {
    onUi5Drop: (e: CustomEvent<{ dataTransfer: any }>) => void;
    onUi5ItemDelete: (e: CustomEvent<{ item: HTMLElement }>) => void;
    onUi5SelectionChange: (e: CustomEvent<{ selectedItems: Array<any> }>) => void;
};
export type UploadCollectionProps = Partial<
    Inputs &
    Outputs &
    Omit<HTMLAttributes<HTMLElement>, "children"> & { children?: ChildrenType }
> &
    Slots;

declare const context: UploadCollectionComponent;
const s = [{name: 'gela'}, {name: 'gela2'}];

export default function uploadCollectionTemplate(props: UploadCollectionProps) {
    return <div
        className="ui5-uc-root"
        role="region"
        aria-roledescription={context._roleDescription}
        onDrop={context._ondrop}>
        <For each={s} keyFn={(i) => i.name}>
            {(item, index) => <>
                <span style={{color: 'red'}}>{index}{123}</span>. {item.name}
            </>}
        </For>

        <div className={context.classes.content}>
            <ListComponent
                accessible-name={props.accessibleName}
                mode={props.mode}
                onUi5SelectionChange={context._onSelectionChange}
                onUi5ItemDelete={context._onItemDelete}
                slotHeader={props.slotHeader}
            >
                {props.children}
            </ListComponent>
            <Show when={context._showNoData}>
                <div className={context.classes.noFiles}>
                    <div className="icon-container">
                        <IconComponent name="document"/>
                    </div>
                    <LabelComponent
                        className="title"
                        wrappingType="Normal"
                    >
                        {context._noDataText}
                    </LabelComponent>
                    <LabelComponent
                        className="subtitle"
                        wrappingType="Normal">
                        {context._noDataDescription}
                    </LabelComponent>
                </div>
            </Show>
            <Show when={context._showDndOverlay}>
                <div
                    className={context.classes.dndOverlay}
                    onDragEnter={context._ondragenter}
                    onDragLeave={context._ondragleave}
                    onDragOver={context._ondragover}
                >
                    <IconComponent name="upload-to-cloud"></IconComponent>
                    <span className="dnd-overlay-text">{context._dndOverlayText}</span>
                </div>
            </Show>
        </div>
    </div>;
}
