import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Col, Input, List, Popconfirm, Row } from "antd";
import React from "react";
import { Colors } from "../Constants/Colors";
import { genericStyles } from "../Constants/Styles";
import { ETransactionType, IFilterOpts, ITransaction } from "../types";
import "./../css/TransactionList.css";

const styles = {
  ...genericStyles,
  mainRowStyles: {
    height: "94%",
    backgroundColor: Colors.snowWhite,
    borderRadius: 10,
  },
};

interface TransactionListProps {
  transactions: ITransaction[];
  filterActive: IFilterOpts;
  filteredTransactions: ITransaction[];
  filterOpts: IFilterOpts[];
  search: string;
  setSearch: (s: string) => void;
  onFilterPress: (filterOpt: IFilterOpts) => void;
  onDeleteTransaction: (_id: string) => void;
  setSelectedTransaction: (t: ITransaction) => void;
}

const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  filterActive,
  filteredTransactions,
  filterOpts,
  search,
  setSearch,
  onFilterPress,
  onDeleteTransaction,
  setSelectedTransaction,
}) => {
  return (
    <>
      <Row justify="center" align="middle">
        <Col span={12} style={styles.p10}>
          Listado de movimientos
        </Col>
        <Col span={12} style={styles.p10}>
          <Row justify="center" align="middle">
            <Col style={{ marginRight: 20 }}>Total:</Col>
            <Col>
              <div className={"badge blueColor"}>{transactions?.length}</div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={styles.mainRowStyles}>
        <Row
          style={{
            width: "100%",
            marginTop: 20,
            height: 50,
          }}
          justify="center"
          align="top"
        >
          <Col span={6} style={styles.m10}>
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              prefix={<SearchOutlined />}
              placeholder="Buscar registro..."
            />
          </Col>
          <Col span={12}>
            <Row justify="center" align="middle">
              {filterOpts.map((filter, idx) => (
                <Col key={idx} span={6} style={styles.m10}>
                  <Checkbox
                    onClick={() => onFilterPress(filter)}
                    checked={filter.checked}
                  >
                    {filter.label}
                  </Checkbox>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row
          style={{
            height: "60%",
            margin: 10,
            width: "100%",
          }}
        >
          <Col span={24}>
            <List
              style={{
                height: 280,
                overflow: "scroll",
              }}
              size="small"
              bordered
              rowKey={(key) => key._id}
              dataSource={
                search !== "" ||
                filterActive.filterName === ETransactionType.INCOME ||
                filterActive.filterName === ETransactionType.EXPENSE
                  ? filteredTransactions
                  : transactions
              }
              renderItem={(item) => (
                <List.Item>
                  <Row
                    justify="center"
                    align="middle"
                    style={{ width: "100%" }}
                  >
                    <Col span={18}>
                      <Row>
                        <Col span={2} style={styles.m10}>
                          <Button
                            shape="circle"
                            onClick={() => setSelectedTransaction(item)}
                            icon={<EditOutlined />}
                          />
                        </Col>
                        <Col span={2} style={styles.m10}>
                          <Popconfirm
                            title="Seguro que deseas eliminar el registro"
                            onConfirm={() => onDeleteTransaction(item._id)}
                            okText="Si"
                            cancelText="No"
                          >
                            <Button shape="circle" icon={<DeleteOutlined />} />
                          </Popconfirm>
                        </Col>
                        <Col span={15} style={{ paddingTop: 15 }}>
                          {item.name}
                        </Col>
                      </Row>
                    </Col>
                    <Col span={6} style={{ paddingLeft: 20 }}>
                      <div
                        className={
                          item.type === ETransactionType.INCOME
                            ? "badge greenColor"
                            : "badge redColor"
                        }
                      >
                        {item.value}
                      </div>
                    </Col>
                  </Row>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default TransactionList;
