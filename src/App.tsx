import { Col, Row } from "antd";
import "antd/dist/antd.min.css";
import "./App.css";
import Header from "./Components/Header";
import TransactionForm from "./Components/TransactionForm";
import TransactionList from "./Components/TransactionList";

const styles = {
  rowContainer: {
    height: "80vh",
  },
  p10: {
    padding: 10,
  },
  m10: {
    margin: 10,
  },
};

function App() {
  return (
    <>
      <Header />
      <Row style={{ ...styles.rowContainer, ...styles.p10, ...styles.m10 }}>
        <Col span={12} style={{ ...styles.p10 }}>
          <TransactionForm />
        </Col>
        <Col span={12} style={{ ...styles.p10 }}>
          <TransactionList />
        </Col>
      </Row>
    </>
  );
}

export default App;
