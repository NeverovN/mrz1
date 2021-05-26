import React, { FC, FormEvent, memo } from "react";

interface ITextInputViewProps {
  value?: string;
  onChange?(e: FormEvent<HTMLInputElement>): void;
  size?: number;
  id?: string;
  placeHolder?: string;
}

const TextInputView: FC<ITextInputViewProps> = (props) => {
  return (
    <input
      type="text"
      size={props.size}
      value={props.value}
      onChange={props.onChange}
      id={props.id}
      placeholder={props.placeHolder}
    />
  );
};

export default memo(TextInputView);
