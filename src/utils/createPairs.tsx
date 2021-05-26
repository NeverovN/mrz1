import React, { ReactNode } from "react";

// components
import TextInput from "../components/TextInput";
export const createPairs = (
  count: number,
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void
) => {
  const result = new Array<ReactNode>();
  for (let i = 0; i < count; i++) {
    result.push([
      <TextInput
        placeHolder={`1st el of ${i + 1} pair`}
        id={`${i}1`}
        onChange={handleChange}
        key={`${i}1`}
      />,
      <TextInput
        placeHolder={`2nd el of ${i + 1} pair`}
        id={`${i}2`}
        onChange={handleChange}
        key={`${i}2`}
      />,
      <br key={Math.random().toString()} />,
    ]);
  }

  return result;
};
