import { ChangeEvent, useCallback, useState } from 'react'

export interface useFormInputHook {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    validationState: ValidationState
}

export interface ValidationState {
    error: string | null
    cleanError: () => void
    isValid: boolean
    errorType: ValidationType | null
}

export const useFormInput = (
    validators?: Validator[],
    initialValue: string = '',
    dispatch: (value: number) => void = () => {},
): useFormInputHook => {
    const [value, setValue] = useState<string>(initialValue ?? '')
    const [error, setError] = useState<string>(null)
    const [isValid, setValidity] = useState<boolean>(false)
    const [validationType, setValidationType] = useState<ValidationType>(null)

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        for (const validator of validators) {
            if (!validator.isValid(e.target.value)) {
                setValidity(false)
                setValidationType(validator.type)

                if (validator.type == 'NULL_SAFETY') {
                    setValue('')
                }

                if (validator.type == 'CHECK_TYPE' && e.target.value === '-') {
                    setValue('-')
                    return
                }

                setError(validator.errorMessage)
                return
            }
        }

        setValidity(true)
        setValue(e.target.value)
        dispatch(+e.target.value)
    }, [])

    const cleanError = useCallback(() => {
        setError(null)
    }, [])

    return {
        value,
        onChange,
        validationState: {
            error,
            cleanError,
            isValid,
            errorType: validationType,
        },
    }
}
