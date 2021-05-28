export type StoreType = {
  screen: {
    method: {
      method: string;
    };
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
