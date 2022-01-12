import { ETransactionType, IResponse, ITransaction } from "../types";

export const transactionsValidation = (
  transaction: ITransaction,
  finalBalance: number
): IResponse => {
  if (
    transaction.type === ETransactionType.EXPENSE &&
    parseInt(transaction.value) > finalBalance
  ) {
    return {
      code: 400,
      message:
        "No cuentas con la cantidad suficiente para realizar el movimiento",
    };
  }

  if (!transaction.type) {
    return {
      code: 400,
      message: "El tipo del movimiento es requerido",
    };
  }

  if (!transaction.name) {
    return {
      code: 400,
      message: "El movimiento debe tener un nombre",
    };
  }

  if (parseInt(transaction.value) <= 0 || !transaction.value) {
    return {
      code: 400,
      message: "La cantidad debe ser mayor a cero",
    };
  }

  return {code: 200}
};
