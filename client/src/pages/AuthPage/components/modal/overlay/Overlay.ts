import { primaryColor } from '@theme/colorTheme'
import { blackLighten1 } from '@theme/constants'
import styled from 'styled-components'

const Overlay = styled.div`
    background: ${blackLighten1};
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
`

export default Overlay
