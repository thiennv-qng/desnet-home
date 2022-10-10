import { Col, Row, Typography } from 'antd'
import CardItem from './cardItem'

import { CONTENTS } from './constant'

import './index.less'

const Services = () => {
  return (
    <Row
      gutter={[0, { xs: 32, sm: 32, md: 72, lg: 72 }]}
      id="services"
      className="services"
    >
      <Col span={24} style={{ textAlign: 'center' }}>
        <Typography.Title className="title-section" level={1}>
          Services
        </Typography.Title>
      </Col>
      <Col span={24}>
        <Row gutter={[48, 16]}>
          {CONTENTS.map(({ descriptions, icon, label }, index) => (
            <Col
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              sm={24}
              md={8}
              key={label}
            >
              <CardItem
                index={index}
                descriptions={descriptions}
                label={label}
                icon={icon}
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}

export default Services
