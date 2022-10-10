import { ComponentType } from 'react'

import { Card, Col, Row, Typography } from 'antd'
import Icon from '@ant-design/icons'

type CardItemProps = {
  label: string
  icon: ComponentType<React.SVGProps<SVGSVGElement>>
  descriptions: string
  index: number
}

const CardItem = (props: CardItemProps) => {
  const { descriptions, icon, label, index } = props
  return (
    <Card
      bordered={false}
      className={index !== 1 ? 'card-item' : 'card-item special'}
    >
      <Row gutter={[12, 12]}>
        <Col span={24}>
          <Icon
            className="card-item_icon"
            style={{ fontSize: 32 }}
            component={icon}
          />
        </Col>
        <Col span={24} />
        <Col span={24}>
          <Typography.Title level={4}>{label}</Typography.Title>
        </Col>
        <Col span={24}>
          <Typography.Text>{descriptions}</Typography.Text>
        </Col>
      </Row>
    </Card>
  )
}

export default CardItem
