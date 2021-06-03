import React, { FC, memo } from "react";

// styles
import "./styles.css";

// utils
import { createKey } from "../../../common/utils/createKey";

interface IButtonViewProps {
  onClick(): void;
  title: string;
}

const ButtonView: FC<IButtonViewProps> = (props) => {
  return (
    <button
      type="button"
      className="Button"
      onClick={props.onClick}
      key={createKey()}
    >
      {props.title}
    </button>
  );
};

export default memo(ButtonView);
