import WebYarki1 from '@assets/web-1-yarki.png'
import { Container } from '@components/Container'
import { SizedBox } from '@components/SizedBox'
import React, { FunctionComponent } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { ContentHeader, ServiceItem, ServiceList, TeacherList } from './content'
import servicesData from './data/services.json'

const PageContent: FunctionComponent = () => (
    <Container paddingTop={'1rem'}>
        <ContentHeader>Наши услуги</ContentHeader>
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

        <ContentHeader>Проекты</ContentHeader>
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

        <SizedBox height={'4rem'} />

        <ContentHeader>Мы сдавали</ContentHeader>
        <TeacherList />
    </Container>
)

export default PageContent
