import { FC, memo } from "react";
import { useSelector } from "react-redux";

// components
import TableView from "../../components/Table/index";

type StoreType = {
  screen: {
    table: {
      allowed: true;
      table: React.ReactNode;
    };
  };
};

interface ITableContainerProps {}

const TableContainer: FC<ITableContainerProps> = () => {
  const data: any = useSelector<StoreType>(({ screen }) => screen.table);

  if (typeof data === "undefined" || !data.allowed) return null;

  return <TableView data={data.table} />;
};

export default memo(TableContainer);
