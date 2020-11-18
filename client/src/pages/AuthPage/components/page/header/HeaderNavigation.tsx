import { PHONE } from '@theme/constants'
import styled from 'styled-components'

const Navigation = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    height: 6rem;

    a + a {
        margin-left: 1rem;
    }

    @media (max-width: ${PHONE}px) {
        justify-content: space-between;
    }
`

const NavItem = styled.a`
    text-decoration: none;

    @media (max-width: ${PHONE}px) {
        font-size: 1.3rem;
    }
`

export { Navigation, NavItem }
