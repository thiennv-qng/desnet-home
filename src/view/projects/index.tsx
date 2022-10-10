import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Col, Row, Typography, Image } from 'antd'

import { AppState } from 'store'

import PROJECT1 from 'static/images/projects/project1.png'
import PROJECT2 from 'static/images/projects/project2.png'
import PROJECT3 from 'static/images/projects/project3.png'

import PROJECT1_MOBILE from 'static/images/projects/project1-mobile.png'
import PROJECT2_MOBILE from 'static/images/projects/project2-mobile.png'
import PROJECT3_MOBILE from 'static/images/projects/project3-mobile.png'

import './index.less'

const Projects = () => {
  const width = useSelector((state: AppState) => state.ui.width)
  const isMobile = width < 575

  const PROJECTS = [
    {
      name: 'Sentre',
      img: isMobile ? PROJECT1_MOBILE : PROJECT1,
      url: 'https://hub.sentre.io/app/store',
    },
    {
      name: 'InterDAO',
      img: isMobile ? PROJECT2_MOBILE : PROJECT2,
      url: 'https://hub.sentre.io/app/inter_dao?autoInstall=true',
    },
    {
      name: 'Any Arts',
      img: isMobile ? PROJECT3_MOBILE : PROJECT3,
      url: 'https://hub.sentre.io/app/any_arts?autoInstall=true',
    },
  ]

  const setMultiAttributes = useCallback(
    (el: Element, attrs: Record<string, string | number>) => {
      let value: string[] = []
      for (const key in attrs) {
        value.push(`${key}: ${attrs[key]}`)
      }
      el.setAttribute('style', value.join(';'))
    },
    [],
  )

  const getScaleRatio = useCallback((val: number) => {
    const nextVal = Math.round(val)

    if (val < 10) return `00${nextVal}`
    if (val < 100) return `0${nextVal}`
    return nextVal
  }, [])

  useEffect(() => {
    const parallaxItems = document.querySelectorAll('.parallax-item')
    if (!parallaxItems) return
    const wHeight = window.innerHeight

    window.addEventListener('scroll', (e) => {
      for (const elm of parallaxItems) {
        const boundingElm = elm.getBoundingClientRect()
        const childElm = elm.querySelector('.ant-image-img')
        const elmTop = boundingElm.top
        const scaleRatio = getScaleRatio(elmTop)

        const activeViewPort = elmTop > 0 && elmTop < wHeight
        if (!activeViewPort || !childElm) continue
        setMultiAttributes(childElm, {
          transform: `scale(1.${scaleRatio})`,
        })
      }
    })

    return () => window.removeEventListener('scroll', () => {})
  }, [getScaleRatio, setMultiAttributes])

  return (
    <Row gutter={[0, { xs: 32, sm: 32, md: 72, lg: 72 }]} id="projects">
      <Col span={24} style={{ textAlign: 'center' }}>
        <Typography.Title className="title-section" level={1}>
          Recent Projects
        </Typography.Title>
      </Col>
      <div className="wrapper-parallax">
        {PROJECTS.map(({ img, name, url }, idx) => (
          <div className="parallax-item" key={idx}>
            <div className="parallax-img">
              <Image src={img} preview={false} />
              <Typography.Title
                onClick={() => window.open(url, '_blank')}
                className="project-title title-section"
              >
                {name}
              </Typography.Title>
            </div>
            <div className="parallax-padding" />
          </div>
        ))}
      </div>
    </Row>
  )
}

export default Projects
