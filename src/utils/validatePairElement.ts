export const validatePairElement = (element: string) => {
  if (element === undefined || element === "") return false;
  if (element.match(/(?<=\s|^)\d+(?=\s|$)/) === null) return false;
  if (Number.parseInt(element) > 255) return false;

  return true;
};
