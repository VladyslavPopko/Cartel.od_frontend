import React from "react";

const Button = (props) => {
  const {text, className } = props;

  return (
    <div>
      <button className={className} type="button">{text}</button>
    </div>
  );
};

export default Button;
