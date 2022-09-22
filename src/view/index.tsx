import { Col, Row, Typography } from "antd";

import "static/styles/dark.less";
import "static/styles/light.less";

const View = () => {
  return (
    <Row gutter={[8, 8]}>
      <Col span={24}>
        <Typography.Title level={5}>Mr Hoai</Typography.Title>
      </Col>
    </Row>
  );
};

export default View;
