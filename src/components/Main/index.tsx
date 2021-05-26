import React, { FC, memo } from "react";

// containers
import Initial from "../../containers/Initial";
import Pairs from "../../containers/Pairs";
import TableContainer from "../../containers/Table";

// styles
import "./styles.css";

interface IMainViewProps {}

const MainView: FC<IMainViewProps> = (props) => {
  return (
    <div className="App">
      <Initial />
      <Pairs />
      <TableContainer />
    </div>
  );
};

export default memo(MainView);
