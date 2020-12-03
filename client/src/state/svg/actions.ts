import { ADD_DOT } from '@state/svg/actionTypes'
import Dot from '../../pages/CalculationPage/components/graph/svgElements/Dot'

export const addDot = (dot: Dot): AddDotAction => {
    return {
        type: ADD_DOT,
        dot,
    }
}
