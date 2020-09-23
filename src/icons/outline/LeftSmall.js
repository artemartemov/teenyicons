import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLeftSmall = forwardRef(
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
        <path d="M8.5 4.5l-3 3 3 3" stroke={color} strokeLinecap="square" />
      </svg>
    );
  }
);

SvgLeftSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLeftSmall.displayName = "LeftSmall";

export default SvgLeftSmall;
