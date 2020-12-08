import { PHONE, PHONE_EXTENDED, transition } from '@theme/constants'
import styled from 'styled-components'

const ContentHeader = styled.h1`
    transition: all ${transition}s linear;

    @media (max-width: ${PHONE}px) {
        font-size: 2.6rem;
    }

    @media (max-width: ${PHONE_EXTENDED}px) {
        font-size: 3.5rem;
        margin-top: 0;
    }
`

export default ContentHeader
