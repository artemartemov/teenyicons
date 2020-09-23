import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDoubleCaretUp = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 15 15"
        fill="none"
        ref={ref}
        {...props}
      >
        <path
          d="M14 8L7.5 1 1 8m13 5.5l-6.5-7-6.5 7"
          stroke={color}
          strokeLinecap="square"
        />
      </svg>
    );
  }
);

SvgDoubleCaretUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDoubleCaretUp.displayName = "DoubleCaretUp";

export default SvgDoubleCaretUp;
