import React from "react";
import { RENDER_PAIRS, RENDER_TABLE } from "./actions";

const initialState = {
  pairs: {
    allowed: false,
    count: 0,
    tact: 0,
  },
  table: {
    allowed: false,
    table: Object(),
  },
};

type ActionType = {
  type: string;
  pairs: {
    allowed: boolean;
    count: number;
    tact: number;
  };
  table: {
    allowed: boolean;
    table: React.ReactNode;
  };
};

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case RENDER_PAIRS: {
      state.pairs = { ...action.pairs };
      return state;
    }
    case RENDER_TABLE: {
      state.table = { ...action.table };
      console.log("state: ", state);

      return state;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
