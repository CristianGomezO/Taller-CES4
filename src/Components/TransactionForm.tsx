import { Button, Col, Input, Row, Select } from "antd";
import React from "react";
import { Colors } from "../Constants/Colors";
import { genericStyles } from "../Constants/Styles";
import { ETransactionType, ITransaction } from "../types";

const { Option } = Select;

const styles = {
  ...genericStyles,
  mainRowStyles: {
    height: "80%",
    backgroundColor: Colors.snowWhite,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  secondRow: {
    backgroundColor: Colors.snowWhite,
    paddingBottom: 30,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  selectStyles: {
    width: "100%",
  },
};

const transactionTypeSelect = {
  expense: {
    slug: ETransactionType.EXPENSE,
    label: "Gasto",
  },
  income: {
    slug: ETransactionType.INCOME,
    label: "Ingreso",
  },
};

interface TransactionFormProps {
  selectedTransaction?: ITransaction;
  onEditTransaction: (transaction: ITransaction) => void;
  onCreateTransaction: (transaction: ITransaction) => void;
  setSelectedTransaction: (t: ITransaction) => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({
  selectedTransaction,
  setSelectedTransaction,
  onCreateTransaction,
  onEditTransaction,
}) => {
  const handleChangeSelect = React.useCallback(
    (value: string) => {
      const aTemp = { ...selectedTransaction };
      aTemp.type = value as ETransactionType;
      setSelectedTransaction(aTemp as ITransaction);
    },
    [selectedTransaction, setSelectedTransaction]
  );

  const handleChangeInput = React.useCallback(
    (field: any, value: string) => {
      const aTemp = { ...selectedTransaction };
      aTemp[field] = value;
      setSelectedTransaction(aTemp as ITransaction);
    },
    [selectedTransaction, setSelectedTransaction]
  );

  return (
    <>
      <Row justify="center" align="middle">
        <Col style={styles.p10}>Registro</Col>
      </Row>
      <Row style={styles.mainRowStyles}>
        <Row style={styles.w100} justify="center" align="middle">
          <Col span={6}>Tipo de Movimiento</Col>
          <Col span={6}>
            <Select
              defaultValue={""}
              value={selectedTransaction?.type}
              style={styles.selectStyles}
              onChange={handleChangeSelect}
            >
              <Option value={""}>Seleccione</Option>
              <Option value={transactionTypeSelect.income.slug}>
                {transactionTypeSelect.income.label}
              </Option>
              <Option value={transactionTypeSelect.expense.slug}>
                {transactionTypeSelect.expense.label}
              </Option>
            </Select>
          </Col>
        </Row>
        <Row style={styles.w100} justify="center" align="middle">
          <Col span={6}>Nombre</Col>
          <Col span={6}>
            <Input
              placeholder="Nombre"
              onChange={(e) => handleChangeInput("name", e.target.value)}
              value={selectedTransaction?.name}
              required={true}
            />
          </Col>
        </Row>
        <Row style={styles.w100} justify="center" align="middle">
          <Col span={6}>Cantidad</Col>
          <Col span={6}>
            <Input
              onChange={(e) => handleChangeInput("value", e.target.value)}
              type="number"
              placeholder="Cantidad"
              value={selectedTransaction?.value}
              required
            />
          </Col>
        </Row>
      </Row>
      <Row style={styles.secondRow} justify="center" align="middle">
        <Col>
          <Button
            onClick={() => {
              selectedTransaction?._id !== undefined
                ? onEditTransaction(selectedTransaction)
                : onCreateTransaction(selectedTransaction);
            }}
            type="primary"
          >
            {selectedTransaction?._id ? "Editar Movimiento" : "Agregar Movimiento"}
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default TransactionForm;
