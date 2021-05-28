import { validatePairElement } from "../utils/validatePairElement";
import { useSelector } from "react-redux";

// types
import { StoreType } from "../../pairs/types/store";

export const useValidatePairs = (pairs: string[][], count: number) => {
  const size: any = useSelector<StoreType>(({ screen }) => screen.pairs.size);

  const validatePairs = () => {
    for (let i = 0; i < count; i++) {
      if (pairs[i] === undefined || pairs[i]?.length < 2) return false;

      if (!validatePairElement(pairs[i][0], size)) return false;
      if (!validatePairElement(pairs[i][1], size)) return false;
    }
    return true;
  };

  return validatePairs;
};
