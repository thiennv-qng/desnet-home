import { Col, Row, Image, Typography } from 'antd'

import SENTRE from 'static/images/sentre-logo.svg'
import INTERDAO from 'static/images/interdao-logo.svg'
import COIN98 from 'static/images/coin98-logo.svg'
import { useSelector } from 'react-redux'
import { AppState } from 'store'

const PARTNERS = [SENTRE, INTERDAO, COIN98]

const Partner = () => {
  const width = useSelector((state: AppState) => state.ui.width)
  const isMobile = width < 502
  return (
    <Row justify="center">
      <Col sm={24} md={16} lg={10}>
        <Row gutter={[24, 24]}>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Typography.Text style={{ fontSize: 26 }}>
              Trusted by
            </Typography.Text>
          </Col>
          <Col span={24}>
            <Row
              style={{ textAlign: isMobile ? 'center' : 'left' }}
              gutter={[32, 32]}
              justify="space-between"
            >
              {PARTNERS.map((partner) => (
                <Col span={isMobile ? 24 : undefined} key={partner}>
                  <Image src={partner} preview={false} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Partner
