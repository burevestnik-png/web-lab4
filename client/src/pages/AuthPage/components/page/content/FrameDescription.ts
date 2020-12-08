import { PHONE_EXTENDED, TABLET } from '@theme/constants'
import styled from 'styled-components'

const FrameDescription = styled.p`
    @media (max-width: ${TABLET}px) {
        font-size: 1.3rem !important;
    }

    @media (max-width: ${PHONE_EXTENDED}px) {
        font-size: 1.8rem !important;
    }
`

export default FrameDescription
