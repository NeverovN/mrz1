import React, { FC, memo } from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

// redux
import reducer from "../../store/reducer";

// components
import MainView from "../Main";

interface IAppProps {}

const rootReducer = combineReducers({
  screen: reducer,
});

const store = createStore(rootReducer);
const App: FC<IAppProps> = () => {
  return (
    <Provider store={store}>
      <MainView />
    </Provider>
  );
};

export default memo(App);
