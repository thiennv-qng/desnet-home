import { useSelector } from 'react-redux'

import { Col, Row, Image, Button, Space, Typography } from 'antd'
import DrawerHeader from './drawerHeader'

import { AppState } from 'store'
import { useContact } from 'hooks/useContact'

import LOGO from 'static/images/logo.png'
import LOGO_MOBILE from 'static/images/logo192.png'

export const SECTIONS_LIST = [
  { title: 'Home', route: 'home' },
  { title: 'Services', route: 'services' },
  { title: 'Projects', route: 'projects' },
  { title: 'Achievements', route: 'achievements' },
  { title: 'Process', route: 'process' },
  { title: 'About us', route: 'about-us' },
]

const Header = () => {
  const width = useSelector((state: AppState) => state.ui.width)
  const onContact = useContact()
  const isMobile = width < 998
  const logo = !isMobile ? LOGO : LOGO_MOBILE
  const scrollToSection = (id: string) => {
    if (!id) return

    const yOffset = -100 //88px that the height of header
    const el = document.getElementById(`${id}`)!
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset

    window.scrollTo({ top: y, behavior: 'smooth' })
  }
  return (
    <Row className="header" justify="space-between" align="middle">
      <Col>
        <Image src={logo} preview={false} className="header-logo" />
      </Col>
      {width > 815 && (
        <Col>
          <Space size={40}>
            {SECTIONS_LIST.map(({ title, route }) => (
              <Typography.Text
                style={{ color: '#F3F4F3', cursor: 'pointer' }}
                key={route}
                onClick={() => scrollToSection(route)}
                className="section"
              >
                {title}
              </Typography.Text>
            ))}
          </Space>
        </Col>
      )}
      <Space size={16}>
        {width <= 815 && <DrawerHeader scrollToSection={scrollToSection} />}
        <Col>
          <Button onClick={onContact} type="primary">
            Contact us
          </Button>
        </Col>
      </Space>
    </Row>
  )
}

export default Header
