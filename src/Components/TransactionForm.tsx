import { Button, Col, Input, Row, Select } from "antd";
import React from "react";
import { Colors } from "../Constants/Colors";
import { genericStyles } from "../Constants/Styles";
import { ETransactionType } from "../types";

const { Option } = Select;

interface TransactionFormProps {}

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

const TransactionForm: React.FC<TransactionFormProps> = () => {
  const handleChangeSelect = React.useCallback((value: string) => {
    console.log(`selected ${value}`);
  }, []);

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
            <Input placeholder="Nombre" />
          </Col>
        </Row>
        <Row style={styles.w100} justify="center" align="middle">
          <Col span={6}>Cantidad</Col>
          <Col span={6}>
            <Input placeholder="Cantidad" />
          </Col>
        </Row>
      </Row>
      <Row style={styles.secondRow} justify="center" align="middle">
        <Col span={6}>
          <Button type="primary">Cancelar</Button>
        </Col>
        <Col span={6}>
          <Button type="primary">Agregar Movimiento</Button>
        </Col>
      </Row>
    </>
  );
};

export default TransactionForm;
