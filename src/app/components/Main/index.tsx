import React, { FC, memo } from "react";

// containers
import Initial from "../../../init/containers/Initial/index";
import Pairs from "../../../pairs/containers/Pairs/index";
import TableContainer from "../../../table/containers/Table/index";
import ResultContainer from "../../../result/containers/Result/index";

// styles
import "./styles.css";

interface IMainViewProps {}

const MainView: FC<IMainViewProps> = (props) => {
  return (
    <div className="App">
      <Initial />
      <Pairs />
      <TableContainer />
      <ResultContainer />
    </div>
  );
};

export default memo(MainView);
