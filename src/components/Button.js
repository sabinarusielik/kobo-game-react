import React from "react";
import PropTypes from "prop-types";

export default function Button({ children, className, clickHandler }) {
  return (
    <button type="button" className={className} onClick={clickHandler}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  className: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
