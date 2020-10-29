import React from 'react'
import styled from 'styled-components'

import logo from '@assets/images/logo.png'

const Logo = styled.img`
    position: fixed;
    height: 6rem;
    left: 1rem;
`

const PageLogo = () => <Logo src={logo} />
export default PageLogo
