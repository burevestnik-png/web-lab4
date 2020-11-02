import { secondaryColor } from '@theme/colorTheme'
import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
    background-color: ${secondaryColor};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: 100%;
    text-align: center;
`

export default Form
