import { configureStore } from '@state/configureStore'
import { ThemeMode } from '@state/theme/types'
import { AppState } from '@state/types'
import 'normalize.css'
import React, { FunctionComponent } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import GlobalStyles from './globalStyles'
import { AuthPage } from './pages/AuthPage'
import { CalculationPage } from './pages/CalculationPage'

const initialState: AppState = {
    theme: { mode: (localStorage.getItem('theme') as ThemeMode) ?? 'light' },
}
const store = configureStore(initialState)

const App: FunctionComponent = () => (
    <Provider store={store}>
        <GlobalStyles />
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={AuthPage} />
                <Route exact path="/calculations" component={CalculationPage} />
                <Redirect from="/" to="/home" />
            </Switch>
        </BrowserRouter>
    </Provider>
)

export default App
