import React from "react";

const MyButton = ({ text, type, onClick }) => {

    /** 버튼 타입의 유무 */
  const btnType = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <button
      className={["MyButton", `MyButton_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

/** 기본 타입 */
MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
