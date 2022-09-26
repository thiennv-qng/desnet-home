import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Button, Col, Row, Space, Typography } from 'antd'
import { Lazy, Navigation } from 'swiper'
import CardTimeLine from './cardTimeLine'
import IonIcon from 'components/icon'

import { TIMELINE } from './constant'
import { AppState } from 'store'

import BG_BANNER from 'static/images/banner.png'

import 'swiper/css/bundle'
import './index.less'

const DEFAULT_NEXT_CLN = '.swiper-next-element'
const DEFAULT_PREV_CLN = '.swiper-prev-element'

const navigateConfig = {
  nextEl: DEFAULT_NEXT_CLN,
  prevEl: DEFAULT_PREV_CLN,
}

const AboutUs = () => {
  const width = useSelector((state: AppState) => state.ui.width)
  const isMobile = width < 502

  return (
    <div
      id="about-us"
      className="about-us"
      style={{ background: `url(${BG_BANNER})` }}
    >
      <Row gutter={[0, 72]} className="about-us_content">
        <Col span={24} style={{ textAlign: 'center' }}>
          <Typography.Title
            style={{ color: '#F3F4F3' }}
            className="title-section"
          >
            About us
          </Typography.Title>
        </Col>
        <Col span={24}>
          {isMobile ? (
            <Row gutter={[0, 16]}>
              {TIMELINE.map(({ desc, quarter, year }, index) => (
                <Col span={24} key={desc}>
                  <CardTimeLine
                    index={index + 1}
                    desc={desc}
                    quarter={quarter}
                    year={year}
                  />
                </Col>
              ))}
            </Row>
          ) : (
            <Swiper
              lazy
              modules={[Navigation, Lazy]}
              navigation={navigateConfig}
              slidesPerView={4}
            >
              {TIMELINE.map(({ desc, quarter, year }, index) => (
                <SwiperSlide key={desc}>
                  <CardTimeLine
                    index={index + 1}
                    desc={desc}
                    quarter={quarter}
                    year={year}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Col>
        {!isMobile && (
          <Col span={24} style={{ textAlign: 'center' }}>
            <Space size={0}>
              <Button
                type="text"
                className="swiper-prev-element"
                icon={<IonIcon name="arrow-back-outline" />}
              />
              {/* Button next slide */}
              <Button
                type="text"
                className="swiper-next-element"
                icon={<IonIcon name="arrow-forward-outline" />}
                style={{ padding: 2 }}
              />
            </Space>
          </Col>
        )}
      </Row>
    </div>
  )
}

export default AboutUs
