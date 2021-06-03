export const useCalculateLeft = (pairs: string[][], size: number) => {
  const calculate = (pairsArray: number[][][]) => {
    pairsArray.forEach((el, index) => {
      const bin = Number.parseInt(pairs[index][1])
        .toString(2)
        .split("")
        .reverse()
        .join("");
      for (let i = 0; i < size; i++) {
        if (bin[i] === "1") {
          el[0][i] = el[0][i] << i;
        } else {
          el[0][i] = 0;
        }
      }

      for (let i = 0; i < size; i++) {
        if (i === 0) {
          el[1][i] = el[0][i];
          continue;
        }
        el[1][i] = el[0][i] + el[1][i - 1];
      }
    });
  };

  return calculate;
};
