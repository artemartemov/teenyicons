import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgClipboardTick = forwardRef(
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
          d="M11 1.5h2.5v12a1 1 0 01-1 1h-10a1 1 0 01-1-1v-12H4m1 7l2 2 3.5-4m-6-6h6v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgClipboardTick.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgClipboardTick.displayName = "ClipboardTick";

export default SvgClipboardTick;
