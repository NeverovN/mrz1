import React from "react";

// action names
export const RENDER_PAIRS = "RenderPairs";
export const RENDER_TABLE = "RenderTable";
export const CHOOSE_METHOD = "ChooseMethod";

// action implementations
export const setRenderPairs = (
  allowed: boolean,
  size: number,
  count: number,
  tact: number
) => {
  const pairs = {
    allowed,
    size,
    count,
    tact,
  };
  return { type: RENDER_PAIRS, pairs };
};

export const setMethod = (meth: string) => {
  const method = {
    method: meth,
  };
  return { type: CHOOSE_METHOD, method };
};

export const setRenderTable = (
  allowed: boolean,
  result: number[],
  table: React.ReactNode
) => {
  const tableToReturn = {
    allowed,
    table,
    result,
  };
  return { type: RENDER_TABLE, table: tableToReturn };
};
