import { useSelector } from 'react-redux'

import { Button, Col, Row, Typography } from 'antd'
import Header from './header'

import { AppState } from 'store'

import BG_BANNER from 'static/images/bg-banner.png'

import './index.less'
import { useContact } from 'hooks/useContact'

const Banner = () => {
  const width = useSelector((state: AppState) => state.ui.width)
  const onContact = useContact()
  const isMobile = width < 998
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
          <Row
            gutter={[
              { xs: 24, sm: 24, md: 24, lg: 16 },
              { xs: 24, sm: 24, md: 24, lg: 16 },
            ]}
          >
            <Col span={24}>
              <Typography.Title className="banner_text top">
                Hire
              </Typography.Title>
              <Typography.Title className="banner_text middle">
                Hackathon Winner
              </Typography.Title>
              <Row gutter={[24, 24]} align="bottom">
                <Col
                  flex={isMobile ? undefined : 'auto'}
                  span={isMobile ? 24 : undefined}
                  style={{
                    textAlign: isMobile ? 'center' : 'left',
                    paddingBottom: 12,
                  }}
                  order={isMobile ? 2 : 1}
                >
                  <Typography.Text className="extra-text">
                    Blockchain experts for hire, ready 24/7.
                  </Typography.Text>
                </Col>
                <Col order={isMobile ? 1 : 2} span={isMobile ? 24 : undefined}>
                  <Typography.Title className="banner_text end">
                    Devs.
                  </Typography.Title>
                </Col>
              </Row>
            </Col>
            <Col span={24} style={{ textAlign: 'center' }}>
              <Button onClick={onContact} size="large">
                Contact us
              </Button>
            </Col>
          </Row>
        </Col>
        <Col span={24} /> {/**Safe place */}
      </Row>
    </div>
  )
}

export default Banner
