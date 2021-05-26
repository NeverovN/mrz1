import React, { FC, memo } from "react";

// styles
import "./styles.css";

interface IButtonViewProps {
  onClick?(): void;
  title: string;
}

const ButtonView: FC<IButtonViewProps> = (props) => {
  return (
    <button
      type="button"
      className="Button"
      onClick={props.onClick}
      key={Math.random().toString()}
    >
      {props.title}
    </button>
  );
};

export default memo(ButtonView);
