import { FC, memo } from "react";
import { useSelector } from "react-redux";

// components
import ResultView from "../../components/Result/index";

// types
import { StoreType } from "../../../common/types/store";

interface IResultContainerProps {}

const ResultContainer: FC<IResultContainerProps> = () => {
  const result: any = useSelector<StoreType>(({ screen }) => screen.table);

  if (!result || !result.allowed) return null;

  return <ResultView result={result.result} />;
};

export default memo(ResultContainer);
