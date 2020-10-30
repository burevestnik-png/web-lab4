import WebYarki1 from '@assets/web-1-yarki.png'
import Container from '@components/Container'
import SizedBox from '@components/SizedBox'
import { secondaryColor } from '@theme/colorTheme'
import React, { FunctionComponent } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import ServiceList, { ServiceItem } from './content/ServiceList'
import TeacherList from './content/TeacherList'
import servicesData from './data/services.json'

const PageContent: FunctionComponent = () => (
    <Container paddingTop={'1rem'}>
        <h1>Наши услуги</h1>
        <ServiceList>
            {servicesData.map((service, index) => (
                <ServiceItem key={index}>
                    <h1>{`0${index}`}</h1>
                    <h3>{service.header}</h3>
                    <p>{service.desc}</p>
                </ServiceItem>
            ))}
        </ServiceList>

        <SizedBox height={'2rem'} />

        <h1>Проекты</h1>
        <Carousel showStatus={false} showThumbs={false} autoPlay infiniteLoop swipeable>
            <div>
                <img src={WebYarki1} alt="" />
                <p className="legend">Первая лабораторная, выполненная @Yarki</p>
            </div>

            <div>
                <img src={WebYarki1} alt="" />
                <p className="legend">Первая лабораторная, выполненная @Aleksei</p>
            </div>

            <div>
                <img src={WebYarki1} alt="" />
                <p className="legend">Вторая лабораторная, выполненная нашей командой</p>
            </div>

            <div>
                <img src={WebYarki1} alt="" />
                <p className="legend">Третья лабораторная, выполненная нашей командой</p>
            </div>
        </Carousel>

        <SizedBox height={'3rem'} />

        <h1>Мы сдавали</h1>
        <TeacherList />
    </Container>
)

export default PageContent
