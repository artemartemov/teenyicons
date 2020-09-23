import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTriangle = forwardRef(
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
          d="M7.5 1.5l-7 12h14l-7-12z"
          stroke={color}
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SvgTriangle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTriangle.displayName = "Triangle";

export default SvgTriangle;
