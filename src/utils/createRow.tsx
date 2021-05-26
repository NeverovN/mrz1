export const createRow = (cells: React.ReactNode[]) => {
  return <tr key={Math.random().toString()}>{cells}</tr>;
};
