import { Button } from '@components/Button'
import FormInput from '@components/FormInput'
import { SizedBox } from '@components/SizedBox'
import { useFormInputHook } from '@hooks/useFormInput'
import { Tooltip } from '@material-ui/core'
import { primaryColor } from '@theme/colorTheme'
import { TABLET } from '@theme/constants'
import React, { ChangeEvent, FC, FormEvent } from 'react'
import styled from 'styled-components'
import ButtonGroup from './ButtonGroup'
import FormButton from './FormButton'

const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    border: 2px solid ${primaryColor};
    border-radius: 0.4rem;

    width: 30%;

    @media (max-width: ${TABLET}px) {
        width: 70%;
    }
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
    readonly handleSubmit: (event: FormEvent) => void
}

const FormView: FC<FormViewProps> = ({
    onRButtonClick,
    onXButtonClick,
    onYInputChange,
    yInitialValue,
    checkedR,
    checkedX,
    handleSubmit,
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
    }

    for (let value = 1; value <= 5; value++) {
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
        <Wrapper onSubmit={handleSubmit}>
            <Heading style={{ fontStyle: 'italic' }}>
                Выберите нужные параметры
            </Heading>
            <Heading>Переменная X*:</Heading>
            <ButtonGroup>{xButtons}</ButtonGroup>

            <SizedBox height={'2.5rem'} />
            <Tooltip title="Допустимые значения: от -5 до 5" placement={'top'}>
                <FormInput
                    id="y"
                    label="Переменная Y"
                    size="small"
                    required
                    variant="outlined"
                    value={yInitialValue}
                    onChange={onYInputChange}
                />
            </Tooltip>

            <SizedBox height={'1.5rem'} />
            <Heading>Переменная R*:</Heading>
            <ButtonGroup>{rButtons}</ButtonGroup>

            <SizedBox height={'1.5rem'} />
            <Button>Отправить</Button>
            <SizedBox height={'1.5rem'} />
        </Wrapper>
    )
}

export default FormView
