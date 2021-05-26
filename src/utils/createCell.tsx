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
    return <th key={Math.random().toString()}>{cell}</th>;
  }
  cell.push(
    "Part. mult: ",
    <br />,
    props.mult,
    <br />,
    "Part. sum: ",
    <br />,
    props.sum,
    <br />,
    "tact: ",
    props.time
  );

  return <td key={Math.random().toString()}>{cell}</td>;
};
