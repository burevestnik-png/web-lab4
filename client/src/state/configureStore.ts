import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import { themeReducer } from './theme/reducers'
import { AppState } from './types'

export const configureStore = (initialState: AppState): Store<AppState> => {
    const middlewares = applyMiddleware()
    const rootReducer = combineReducers<AppState>({ theme: themeReducer })
    return createStore(rootReducer, initialState, middlewares)
}
