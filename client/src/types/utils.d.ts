export {}

declare global {
    type ValidationType = 'NULL_SAFETY' | 'CHECK_TYPE' | 'RANGE' | 'REGEXP'

    interface Validator {
        readonly type: ValidationType
        readonly isValid: (value: string) => boolean
        readonly errorMessage: string
    }
}
