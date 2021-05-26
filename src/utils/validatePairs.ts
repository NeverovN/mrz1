import { validatePairElement } from "./validatePairElement";

export const validatePairs = (pairs: string[][], count: number) => {
  for (let i = 0; i < count; i++) {
    if (pairs[i] === undefined || pairs[i]?.length < 2) return false;

    if (!validatePairElement(pairs[i][0])) return false;
    if (!validatePairElement(pairs[i][1])) return false;
  }
  return true;
};
