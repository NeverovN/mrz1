import { useSelector } from "react-redux";

// types
import { StoreType } from "../../common/types/store";

export const useInitPairsArr = (pairs: string[][]) => {
  const size: any = useSelector<StoreType>(({ screen }) => screen.pairs.size);
  const pairsArray = new Array<Array<Array<number>>>();

  const initPairs = () => {
    for (let i = 0; i < pairs.length; i++) {
      pairsArray.push([]);
      for (let j = 0; j < 2; j++) {
        pairsArray[i].push([]);
      }
    }

    pairsArray.map((el, index) => {
      el[0].length = size;
      return el[0].fill(Number.parseInt(pairs[index][0]));
    });

    return pairsArray;
  };

  return initPairs;
};
