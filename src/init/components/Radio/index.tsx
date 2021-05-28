import { FC, memo, FormEvent } from "react";

interface IRadioViewProps {
  label: string;
  name: string;
  checked: boolean;
  onChange(e: FormEvent<HTMLInputElement>): void;
}

const RadioView: FC<IRadioViewProps> = (props) => {
  return (
    <>
      <input
        type="radio"
        name={props.name}
        value={props.name}
        checked={props.checked}
        onChange={props.onChange}
      />
      <label>{props.label}</label>
    </>
  );
};

export default memo(RadioView);
