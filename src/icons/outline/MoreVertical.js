import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMoreVertical = forwardRef(
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
          d="M7.5 3a.5.5 0 110-1 .5.5 0 010 1zM7.5 8a.5.5 0 110-1 .5.5 0 010 1zM7.5 13a.5.5 0 110-1 .5.5 0 010 1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgMoreVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMoreVertical.displayName = "MoreVertical";

export default SvgMoreVertical;
