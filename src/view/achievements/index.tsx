import { Button, Col, Row, Typography } from 'antd'
import Icon from '@ant-design/icons'
import CardAchievement from './cardAchievement'

import { ReactComponent as Cup } from 'static/images/cup.svg'

import './index.less'

const Achievements = () => {
  return (
    <Row
      gutter={[0, { xs: 200, sm: 200, md: 240, lg: 240 }]}
      className="achievement"
      id="achievement"
    >
      <Col span={24} style={{ textAlign: 'center' }}>
        <Typography.Title className="title-section" level={1}>
          Our Achievements
        </Typography.Title>
      </Col>
      <Col span={24} style={{ textAlign: 'center' }}>
        <div className="achievement-center">
          <div className="circle">
            <Icon className="cup" style={{ fontSize: 64 }} component={Cup} />
          </div>
          <CardAchievement
            label="2nd Place"
            description="Solana Inaugural Hackathon 2020"
            className="prize-1"
          />
          <CardAchievement
            label="3rd Place"
            description="Solana Riptide Hackathon 2020"
            className="prize-2"
          />
          <CardAchievement
            label="2nd Place"
            description="Serum x Wormhole Convergence Hackathon 2022"
            className="prize-3"
          />
        </div>
      </Col>
      <Col span={24} style={{ textAlign: 'center' }}>
        <Button type="primary">Contact us</Button>
      </Col>
    </Row>
  )
}

export default Achievements
