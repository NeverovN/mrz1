import { FC, FormEvent, memo } from "react";

interface ITextInputViewProps {
  value: string;
  onChange(e: FormEvent<HTMLInputElement>): void;
  size: number;
  placeHolder: string;
}

// common reusable text input component
const TextInputView: FC<ITextInputViewProps> = (props) => {
  return (
    <input
      type="text"
      size={props.size}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeHolder}
    />
  );
};

export default memo(TextInputView);
