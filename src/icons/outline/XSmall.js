import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgXSmall = forwardRef(
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
        <path d="M4.5 4.5l6 6m-6 0l6-6" stroke={color} />
      </svg>
    );
  }
);

SvgXSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgXSmall.displayName = "XSmall";

export default SvgXSmall;
