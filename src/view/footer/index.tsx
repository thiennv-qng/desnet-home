import { useSelector } from 'react-redux'

import { Col, Image, Row, Space, Typography } from 'antd'
import IonIcon from 'components/icon'

import { AppState } from 'store'

import LOGO from 'static/images/logo-dark.svg'

import './index.less'
import { useContact } from 'hooks/useContact'

const Footer = () => {
  const width = useSelector((state: AppState) => state.ui.width)
  const isMobile = width < 668
  const onContact = useContact()

  return (
    <div className="footer">
      <Row
        gutter={[48, 48]}
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
            <Space className="space-middle-icon" onClick={onContact}>
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
