import { Button } from '@components/Button'
import { TABLET } from '@theme/constants'
import styled from 'styled-components'

const ModalButton = styled(Button)`
    border: 0;
    outline: 0;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);

    &.responsive {
        display: none;
    }

    @media (max-width: ${TABLET}px) {
        display: none;

        &.responsive {
            display: flex;
            align-items: center;
            justify-content: center;

            padding: 0;

            border-radius: 50%;
            width: 5rem;
            height: 5rem;

            i {
                font-size: 3rem;
            }
        }
    }
`

export default ModalButton
