import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { Col, Row, Space, Typography } from 'antd'
import IonIcon from 'components/icon'

import { AppState } from 'store'

import './index.less'

type ProcessDetailProps = {
  title: string
  description: string
  icon: string
  index: number
}

const HEIGHT_RATIO = 0.75
const ITEM_SPACING = 24
const MAX_WIDTH = 1200

const ProcessDetail = (props: ProcessDetailProps) => {
  const { description, icon, title, index } = props
  const { width } = useSelector((state: AppState) => state.ui)

  const height = useMemo(() => {
    if (width > MAX_WIDTH)
      return MAX_WIDTH / 4 - ITEM_SPACING * 3 * HEIGHT_RATIO
    if (width < 576) return width * HEIGHT_RATIO
    if (width < 768) return width / 2 - ITEM_SPACING * HEIGHT_RATIO
    if (width < 992) return width / 3 - ITEM_SPACING * 2 * HEIGHT_RATIO
    return width / 4 - ITEM_SPACING * 3 * HEIGHT_RATIO
  }, [width])

  return (
    <Row
      gutter={[0, 16]}
      style={{ height }}
      className="process-card"
      justify="space-between"
    >
      <Col>
        <Space direction="vertical" size={16}>
          <Typography.Title level={3}>{index}.</Typography.Title>
          <Typography.Title level={3}>{title}</Typography.Title>
          <Typography.Text type="secondary">{description}</Typography.Text>
        </Space>
      </Col>
      <Col>
        <IonIcon style={{ fontSize: 20 }} name={icon} />
      </Col>
    </Row>
  )
}

export default ProcessDetail
