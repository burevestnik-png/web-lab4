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
`

const NavItem = styled.a`
    text-decoration: none;
`

export { Navigation, NavItem }
