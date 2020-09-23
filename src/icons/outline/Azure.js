import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAzure = forwardRef(
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
          d="M3.5 4.5l-3 7h3l4-11-4 4zM14.5 13.5l-5-11-2 5 3 4-6 2h10z"
          stroke={color}
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SvgAzure.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAzure.displayName = "Azure";

export default SvgAzure;
