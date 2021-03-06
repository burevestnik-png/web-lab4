import { PHONE, TABLET } from '@theme/constants'
import { rgba } from '@utils/styledComponents/cssRgba'
import styled from 'styled-components'
import { StyledModal } from './Modal'
import ModalButton from './ModalButton'

const ModalWrapper = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;

    z-index: 300;

    @media (max-width: ${TABLET}px) {
        align-items: flex-end;
        width: 95%;

        margin-bottom: 2rem;
    }

    &.is-open {
        height: 100%;
        background-color: ${rgba('#333', 0.85)};

        ${ModalButton} {
            display: none;
        }

        ${StyledModal} {
            position: relative;
            overflow: hidden;

            opacity: 1;
            transition-duration: 0.6s;
            pointer-events: auto;
            min-height: 30rem;
            transform: translateY(0) scale(1);
        }

        @media (max-width: ${TABLET}px) {
            align-items: center;
            width: 100%;

            margin: 0;
        }
    }
`

export default ModalWrapper
