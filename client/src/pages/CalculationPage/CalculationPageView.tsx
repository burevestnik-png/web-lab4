import { SizedBox } from '@components/SizedBox'
import { secondaryColor } from '@theme/colorTheme'
import { transition } from '@theme/constants'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { FormContainer, Graph, Header, InputWrapper } from './components'
import { Table } from './components/table'

type CalculationPageViewProps = {}

const StyledContent = styled.div`
    min-height: calc(100vh - 4.5rem);
    background-color: ${secondaryColor};
    transition: all ${transition}s ease-in-out;
`

const CalculationPageView: FunctionComponent<CalculationPageViewProps> = () => {
    return (
        <>
            <Header />
            <StyledContent>
                <SizedBox height={'3rem'} />
                <InputWrapper>
                    <Graph />
                    <FormContainer />
                </InputWrapper>
                <SizedBox height="2rem" />
                <Table />
                <SizedBox height={'3rem'} />
            </StyledContent>
        </>
    )
}

export default CalculationPageView
