export const useGetResult = () => {
  return (pairs: string[][]) => {
    return pairs.reduce((acc, el) => {
      return [
        ...acc,
        el
          .map((el) => Number.parseInt(el))
          .reduce((accum, next) => accum * next),
      ];
    }, Array<number>());
  };
};
