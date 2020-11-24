import { primaryColor } from '@theme/colorTheme'
import styled from 'styled-components'

const ButtonGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    border: 1px solid ${primaryColor};
    border-radius: 0.4rem;
`
export default ButtonGroup
