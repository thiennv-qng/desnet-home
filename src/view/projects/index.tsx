import { Col, Row, Typography, Image } from 'antd'

import PROJECT1 from 'static/images/project1.png'

import './index.less'

const Projects = () => {
  return (
    <Row gutter={[0, 72]} id="projects">
      <Col span={24} style={{ textAlign: 'center' }}>
        <Typography.Title className="title-section" level={1}>
          Recent Projects
        </Typography.Title>
      </Col>
      <Col span={24} style={{ textAlign: 'center' }} className="project-img">
        <Image src={PROJECT1} preview={false} />
        <Typography.Title className="project-title title-section">
          Sentre
        </Typography.Title>
      </Col>
    </Row>
  )
}

export default Projects
