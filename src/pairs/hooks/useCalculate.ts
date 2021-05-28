import { useSelector } from "react-redux";

// types
import { StoreType } from "../../common/types/store";

// hooks
import { useCalculateLeft } from "./useCalculateLeft";
import { useCalculateRight } from "./useCalculateRight";

export const useCalculate = (pairs: string[][]) => {
  const size: any = useSelector<StoreType>(({ screen }) => screen.pairs.size);
  const method: any = useSelector<StoreType>(
    ({ screen }) => screen.method.method
  );

  const calculateLeft = useCalculateLeft(pairs, size);
  const calculateRight = useCalculateRight();

  if (method === "left") {
    return calculateLeft;
  } else {
    return calculateRight;
  }
};
