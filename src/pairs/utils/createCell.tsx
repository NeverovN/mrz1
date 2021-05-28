// utils
import { createKey } from "../../common/utils/createKey";

interface ICreateCellProps {
  title?: string;
  sum?: string;
  mult?: string;
  time?: string;
}

export const createCell = (props: ICreateCellProps) => {
  const cell = [];
  if (typeof props.title !== "undefined") {
    cell.push(props.title);
    return <th key={createKey()}>{cell}</th>;
  }
  cell.push(
    "Part. mult: ",
    <br key={createKey()} />,
    props.mult,
    <br key={createKey()} />,
    "Part. sum: ",
    <br key={createKey()} />,
    props.sum,
    <br key={createKey()} />,
    "tact: ",
    props.time
  );

  return <td key={createKey()}>{cell}</td>;
};
