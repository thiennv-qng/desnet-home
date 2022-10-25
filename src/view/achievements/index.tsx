import { useCallback, useEffect, useState } from 'react'

import { Button, Col, Row, Typography } from 'antd'
import Achievement from 'static/images/achievement'
import CardAchievement from './cardAchievement'

import { useContact } from 'hooks/useContact'

import './index.less'

const Achievements = () => {
  const [active, setActive] = useState(false)
  const onContact = useContact()

  const onScroll = useCallback((e: Event) => {
    const ctx = document.querySelector('#achievement')
    const winHeight = window.innerHeight
    if (!ctx) return
    const boundCtx = ctx.getBoundingClientRect()
    const offsetTop = boundCtx.top
    if (offsetTop < winHeight * 0.25) return setActive(true)
    return setActive(false)
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', () => {})
  }, [onScroll])

  return (
    <Row gutter={[0, 88]} className="achievement" id="achievement">
      <Col span={24} style={{ textAlign: 'center' }}>
        <Typography.Title className="title-section" level={1}>
          Our Achievements
        </Typography.Title>
      </Col>
      <Col span={24} style={{ textAlign: 'center' }}>
        <div className={`achievement-center ${active ? 'active' : ''}`}>
          <Achievement />

          <CardAchievement
            label="2nd Place"
            description="Solana Inaugural Hackathon 2020"
            className="prize prize-1"
          />
          <CardAchievement
            label="3rd Place"
            description="Solana Riptide Hackathon 2022"
            className="prize prize-2"
          />
          <CardAchievement
            label="2nd Place"
            description="Serum x Wormhole Convergence Hackathon 2022"
            className="prize prize-3"
          />
        </div>
      </Col>
      <Col span={24} style={{ textAlign: 'center' }}>
        <Button onClick={onContact} type="primary">
          Contact us
        </Button>
      </Col>
    </Row>
  )
}

export default Achievements
