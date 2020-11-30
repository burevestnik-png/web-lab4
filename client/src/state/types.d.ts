import { CalculationFormState } from '@state/calculationForm/types'
import { ThemeState } from './theme/types'

interface AppState {
    theme: ThemeState
    calculationForm?: CalculationFormState
    userTokens?: UserTokensState
}

//https://stackoverflow.com/questions/51936369/what-is-the-record-type-in-typescript
type ApiResponse = Record<string, any>

type ApiStatus = '2R00' | '4R03' | '4R11'

interface ApiErrorResponse extends ApiResponse {
    status: ApiStatus
    description: string
}
