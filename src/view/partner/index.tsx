import { Col, Row, Image, Typography } from 'antd'

import SENTRE from 'static/images/sentre-logo.svg'
import INTERDAO from 'static/images/interdao-logo.svg'
import COIN98 from 'static/images/coin98-logo.svg'

const PARTNERS = [SENTRE, INTERDAO, COIN98]

const Partner = () => {
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
            <Row justify="space-between">
              {PARTNERS.map((partner) => (
                <Col key={partner}>
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
