import { Button, Col, Row, Typography } from 'antd'

import './index.less'

const Collapse = () => {
  return (
    <Row gutter={[0, 40]} className="collapse">
      <Col span={24}>
        <Typography.Title className="collapse-text">
          Let's build
        </Typography.Title>
        <Typography.Title
          style={{ marginBottom: 26 }}
          className="collapse-text"
        >
          something
        </Typography.Title>
        <Typography.Text className="collapse-text special">
          together
        </Typography.Text>
      </Col>
      <Col span={24}>
        <Button type="primary">Contact us</Button>
      </Col>
    </Row>
  )
}

export default Collapse
