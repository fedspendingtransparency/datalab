import React from "react"
import Tooltip from "./tooltip"

export default function TooltipElement(props) {

  function onPopoverOpen(event, id, ref) {
    if (ref && ref.current) {
      ref.current.handlePopoverOpen(event, id)
    }
  }

  function onPopoverClose(e, ref) {
    if (ref && ref.current) {
      ref.current.handlePopoverClose()
    }
  }

  function isOpen(id, ref) {
    if (ref && ref.current) {
      ref.current.isOpen(id)
    }
  }

  function tooltipRef() {
    return React.createRef();
  }

  const CustomTag = props.element;

  const CustomTooltip = React.forwardRef((props, ref) => (
    <>
      <CustomTag
        aria-owns={isOpen(props.id, ref) ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onKeyDown={(e) => onPopoverOpen(e, props.id, ref)}
        onMouseEnter={(e) => onPopoverOpen(e, props.id, ref)}
        onMouseLeave={(e) => onPopoverClose(e, ref)}>
        {props.title}
      </CustomTag>

      <Tooltip ref={ref} title={props.title} id={props.id} rows={props.rows} />
    </>));

  return(<CustomTooltip ref={tooltipRef()} id={props.id} title={props.title} rows={props.rows} />);
}