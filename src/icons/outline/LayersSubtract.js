import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLayersSubtract = forwardRef(
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
          d="M10.5 10.5v3a1 1 0 01-1 1h-8a1 1 0 01-1-1v-8a1 1 0 011-1h3m0-3v8a1 1 0 001 1h8a1 1 0 001-1v-8a1 1 0 00-1-1h-8a1 1 0 00-1 1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgLayersSubtract.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLayersSubtract.displayName = "LayersSubtract";

export default SvgLayersSubtract;
