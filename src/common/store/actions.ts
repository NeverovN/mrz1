import React from "react";

export const RENDER_PAIRS = "RenderPairs";
export const RENDER_TABLE = "RenderTable";

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
