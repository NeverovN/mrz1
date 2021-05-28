export const validatePairElement = (element: string, size: number) => {
  if (element === undefined || element === "") return false;
  if (element.match(/(?<=\s|^)\d+(?=\s|$)/) === null) return false;
  if (Number.parseInt(element) >= Math.pow(2, size)) return false;

  return true;
};
