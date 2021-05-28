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
import PairsView from "../../components/Pairs/index";
import Button from "../../../common/components/Button/index";

// utils
import { createPairs } from "../../utils/createPairs";

// hooks
import { useChangeHandler } from "../../hooks/useChangeHandler";
import { useValidatePairs } from "../../hooks/useValidatePairs";
import { useGetResult } from "../../hooks/useGetResult";

// actions
import { setRenderTable } from "../../../common/store/actions";

// types
import { StoreType } from "../../../common/types/store";

// utils
import { useInitPairsArr } from "../../hooks/useInitPairsArr";
import { useCalculate } from "../../hooks/useCalculate";
import { useCreateTable } from "../../hooks/useCreateTable";

export interface IPairsContainerProps {}

export const allowedToRender = (): number => {
  return 0;
};

const PairsContainer: FC<IPairsContainerProps> = () => {
  const dispatch = useDispatch();
  const data: any = useSelector<StoreType>(({ screen }) => screen.pairs);
  const [count, setCount] = useState<number>(0);
  const [tact, setTact] = useState<number>(0);
  const [pairs, setPairs] = useState<Array<Array<string>>>([]);
  const table = useRef<React.ReactNode>();
  const result = useRef<number[]>([]);
  const initPairs = useInitPairsArr(pairs);
  const calculate = useCalculate(pairs);
  const createTable = useCreateTable();
  const getResult = useGetResult();

  const handleChange = useChangeHandler(pairs, setPairs);
  const validatePairs = useValidatePairs(pairs, count);

  const setTableRender = useCallback(() => {
    dispatch(setRenderTable(true, result.current, table.current));
  }, [table, result, dispatch]);

  const submitHandler = () => {
    if (!validatePairs()) {
      console.log("invalid");
      alert("Error.\nPlease, provide correct data");
      return null;
    }
    const pairsArray = initPairs();
    calculate(pairsArray);
    table.current = createTable(pairsArray, tact);
    result.current = getResult(pairs);
    console.log(result.current);
    setTableRender();
  };
  useEffect(() => {
    setCount(data.count);
    setTact(data.tact);
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
