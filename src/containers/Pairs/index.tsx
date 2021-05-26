import React, {
  FC,
  memo,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import PairsView from "../../components/Pairs";
import Button from "../../components/Button";

// utils
import { createPairs } from "../../utils/createPairs";

// hooks
import { useChangeHandler } from "../../hooks/useChangeHandler";
// actions
import { setRenderTable } from "../../store/actions";

// utils
import { validatePairs } from "../../utils/validatePairs";
import { initPairsArr } from "../../utils/initPairsArr";
import { calculate } from "../../utils/calculate";
import { createTable } from "../../utils/createTable";

type StoreType = {
  screen: {
    pairs: {
      allowed: boolean;
      count: number;
    };
    table: {
      allowed: true;
      table: React.ReactNode;
    };
  };
};

export interface IPairsContainerProps {}

export const allowedToRender = (): number => {
  return 0;
};

const PairsContainer: FC<IPairsContainerProps> = () => {
  const dispatch = useDispatch();
  const data: any = useSelector<StoreType>(({ screen }) => screen.pairs);
  const dataCheck: any = useSelector<StoreType>((v) => v);
  console.log("check", dataCheck);
  const [count, setCount] = useState<number>(0);
  const [tact, setTact] = useState<number>(0);
  const [pairs, setPairs] = useState<Array<Array<string>>>([]);
  const table = useRef<React.ReactNode>();

  const handleChange = useChangeHandler(pairs, setPairs);

  const setTableRender = useCallback(() => {
    dispatch(setRenderTable(table.current, true));
  }, [table, dispatch]);

  const submitHandler = () => {
    if (!validatePairs(pairs, count)) {
      console.log("invalid");
      return null;
    }
    const pairsArray = initPairsArr(pairs);
    calculate(pairsArray, pairs);
    table.current = createTable(pairsArray, tact);
    setTableRender();
  };
  useEffect(() => {
    setCount(data.count);
    setTact(data.tact);
    console.log(data);
  }, [data]);

  if (typeof data === "undefined" || !data.allowed) {
    return null;
  }

  return (
    <>
      <PairsView renderItem={createPairs(count, handleChange)} />
      <Button title="Create table" onClick={submitHandler} />
    </>
  );
};

export default memo(PairsContainer);
