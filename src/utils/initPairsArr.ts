import { NUMBER_SIZE } from "../constants/numbers";

export const initPairsArr = (pairs: string[][]) => {
  const pairsArray = new Array<Array<Array<number>>>();
  for (let i = 0; i < pairs.length; i++) {
    pairsArray.push([]);
    for (let j = 0; j < 2; j++) {
      pairsArray[i].push([]);
    }
  }

  pairsArray.map((el, index) => {
    el[0].length = NUMBER_SIZE;
    return el[0].fill(Number.parseInt(pairs[index][0]));
  });

  return pairsArray;
};
