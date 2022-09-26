import { Col, Row, Space, Typography, Image } from 'antd'

import YEAR_2020 from 'static/images/2020y.svg'
import YEAR_2021 from 'static/images/2021y.svg'
import YEAR_2022 from 'static/images/2022y.svg'

type CardTimeLineProps = {
  quarter: number
  year: number
  desc: string
  index: number
}

const YEARS: Record<number, string> = {
  2020: YEAR_2020,
  2021: YEAR_2021,
  2022: YEAR_2022,
}

const CardTimeLine = (props: CardTimeLineProps) => {
  const { desc, quarter, year, index } = props
  return (
    <Row
      gutter={[0, 48]}
      className="timeline"
      data-aos="fade-left"
      data-aos-duration={`${index * 300}`}
      align="top"
    >
      <Col span={24}>
        <Space direction="vertical">
          <Typography.Title level={3}>Q{quarter}</Typography.Title>
          <Image src={YEARS[year]} preview={false} />
        </Space>
      </Col>
      <Col span={24} style={{ minHeight: 125 }}>
        <Typography.Text style={{ fontSize: 20, fontWeight: 400 }}>
          {desc}
        </Typography.Text>
      </Col>
    </Row>
  )
}

export default CardTimeLine
