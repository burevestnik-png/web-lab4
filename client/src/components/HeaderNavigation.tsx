import { PHONE } from '@theme/constants'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll/modules'
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

const NavItem = styled(Link)`
    text-decoration: none;
    color: white;

    @media (max-width: ${PHONE}px) {
        font-size: 1.3rem;
    }
`

const ScrollNavItem = styled(ScrollLink)`
    text-decoration: none;
    cursor: pointer;

    @media (max-width: ${PHONE}px) {
        font-size: 1.3rem;
    }
`

export { Navigation, NavItem, ScrollNavItem }
