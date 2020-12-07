import { calculationFormReducer } from '@state/calculationForm/reducers'
import { dotReducer } from '@state/dot/reducer'
import { userTokensReducer } from '@state/user/reducer'
import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import logger from 'redux-logger'

import createSagaMiddleware from 'redux-saga'
import { themeReducer } from './theme/reducers'
import { AppState } from './types'

export interface ConfigureStore {
    readonly store: Store<AppState>
    readonly runSagas: Function
}

export const configureStore = (initialState: AppState): ConfigureStore => {
    const sagaMiddleware = createSagaMiddleware()
    const middlewares: any[] = [sagaMiddleware]

    if (process.env.NODE_ENV === 'development') {
        middlewares.push(logger)
    }

    const rootReducer = combineReducers<AppState>({
        theme: themeReducer,
        dots: dotReducer,
        calculationForm: calculationFormReducer,
        userTokens: userTokensReducer,
    })

    return {
        store: createStore(
            rootReducer,
            initialState,
            applyMiddleware(...middlewares),
        ),
        runSagas: sagaMiddleware.run,
    }
}
