import { configureStore } from '@state/configureStore'
import { ThemeMode } from '@state/theme/types'
import { AppState } from '@state/types'
import 'normalize.css'
import React, { FunctionComponent } from 'react'
import { Provider } from 'react-redux'
import GlobalStyles from './globalStyles'
import AuthPageContainer from './pages/AuthPage'

const initialState: AppState = {
    theme: { mode: (localStorage.getItem('theme') as ThemeMode) ?? 'light' },
}
const store = configureStore(initialState)

const App: FunctionComponent = () => (
    <Provider store={store}>
        <GlobalStyles />
        <AuthPageContainer />
    </Provider>
)

export default App
