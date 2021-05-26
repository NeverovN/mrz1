import { NUMBER_SIZE } from "../constants/numbers";

export const calculate = (pairsArray: number[][][], pairs: string[][]) => {
  pairsArray.map((el, index) => {
    const bin = Number.parseInt(pairs[index][1])
      .toString(2)
      .split("")
      .reverse()
      .join("");
    for (let i = 0; i < NUMBER_SIZE; i++) {
      if (bin[i] === "1") {
        el[0][i] = el[0][i] << i;
      } else {
        el[0][i] = 0;
      }
    }

    for (let i = 0; i < NUMBER_SIZE; i++) {
      if (i === 0) {
        el[1][i] = el[0][i];
        continue;
      }
      el[1][i] = el[0][i] + el[1][i - 1];
    }

    return [];
  });
};
