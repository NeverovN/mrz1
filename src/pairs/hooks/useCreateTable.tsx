import React from "react";
import { useSelector } from "react-redux";

// utils
import { createRow } from "../utils/createRow";
import { createCell } from "../utils/createCell";

// types
import { StoreType } from "../types/store";

export const useCreateTable = () => {
  const size: any = useSelector<StoreType>(({ screen }) => screen.pairs.size);
  const table: React.ReactNode[] = [];
  const firsRow: React.ReactNode[] = [];
  const createTable = (pairsArray: number[][][], tact: number) => {
    firsRow.push(createCell({ title: "" }));
    for (let i = 1; i < size + pairsArray.length; i++) {
      firsRow.push(createCell({ title: `Tact ${i}` }));
    }

    table.push(createRow(firsRow));

    for (let i = 0; i < size; i++) {
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

    return (
      (
        <table>
          <tbody>{table}</tbody>
        </table>
      ) || null
    );
  };

  return createTable;
};
