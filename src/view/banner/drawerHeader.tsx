import { Fragment, useState } from 'react'

import { Drawer, List, Typography } from 'antd'
import IonIcon from 'components/icon'
import { SECTIONS_LIST } from './header'

const DrawerHeader = ({
  scrollToSection,
}: {
  scrollToSection: (route: string) => void
}) => {
  const [visible, setVisible] = useState(false)
  return (
    <Fragment>
      <IonIcon
        name="menu-outline"
        onClick={() => setVisible(true)}
        style={{ fontSize: 24, color: '#F3F4F3', cursor: 'pointer' }}
      />

      <Drawer
        placement="right"
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <List
          dataSource={SECTIONS_LIST}
          renderItem={(item) => (
            <List.Item
              onClick={() => scrollToSection(item.route)}
              style={{ borderBottom: 'none', cursor: 'pointer' }}
            >
              <Typography.Text>{item.title}</Typography.Text>
            </List.Item>
          )}
        />
      </Drawer>
    </Fragment>
  )
}

export default DrawerHeader
