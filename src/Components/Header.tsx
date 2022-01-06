import { Col, InputNumber, PageHeader, Row, Space } from "antd";
import {
  colHeaderStyle,
  headerInputStyle,
  headerStyles,
} from "../Constants/Styles";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <PageHeader
      className="site-page-header"
      title="Finanzas App"
      style={headerStyles}
      subTitle="Por Cristian Gomez y Edward Andrés"
      extra={[
        <Row>
          <Space>
            <Col style={colHeaderStyle}>
              <Col>Saldo Inicial</Col>
              <Col>
                <InputNumber min={0} style={headerInputStyle} />
              </Col>
            </Col>
            <Col style={colHeaderStyle}>
              <Col>Saldo Final</Col>
              <Col>
                <InputNumber min={0} style={headerInputStyle} />
              </Col>
            </Col>
          </Space>
        </Row>,
      ]}
    />
  );
};

export default Header;
