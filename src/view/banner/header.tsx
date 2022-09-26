import { Col, Row, Image, Button, Space, Typography } from 'antd'

import LOGO from 'static/images/logo.png'

const SECTIONS_LIST = [
  { title: 'Home', route: 'home' },
  { title: 'Projects', route: 'projects' },
  { title: 'Process', route: 'process' },
  { title: 'About us', route: 'about-us' },
]

const Header = () => {
  return (
    <Row className="header" justify="space-between" align="middle">
      <Col>
        <Image
          src={LOGO}
          preview={false}
          style={{ height: 32, cursor: 'pointer' }}
        />
      </Col>
      <Col>
        <Space size={40}>
          {SECTIONS_LIST.map(({ title, route }) => (
            <Typography.Text
              style={{ color: '#F3F4F3', cursor: 'pointer' }}
              key={route}
            >
              {title}
            </Typography.Text>
          ))}
        </Space>
      </Col>
      <Col>
        <Button type="primary">Contact us</Button>
      </Col>
    </Row>
  )
}

export default Header
