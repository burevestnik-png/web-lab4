import { CalculationFormState } from '@state/calculationForm/types'
import { ThemeState } from './theme/types'

interface AppState {
    theme: ThemeState
    calculationForm?: CalculationFormState
}
