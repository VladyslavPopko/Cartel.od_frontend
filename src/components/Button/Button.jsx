import React from "react";

const Button = (props) => {
  const { text, className, href } = props;

  return (
    <div>
      <a href={href}>
        <button className={className} type="button">
          {text}
        </button>
      </a>
    </div>
  );
};

export default Button;
