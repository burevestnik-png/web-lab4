import { Button } from '@components/Button'
import { whiteDarken1 } from '@theme/constants'
import styled from 'styled-components'

const OverlayButton = styled(Button)`
    background-color: transparent;
    border: 1px solid ${whiteDarken1};
    color: ${whiteDarken1};

    font-size: 0.8rem;

    &:hover {
        border: 1px solid white;
        color: white;
        background-color: transparent;
    }
`

export default OverlayButton
