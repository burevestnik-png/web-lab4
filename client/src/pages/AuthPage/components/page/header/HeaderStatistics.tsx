import { PHONE, PHONE_EXTENDED, whiteDarken1 } from '@theme/constants'
import React from 'react'
import styled from 'styled-components'

const StatItem = styled.div`
    display: flex;
    flex-direction: column;

    span:first-child {
        font-size: 1.9rem;
        margin-bottom: 0.5rem;
    }

    span + span {
        color: ${whiteDarken1};
    }

    @media (max-width: ${PHONE_EXTENDED}px) {
        align-items: center;
        text-align: center;

        span:first-child {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
        }

        span + span {
            font-size: 1.5rem;
        }
    }
`

const Statistics = styled.div`
    display: flex;

    ${StatItem} + ${StatItem} {
        margin-left: 3rem;
    }

    @media (max-width: ${PHONE}px) {
        justify-content: center;
    }

    @media (min-width: ${PHONE_EXTENDED}px) and (max-width: ${PHONE}px) {
        ${StatItem} + ${StatItem} {
            margin-left: 6rem;
        }
    }

    @media (max-width: ${PHONE_EXTENDED}px) {
        justify-content: space-around;
    }
`

export { Statistics, StatItem }
