import { ETransactionType, IBalances, IFilterOpts } from "../types";

export const balances: IBalances = { initialBalance: 10000000, finalBalance: 10000000 }

export const filterOptsInitialValue: IFilterOpts[] = [
  {
    filterName: "all",
    label: 'Todos',
    checked: true
  },
  {
    filterName: ETransactionType.INCOME,
    label: 'Ingreso',
    checked: false
  },
  {
    filterName: ETransactionType.EXPENSE,
    label: 'Gasto',
    checked: false
  },
];
