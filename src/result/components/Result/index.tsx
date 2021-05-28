import { FC, memo } from "react";

interface IResultViewProps {
  result: number[];
}

const ResultView: FC<IResultViewProps> = (props) => {
  return (
    <>
      <text>Result: </text>
      {props.result.map((el, i) => `${i + 1}. ${el}; `)}
    </>
  );
};

export default memo(ResultView);
