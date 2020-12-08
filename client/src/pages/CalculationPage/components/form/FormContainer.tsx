import { useFormInput } from '@hooks/useFormInput'
import {
    updateRAction,
    updateXAction,
    updateYAction,
} from '@state/calculationForm/actions'
import { CalculationFormState } from '@state/calculationForm/types'
import { addDot } from '@state/dot/actions'
import { AppState } from '@state/types'
import { showErrorSnack } from '@utils/services/snackBarService'
import isHit from '@utils/services/ValidationService'
import { useSnackbar } from 'notistack'
import React, { FormEvent, FunctionComponent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Dot from '../graph/svgElements/Dot'
import FormView from './FormView'

const yValidators: Validator[] = [
    {
        type: 'NULL_SAFETY',
        isValid: (value) => value !== '',
        errorMessage: 'Переменная Y не может быть пустой строкой',
    },
    {
        type: 'CHECK_TYPE',
        isValid: (value) => !!Number(value) || Number(value) === 0,
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
    const { x, r, y } = useSelector<AppState>(
        (state) => state?.calculationForm,
    ) as CalculationFormState
    const {
        validationState: yValidationState,
        onChange: onYInputChange,
        value: yValue,
    } = useFormInput(yValidators, undefined, (value: number) =>
        dispatch(updateYAction(value)),
    )

    useEffect(() => {
        return () => {
            const { cleanError, error } = yValidationState
            showErrorSnack(error, snack)
            cleanError()
        }
    }, [yValidationState.error, yValidationState.cleanError])

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (!x && x !== 0) {
            showErrorSnack('Выберите, пожалуйста, X', snack)
        }

        if ((y || y === 0) && (x || x === 0)) {
            const dot = new Dot(x, y, r)
            dispatch(addDot(dot, snack))
        }
    }

    return (
        <FormView
            onRButtonClick={(value: number) => dispatch(updateRAction(value))}
            onXButtonClick={(value: number) => dispatch(updateXAction(value))}
            onYInputChange={onYInputChange}
            yInitialValue={yValue}
            checkedX={x}
            checkedR={r}
            handleSubmit={handleSubmit}
        />
    )
}

export default FormContainer
