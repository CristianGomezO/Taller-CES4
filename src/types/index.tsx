export enum ETransactionType {
  EXPENSE = "EXPENSE",
  INCOME = "INCOME",
}

export interface ITransaction {
  _id: string;
  name: string;
  value: string;
  valueLocal?: string;
  type: ETransactionType;
}

export interface IFilterOpts {
  filterName: string;
  label: string;
  checked: boolean;
}

export interface IBalances {
  initialBalance: number;
  finalBalance: number;
}

export interface IResponse {
  message?: string;
  code: number;
}
