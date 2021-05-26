import { FC, FormEvent, memo } from "react";

// components
import HeaderView from "../Header";
import FormView from "../Form";
import TextInputView from "../TextInput";
import ButtonView from "../Button";

// styles
import "./styles.css";

interface IInitialViewProps {
  textInputSize: number;

  pairCount: string;
  setPairCount(e: FormEvent<HTMLInputElement>): void;

  tactTime: string;
  setTactTime(e: FormEvent<HTMLInputElement>): void;

  onClick(): void;
}

const InitialView: FC<IInitialViewProps> = (props) => {
  return (
    <>
      <HeaderView />
      <div>
        <text>Введите количество пар</text>
        <br />
        <FormView>
          <TextInputView
            size={props.textInputSize}
            value={props.pairCount}
            onChange={props.setPairCount}
            placeHolder="pair count"
          />
          <br />
          <TextInputView
            size={props.textInputSize}
            value={props.tactTime}
            onChange={props.setTactTime}
            placeHolder="tact time"
          />
          <br />
          <ButtonView onClick={props.onClick} title="Submit" />
        </FormView>
        <br />
      </div>
    </>
  );
};

export default memo(InitialView);
