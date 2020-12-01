import { ADD_DOT } from '@state/svg/actionTypes'

export {}

declare global {
    interface SvgState {
        dots: JSX.Element[]
    }

    interface AddDotAction {
        type: typeof ADD_DOT
        dot: JSX.Element
    }

    type SvgStateActions = AddDotAction
}
