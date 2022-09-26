import { Button, Col, Row, Typography } from 'antd'
import { useEffect, useState } from 'react'

import './index.less'

const Collaboration = () => {
  const [state, setState] = useState(2)

  useEffect(() => {
    const collaborationTitles = document.querySelectorAll('.collaboration-text')
    for (let i = 0; i < collaborationTitles.length; ++i) {
      const text = collaborationTitles[i].querySelector('span')

      collaborationTitles[i].addEventListener('mouseover', (e) => {
        text?.classList.add('special')
        setState(i)
      })
    }
  }, [state])

  useEffect(() => {
    const collaborationTitles = document.querySelectorAll('.collaboration-text')
    collaborationTitles[state].querySelector('span')?.classList.add('special')
    for (let i = 0; i < collaborationTitles.length; ++i) {
      const text = collaborationTitles[i].querySelector('span')
      if (state === i) continue

      text?.classList.remove('special')
    }
  })

  return (
    <Row gutter={[0, 40]} className="collaboration">
      <Col span={24}>
        <Typography.Title className="collaboration-text">
          <span>Let's build</span>
        </Typography.Title>
        <Typography.Title className="collaboration-text">
          <span>something</span>
        </Typography.Title>
        <Typography.Title className="collaboration-text">
          <span>together</span>
        </Typography.Title>
      </Col>
      <Col span={24}>
        <Button type="primary">Contact us</Button>
      </Col>
    </Row>
  )
}

export default Collaboration
