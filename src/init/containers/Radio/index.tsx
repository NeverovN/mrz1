import { FC, memo, useState, useCallback } from "react";
import { useDispatch } from "react-redux";

// actions
import { setMethod } from "../../../common/store/actions";

// components
import RadioView from "../../components/Radio/index";

interface IRadioContainerProps {}

const RadioContainer: FC<IRadioContainerProps> = () => {
  const [checked, setChecked] = useState<string>("left");

  const dispatch = useDispatch();

  const method = useCallback(
    (value) => {
      dispatch(setMethod(value));
    },
    [dispatch]
  );

  const onChange = (current: any) => {
    setChecked(current);
    method(current);
  };

  return (
    <>
      <RadioView
        name={"left"}
        label={"left"}
        checked={"left" === checked}
        onChange={() => onChange("left")}
      />
      <RadioView
        name={"right"}
        label={"right"}
        checked={"right" === checked}
        onChange={() => onChange("right")}
      />
    </>
  );
};

export default memo(RadioContainer);
