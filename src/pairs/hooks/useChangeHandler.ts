export const useChangeHandler = (
  pairs: Array<Array<string>>,
  setPairs: React.Dispatch<React.SetStateAction<string[][]>>
) => {
  const newPairs = [...pairs];
  return (e: React.FormEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;
    const num = Number.parseInt(id.substring(0, id.length - 1));
    const index = Number.parseInt(id.substring(id.length - 1, id.length));

    if (typeof newPairs[num] === "undefined") {
      newPairs[num] = Array<string>();
    }
    newPairs[num][index - 1] = value;
    setPairs(newPairs);
  };
};
