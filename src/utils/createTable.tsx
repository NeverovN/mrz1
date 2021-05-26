// utils
import { createRow } from "./createRow";
import { createCell } from "./createCell";

// consts
import { NUMBER_SIZE } from "../constants/numbers";

export const createTable = (pairsArray: number[][][], tact: number) => {
  const table = [];
  const firsRow = [];
  firsRow.push(createCell({ title: "" }));
  for (let i = 1; i < NUMBER_SIZE + pairsArray.length; i++) {
    firsRow.push(createCell({ title: `Tact ${i}` }));
  }

  table.push(createRow(firsRow));

  for (let i = 0; i < NUMBER_SIZE; i++) {
    const row = [];
    row.push(createCell({ title: `Instruction ${i + 1}` }));
    for (let j = 0; j < i; j++) {
      row.push(createCell({ title: "" }));
    }
    for (let j = 0; j < pairsArray.length; j++) {
      row.push(
        createCell({
          mult: pairsArray[j][0][i].toString(2),
          sum: pairsArray[j][1][i].toString(2),
          time: ((i + j + 1) * tact).toString(),
        })
      );
    }
    table.push(createRow(row));
  }

  return <table>{table}</table> || null;
};
