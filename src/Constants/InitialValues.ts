import { ETransactionType, IFilterOpts, ITransaction } from "../types";

export const transactionsMock: ITransaction[] = [
  {
    _id: String(Math.floor(Math.random() * 100000) + 1),
    name: "Salario developer",
    type: ETransactionType.INCOME,
    value: 10000000,
  },
  {
    _id: String(Math.floor(Math.random() * 100000) + 1),
    name: "Gastos de alimentacion",
    type: ETransactionType.EXPENSE,
    value: 500000,
  },
];

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
