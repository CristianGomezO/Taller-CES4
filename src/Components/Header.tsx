import { Col, InputNumber, PageHeader, Row, Space } from "antd";
import { balances } from "../Constants/InitialValues";
import {
  colHeaderStyle,
  headerInputStyle,
  headerStyles,
} from "../Constants/Styles";

interface HeaderProps {
  finalBalance: number;
}

const Header: React.FC<HeaderProps> = ({finalBalance}) => {
  return (
    <PageHeader
      className="site-page-header"
      title="Finanzas App"
      style={headerStyles}
      subTitle="Por Cristian Gómez y Edward Andrés"
      extra={[
        <Row>
          <Space>
            <Col style={colHeaderStyle}>
              <Col>Saldo Inicial</Col>
              <Col>
                <InputNumber readOnly={true} style={headerInputStyle} value={balances.initialBalance}/>
              </Col>
            </Col>
            <Col style={colHeaderStyle}>
              <Col>Saldo Final</Col>
              <Col>
                <InputNumber readOnly={true} style={headerInputStyle} value={finalBalance}/>
              </Col>
            </Col>
          </Space>
        </Row>,
      ]}
    />
  );
};

export default Header;
