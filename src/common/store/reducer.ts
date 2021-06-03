import React from "react";
import { RENDER_PAIRS, RENDER_TABLE, CHOOSE_METHOD } from "./actions";

// default state
const initialState = {
  method: {
    method: "left",
  },
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

// ts typechecker
type ActionType = {
  type: string;
  method: {
    method: string;
  };
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
    case CHOOSE_METHOD: {
      state.method = { ...action.method };
      return state;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
