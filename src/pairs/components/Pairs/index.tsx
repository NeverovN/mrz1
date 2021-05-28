import { FC, memo, ReactNode } from "react";

interface IPairsViewProps {
  renderItem: ReactNode;
}

const PairsView: FC<IPairsViewProps> = (props) => {
  return <>{props.renderItem}</>;
};

export default memo(PairsView);
