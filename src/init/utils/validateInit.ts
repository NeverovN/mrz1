export const validateInit = (size: string, pairs: string, tact: string) => {
  if (size === undefined || size === "") return false;
  if (size.match(/(?<=\s|^)\d+(?=\s|$)/) === null) return false;
  if (Number.parseInt(size) > 8 || Number.parseInt(size) < 4) return false;

  if (pairs === undefined || pairs === "") return false;
  if (pairs.match(/(?<=\s|^)\d+(?=\s|$)/) === null) return false;
  if (Number.parseInt(pairs) > 20 || Number.parseInt(pairs) < 3) return false;

  if (tact === undefined || tact === "") return false;
  if (tact.match(/(?<=\s|^)\d+(?=\s|$)/) === null) return false;
  if (Number.parseInt(tact) > 10 || Number.parseInt(pairs) < 0) return false;

  return true;
};
