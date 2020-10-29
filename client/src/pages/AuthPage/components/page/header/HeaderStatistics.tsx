import { whiteDarken1 } from '@theme/constants'
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
`

const Statistics = styled.div`
    display: flex;

    ${StatItem} + ${StatItem} {
        margin-left: 3rem;
    }
`

export { Statistics, StatItem }
