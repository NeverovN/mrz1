import { FC, FormEvent, memo } from "react";

// components
import HeaderView from "../Header/index";
import FormView from "../Form/index";
import TextInputView from "../../../common/components/TextInput/index";
import ButtonView from "../../../common/components/Button/index";

// containers
import RadioContainer from "../../containers/Radio/index";

// styles
import "./styles.css";

interface IInitialViewProps {
  textInputSize: number;

  numberSize: string;
  setNumberSize(e: FormEvent<HTMLInputElement>): void;

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
            value={props.numberSize}
            onChange={props.setNumberSize}
            placeHolder="number size"
          />
          <br />
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
          <RadioContainer />
          <br />
          <ButtonView onClick={props.onClick} title="Submit" />
        </FormView>
        <br />
      </div>
    </>
  );
};

export default memo(InitialView);
