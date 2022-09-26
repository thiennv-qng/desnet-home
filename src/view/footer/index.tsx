import { Col, Image, Row, Space, Typography } from 'antd'
import IonIcon from 'components/icon'
import LOGO from 'static/images/logo-dark.svg'

import './index.less'

const Footer = () => {
  return (
    <div className="footer">
      <Row className="footer_content" align="middle">
        <Col flex="auto">
          <Space size={16} direction="vertical">
            <Image src={LOGO} preview={false} />
            <Typography.Text type="secondary">
              © 2022, All Rights Reserved
            </Typography.Text>
          </Space>
        </Col>
        <Col>
          <Space size={16} direction="vertical">
            <Typography.Title level={2}>Contact</Typography.Title>
            <Space className="space-middle-icon">
              <IonIcon style={{ fontSize: 18 }} name="mail-outline" />
              <Typography.Text>hello@descartes.network</Typography.Text>
            </Space>
          </Space>
        </Col>
      </Row>
    </div>
  )
}

export default Footer
