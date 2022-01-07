import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Col, Input, List, Row } from "antd";
import React from "react";
import { Colors } from "../Constants/Colors";
import { genericStyles } from "../Constants/Styles";
import "./../css/TransactionList.css";

const styles = {
  ...genericStyles,
  mainRowStyles: {
    height: "94%",
    backgroundColor: Colors.snowWhite,
    borderRadius: 10,
  },
};

interface TransactionListProps {}

const data = ["sfd", "sfd", "sfd", "sfd", "sfd", "sfd", "sfd", "sfd"];

const TransactionList: React.FC<TransactionListProps> = () => {
  return (
    <>
      <Row justify="center" align="middle">
        <Col style={styles.p10}>Listado de movimientos</Col>
      </Row>
      <Row style={styles.mainRowStyles}>
        <Row
          style={{
            width: "100%",
            marginTop: 20,
            // backgroundColor: "red",
            height: 50,
          }}
          justify="center"
          align="top"
        >
          <Col span={6} style={styles.m10}>
            <Input
              prefix={<SearchOutlined />}
              placeholder="Buscar registro..."
            />
          </Col>
          <Col span={12}>
            <Row justify="center" align="middle">
              <Col span={6} style={styles.m10}>
                <Checkbox defaultChecked={true}>Todos</Checkbox>
              </Col>
              <Col span={6} style={styles.m10}>
                <Checkbox>Ingreso</Checkbox>
              </Col>
              <Col span={6} style={styles.m10}>
                <Checkbox>Gasto</Checkbox>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row
          style={{
            // backgroundColor: "gray",
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
              dataSource={data}
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
                          <Button shape="circle" icon={<EditOutlined />} />
                        </Col>
                        <Col span={2} style={styles.m10}>
                          <Button shape="circle" icon={<DeleteOutlined />} />
                        </Col>
                        <Col span={15} style={{ paddingTop: 15 }}>
                          {item}
                        </Col>
                      </Row>
                    </Col>
                    <Col span={6} style={{ paddingLeft: 20 }}>
                      <div
                        className={true ? "badge greenColor" : "badge redColor"}
                      >
                        21232332332
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
