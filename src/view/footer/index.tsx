import { useSelector } from 'react-redux'

import { Col, Image, Row, Space, Typography } from 'antd'
import IonIcon from 'components/icon'

import { AppState } from 'store'
import { useContact } from 'hooks/useContact'

import LOGO from 'static/images/logo-dark.svg'

import './index.less'

const Footer = () => {
  const width = useSelector((state: AppState) => state.ui.width)
  const isMobile = width < 680
  const onContact = useContact()

  return (
    <div className="footer">
      <Row
        gutter={[0, 48]}
        className="footer_content"
        align="middle"
        justify={isMobile ? 'center' : 'space-between'}
      >
        <Col>
          <Space
            size={16}
            direction="vertical"
            align={isMobile ? 'center' : 'start'}
          >
            <Image src={LOGO} preview={false} />
            <Typography.Text type="secondary">
              © 2022, All Rights Reserved
            </Typography.Text>
          </Space>
        </Col>
        <Col>
          <Space
            size={16}
            direction="vertical"
            align={isMobile ? 'center' : 'start'}
          >
            <Typography.Title level={2}>Contact</Typography.Title>
            <Space direction="vertical" size={4}>
              <Space
                className="space-middle-icon contact-item"
                onClick={onContact}
              >
                <IonIcon style={{ fontSize: 20 }} name="mail" />
                <Typography.Text>hello@descartes.network</Typography.Text>
              </Space>
              <Space
                className="space-middle-icon contact-item"
                onClick={() =>
                  window.open(
                    'https://www.facebook.com/DescartesNetwork',
                    '_blank',
                  )
                }
              >
                <IonIcon style={{ fontSize: 20 }} name="logo-facebook" />
                <Typography.Text>facebook.com/DescartesNetwork</Typography.Text>
              </Space>
            </Space>
          </Space>
        </Col>
      </Row>
    </div>
  )
}

export default Footer
