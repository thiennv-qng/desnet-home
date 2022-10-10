import { Card, Space, Typography } from 'antd'

type CardAchievementProps = {
  label: string
  description: string
  className?: string
}

const CardAchievement = (props: CardAchievementProps) => {
  const { description, label, className } = props
  return (
    <Card className={`${className} achievement-card`} bordered={false}>
      <Space direction="vertical">
        <Typography.Title level={4}>{label}</Typography.Title>
        <Typography.Text>{description}</Typography.Text>
      </Space>
    </Card>
  )
}

export default CardAchievement
