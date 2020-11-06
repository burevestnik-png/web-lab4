import { PHONE_EXTENDED, transition } from '@theme/constants'
import styled from 'styled-components'

const ServiceList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;

    @media (max-width: ${PHONE_EXTENDED}px) {
        display: flex;
        flex-direction: column;
    }
`

export const ServiceItem = styled.div`
    display: flex;
    flex-direction: column;

    transition: all ${transition}s linear;

    h1 {
        font-size: 4rem;
        color: #e9eaed;
        font-weight: lighter;
        margin: 0;

        @media (max-width: ${PHONE_EXTENDED}px) {
            font-size: 5rem;
        }
    }

    h3 {
        font-size: 1.5rem;
        margin: 0.4rem 0;

        @media (max-width: ${PHONE_EXTENDED}px) {
            font-size: 2.6rem;
        }
    }

    p {
        font-size: 1.2rem;

        @media (max-width: ${PHONE_EXTENDED}px) {
            font-size: 1.8rem;
        }
    }
`

export default ServiceList
