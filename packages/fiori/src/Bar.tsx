import Bar from "./Bar";

export default function bar(context: Bar) {
    return <div
        className={"ui5-bar-root"}
        aria-label={context.accInfo.label}
        role="toolbar"
        part="bar"
    >
        <div className="ui5-bar-content-container ui5-bar-startcontent-container">
            <slot name="startContent"></slot>
        </div>
        <div className="ui5-bar-content-container ui5-bar-midcontent-container">
            <slot></slot>
        </div>
        <div className="ui5-bar-content-container ui5-bar-endcontent-container">
            <slot name="endContent"></slot>
        </div>
    </div>

}
