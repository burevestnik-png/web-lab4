import FormInput from '@components/FormInput'
import { SizedBox } from '@components/SizedBox'
import { useFormInputHook } from '@hooks/useFormInput'
import { primaryColor } from '@theme/colorTheme'
import React, { ChangeEvent, FC } from 'react'
import styled from 'styled-components'
import ButtonGroup from './ButtonGroup'
import FormButton from './FormButton'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    border: 2px solid ${primaryColor};
    border-radius: 0.4rem;

    width: 30%;
`

const Heading = styled.p`
    color: ${primaryColor};
`

type FormViewProps = {
    readonly onXButtonClick: (value: number) => void
    readonly onRButtonClick: (value: number) => void
    readonly onYInputChange: (event: ChangeEvent<HTMLInputElement>) => void
    readonly yInitialValue: string
    readonly checkedX: number | null
    readonly checkedR: number | null
}

const FormView: FC<FormViewProps> = ({
    onRButtonClick,
    onXButtonClick,
    onYInputChange,
    yInitialValue,
    checkedR,
    checkedX,
}) => {
    const xButtons = []
    const rButtons = []

    for (let value = -3; value < 6; value++) {
        xButtons.push(
            <FormButton
                onClick={() => onXButtonClick(value)}
                value={value}
                key={value}
                className={
                    value === null ? '' : value === checkedX ? 'checked' : ''
                }>
                {value}
            </FormButton>,
        )

        rButtons.push(
            <FormButton
                onClick={() => onRButtonClick(value)}
                value={value}
                key={value}
                className={
                    value === null ? '' : value === checkedR ? 'checked' : ''
                }>
                {value}
            </FormButton>,
        )
    }

    return (
        <Wrapper>
            <Heading style={{ fontStyle: 'italic' }}>
                Выберите нужные параметры
            </Heading>
            <Heading>Переменная X*:</Heading>
            <ButtonGroup>{xButtons}</ButtonGroup>

            <SizedBox height={'2.5rem'} />
            <FormInput
                id="y"
                label="Переменная Y"
                size="small"
                required
                variant="outlined"
                value={yInitialValue}
                onChange={onYInputChange}
            />

            <SizedBox height={'1.5rem'} />
            <Heading>Переменная R*:</Heading>
            <ButtonGroup>{rButtons}</ButtonGroup>

            <SizedBox height={'1.5rem'} />
        </Wrapper>
    )
}

export default FormView
