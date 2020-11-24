import { calculationFormReducer } from '@state/calculationForm/reducers'
import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import logger from 'redux-logger'
import { themeReducer } from './theme/reducers'
import { AppState } from './types'

export const configureStore = (initialState: AppState): Store<AppState> => {
    const middlewares = applyMiddleware(logger)
    const rootReducer = combineReducers<AppState>({
        theme: themeReducer,
        calculationForm: calculationFormReducer,
    })
    return createStore(rootReducer, initialState, middlewares)
}
