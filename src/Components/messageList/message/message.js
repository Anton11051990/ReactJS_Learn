import React, { memo } from "react";
import PropTypes from "prop-types";

export const Message = memo(({ message }) => {
  const { author, value } = message;
  const currDate = new Date().toLocaleTimeString();

  return (
    <div className="li">
      <div className="text">{value}</div>
      <div className="author">{author}</div>
      <p className="timer">{currDate}</p>
    </div>
  );
});

Message.propTypes = {
  message: PropTypes.shape({
    author: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  test: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
};
