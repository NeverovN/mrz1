export const validateInit = (pairs: string, tact: string) => {
  if (pairs === undefined || pairs === "") return false;
  if (pairs.match(/(?<=\s|^)\d+(?=\s|$)/) === null) return false;
  if (Number.parseInt(pairs) > 20 || Number.parseInt(pairs) < 3) return false;

  if (tact === undefined || tact === "") return false;
  if (tact.match(/(?<=\s|^)\d+(?=\s|$)/) === null) return false;
  if (Number.parseInt(tact) > 10 || Number.parseInt(pairs) < 0) return false;

  return true;
};
