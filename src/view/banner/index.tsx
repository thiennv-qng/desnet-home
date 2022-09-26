import { Button, Col, Row, Typography } from 'antd'

import './index.less'

import BG_BANNER from 'static/images/bg-banner.png'
import Header from './header'
const Banner = () => {
  return (
    <div
      id="home"
      className="banner"
      style={{ background: `url(${BG_BANNER})` }}
    >
      <Row className="banner_content" gutter={[0, 116]}>
        <Col span={24}>
          <Header />
        </Col>
        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Typography.Title className="banner_text special-tag">
                Hire
              </Typography.Title>
              <Typography.Title style={{ fontSize: 112, color: '#123A7E' }}>
                Hackathon Winner
              </Typography.Title>
              <Typography.Title
                style={{ textAlign: 'right' }}
                className="banner_text arrow"
              >
                Devs.
              </Typography.Title>
            </Col>
            <Col span={24} style={{ textAlign: 'center' }}>
              <Button size="large">Contact us</Button>
            </Col>
          </Row>
        </Col>
        <Col span={24} /> {/**Safe place */}
      </Row>
    </div>
  )
}

export default Banner
