export const useCalculateRight = (pairs: string[][], size: number) => {
  const calculate = (pairsArray: number[][][]) => {
    pairsArray.forEach((el, index) => {
      let bin = Number.parseInt(pairs[index][1]).toString(2);
      while (bin.length !== size) bin = "0" + bin;
      for (let i = 0; i < size; i++) {
        if (bin[i] === "1") {
          el[0][i] = el[0][i] << (size - i - 1);
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
