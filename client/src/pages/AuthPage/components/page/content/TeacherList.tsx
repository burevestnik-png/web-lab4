import {
    Afanasiev,
    Klimenkov,
    Nikolaev,
    Perminov,
    Pismak,
    Tsopa,
    Yarkeev,
} from '@assets/teachers/index'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const TeacherListWrapper = styled.div`
    display: flex;

    img {
        width: 73px;
        height: 73px;
        object-fit: cover;
    }
`

const TeacherList: FunctionComponent = () => (
    <TeacherListWrapper>
        <img src={Pismak} alt="" />
        <img src={Yarkeev} alt="" />
        <img src={Afanasiev} alt="" />
        <img src={Tsopa} alt="" />
        <img src={Perminov} alt="" />
        <img src={Klimenkov} alt="" />
        <img src={Nikolaev} alt="" />
    </TeacherListWrapper>
)

export default TeacherList
