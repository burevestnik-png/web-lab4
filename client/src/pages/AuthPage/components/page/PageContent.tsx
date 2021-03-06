import WebYarki1 from '@assets/labScreenshots/yarki_lab1.png'
import WebKefir1 from '@assets/labScreenshots/alex_lab1.png'
import Web2 from '@assets/labScreenshots/lab2.png'
import Web3 from '@assets/labScreenshots/lab3.png'
import { Container } from '@components/Container'
import { SizedBox } from '@components/SizedBox'
import React, { FunctionComponent } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {
    ContentHeader,
    FrameDescription,
    ServiceItem,
    ServiceList,
    TeacherList,
} from './content'
import servicesData from './data/services.json'

const PageContent: FunctionComponent = () => (
    <Container paddingTop={'1rem'}>
        <ContentHeader id="services">Наши услуги</ContentHeader>
        <ServiceList>
            {servicesData.map((service, index) => (
                <ServiceItem key={index}>
                    <ContentHeader>{`0${index}`}</ContentHeader>
                    <h3>{service.header}</h3>
                    <p>{service.desc}</p>
                </ServiceItem>
            ))}
        </ServiceList>

        <SizedBox height={'3rem'} />

        <ContentHeader id="projects">Проекты</ContentHeader>
        <Carousel
            showStatus={false}
            showThumbs={false}
            autoPlay
            infiniteLoop
            swipeable
            dynamicHeight>
            <div>
                <img src={WebYarki1} alt="" style={{ height: '40%' }} />
                <FrameDescription className="legend">
                    Первая лабораторная, выполненная @Yarki
                </FrameDescription>
            </div>

            <div>
                <img src={WebKefir1} alt="" style={{ height: '40%' }} />
                <FrameDescription className="legend">
                    Первая лабораторная, выполненная @Aleksei
                </FrameDescription>
            </div>

            <div>
                <img src={Web2} alt="" style={{ height: '40%' }} />
                <FrameDescription className="legend">
                    Вторая лабораторная, выполненная нашей командой
                </FrameDescription>
            </div>

            <div>
                <img src={Web3} alt="" style={{ height: '40%' }} />
                <FrameDescription className="legend">
                    Третья лабораторная, выполненная нашей командой
                </FrameDescription>
            </div>
        </Carousel>

        <SizedBox height={'4rem'} />

        <ContentHeader id="passed-to">Мы сдавали</ContentHeader>
        <TeacherList />
    </Container>
)

export default PageContent
