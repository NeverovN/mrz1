import { FC, memo } from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

// redux
import reducer from "../../../common/store/reducer";

// components
import MainView from "../Main/index";

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
