import { Col, Row, Space, Typography } from 'antd'
import ProcessDetail from './processDetail'

import { PROCESS_CONTENT } from './constant'

import './index.less'

const Process = () => {
  return (
    <div className="process">
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} md={16} lg={12}>
          <Space direction="vertical" size={12}>
            <Typography.Title className="section-title">
              Process
            </Typography.Title>
            <Typography.Text style={{ fontSize: 26 }} type="secondary">
              We provide end-to-end solutions
            </Typography.Text>
          </Space>
        </Col>
        {PROCESS_CONTENT.map((content, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <ProcessDetail
              description={content.description}
              title={content.title}
              index={index + 1}
              icon={content.icon}
            />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Process
