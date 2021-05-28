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
    result: [0],
  },
};

type ActionType = {
  type: string;
  pairs: {
    allowed: boolean;
    size: number;
    count: number;
    tact: number;
  };
  table: {
    allowed: boolean;
    table: React.ReactNode;
    result: number[];
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

      return state;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
