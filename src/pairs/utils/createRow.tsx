// utils
import { createKey } from "../../common/utils/createKey";

export const createRow = (cells: React.ReactNode[]) => {
  return <tr key={createKey()}>{cells}</tr>;
};
