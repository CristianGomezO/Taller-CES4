export enum ETransactionType {
  EXPENSE = "EXPENSE",
  INCOME = "INCOME",
}

export interface ITransaction {
  _id: string;
  name: string;
  value: number;
  type: ETransactionType;
}

export interface IFilterOpts {
  filterName: string;
  label: string;
  checked: boolean;
}
