import { SizedBox } from '@components/SizedBox'
import React, { FunctionComponent } from 'react'
import { FormContainer, Graph, Header, InputWrapper } from './components'
import { Table } from './components/table'

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
            <SizedBox height="2rem" />
            <Table />
        </>
    )
}

export default CalculationPageView
