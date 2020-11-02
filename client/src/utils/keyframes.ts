import { keyframes } from 'styled-components'

const show = keyframes`
    0%, 49.99% {
        opacity: 0;
        z-index: 1;
    }
    
    50%, 100% {
        opacity: 1;
        z-index: 5;
    }
`

export { show }
