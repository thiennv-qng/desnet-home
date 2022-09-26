import { Col, Row, Typography, Image } from 'antd'
import { useCallback, useEffect } from 'react'

import PROJECT1 from 'static/images/projects/project1.png'
import PROJECT2 from 'static/images/projects/project2.png'
import PROJECT3 from 'static/images/projects/project3.png'

import './index.less'

const PROJECTS = [
  { name: 'Sentre', img: PROJECT1, url: 'https://hub.sentre.io/app/store' },
  {
    name: 'Inter DAO',
    img: PROJECT2,
    url: 'https://hub.sentre.io/app/inter_dao?autoInstall=true',
  },
  {
    name: 'Any Art',
    img: PROJECT3,
    url: 'https://hub.sentre.io/app/any_arts?autoInstall=true',
  },
]

const Projects = () => {
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
    <Row gutter={[0, 72]} id="projects">
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
