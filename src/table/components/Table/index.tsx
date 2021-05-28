import React, { FC, memo } from "react";

interface ITableViewProps {
  data: React.ReactNode;
}

const TableView: FC<ITableViewProps> = (props) => {
  return <>{props.data}</>;
};

export default memo(TableView);
