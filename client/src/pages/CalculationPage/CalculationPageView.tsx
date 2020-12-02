import { SizedBox } from '@components/SizedBox'
import React, { FunctionComponent } from 'react'
import { FormContainer, Graph, Header, InputWrapper } from './components'

type CalculationPageViewProps = {}

const CalculationPageView: FunctionComponent<CalculationPageViewProps> = () => {
    return (
        <>
            <Header />
            <SizedBox height={'3rem'} />
            <InputWrapper>
                <Graph />
                <FormContainer />
            </InputWrapper>
        </>
    )
}

export default CalculationPageView
