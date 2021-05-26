import React from "react";

export const RENDER_PAIRS = "RenderPairs";
export const RENDER_TABLE = "RenderTable";

export const setRenderPairs = (
  allowed: boolean,
  count: number,
  tact: number
) => {
  const pairs = {
    allowed,
    count,
    tact,
  };
  return { type: RENDER_PAIRS, pairs };
};

export const setRenderTable = (table: React.ReactNode, allowed: boolean) => {
  const tableToReturn = {
    allowed,
    table,
  };
  return { type: RENDER_TABLE, table: tableToReturn };
};
