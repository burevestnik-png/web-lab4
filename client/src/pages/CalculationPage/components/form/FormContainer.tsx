import { useFormInput } from '@hooks/useFormInput'
import {
    updateRAction,
    updateXAction,
    updateYAction,
} from '@state/calculationForm/actions'
import { CalculationFormState } from '@state/calculationForm/types'
import { AppState } from '@state/types'
import { showErrorSnack } from '@utils/SnackBarService'
import { useSnackbar } from 'notistack'
import React, { FunctionComponent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormView from './FormView'

const yValidators: Validator[] = [
    {
        type: 'NULL_SAFETY',
        isValid: (value) => value !== '',
        errorMessage: 'Переменная Y не может быть пустой строкой',
    },
    {
        type: 'CHECK_TYPE',
        isValid: (value) => !!Number(value),
        errorMessage: 'Переменная Y должна быть числом',
    },
    {
        type: 'RANGE',
        isValid: (value) => Number(value) >= -5 && Number(value) <= 5,
        errorMessage: 'Переменная Y должна находиться в промежутке от -5 до 5',
    },
]

const FormContainer: FunctionComponent = () => {
    const dispatch = useDispatch()
    const snack = useSnackbar()
    const formValues = useSelector<AppState>(
        (state) => state?.calculationForm,
    ) as CalculationFormState
    const {
        validationState: yValidationState,
        onChange: onYInputChange,
        value: y,
    } = useFormInput(yValidators, undefined, (value: number) =>
        dispatch(updateYAction(value)),
    )

    useEffect(() => {
        return () => {
            showErrorSnack(yValidationState.error, snack)
            yValidationState.cleanError()
        }
    }, [yValidationState.error, yValidationState.cleanError])

    return (
        <FormView
            onRButtonClick={(value: number) => dispatch(updateRAction(value))}
            onXButtonClick={(value: number) => dispatch(updateXAction(value))}
            onYInputChange={onYInputChange}
            yInitialValue={y}
            checkedX={formValues.x}
            checkedR={formValues.r}
        />
    )
}

export default FormContainer
