export type StoreType = {
  screen: {
    pairs: {
      allowed: boolean;
      count: number;
      tact: number;
      size: number;
    };
    table: {
      allowed: true;
      result: number[];
      table: React.ReactNode;
    };
  };
};
