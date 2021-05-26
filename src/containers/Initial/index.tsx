import { FC, FormEvent, memo, useState, useCallback, useRef } from "react";
import { useDispatch } from "react-redux";

// components
import InitialView from "../../components/Initial";

// redux actions
import { setRenderPairs } from "../../store/actions";

// utils
import { validateInit } from "../../utils/validateInit";

interface IInitialContainerProps {}

const InitialContainer: FC<IInitialContainerProps> = () => {
  const [pairCount, setPairCount] = useState<string>("");
  const [tactTime, setTactTime] = useState<string>("");
  const count = useRef<number>(0);
  const tact = useRef<number>(0);
  const dispatch = useDispatch();

  const setPairsRender = useCallback(() => {
    dispatch(setRenderPairs(true, count.current, tact.current));
  }, [count, dispatch]);

  const pairCountChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    setPairCount(e.currentTarget.value);
  };

  const tactTimeChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    setTactTime(e.currentTarget.value);
  };

  const submitHandler = () => {
    if (validateInit(pairCount, tactTime)) {
      count.current = Number.parseInt(pairCount);
      tact.current = Number.parseInt(tactTime);
      setPairsRender();
    } else {
      alert(`Error.\nPlease, provide correct data.`);
      return;
    }
  };

  return (
    <InitialView
      textInputSize={10}
      pairCount={pairCount}
      setPairCount={pairCountChangeHandler}
      tactTime={tactTime}
      setTactTime={tactTimeChangeHandler}
      onClick={submitHandler}
    />
  );
};

export default memo(InitialContainer);
