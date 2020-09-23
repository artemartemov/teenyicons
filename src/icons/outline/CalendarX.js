import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCalendarX = forwardRef(
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
          d="M3.5 0v5m8-5v5m-6 1.5l4 4m-4 0l4-4m-8-4h12a1 1 0 011 1v10a1 1 0 01-1 1h-12a1 1 0 01-1-1v-10a1 1 0 011-1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgCalendarX.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCalendarX.displayName = "CalendarX";

export default SvgCalendarX;
