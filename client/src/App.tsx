import { configureStore } from '@state/configureStore'
import { rootSaga } from '@state/rootSaga'
import { ThemeMode } from '@state/theme/types'
import { AppState } from '@state/types'
import history from '@utils/history'
import ProtectedRoute from '@utils/ProtectedRoute'
import { CALCULATIONS, ROOT } from '@utils/routes'
import 'normalize.css'
import { SnackbarProvider } from 'notistack'
import React, { FunctionComponent } from 'react'
import { Provider } from 'react-redux'
import { Redirect, Route, Router, Switch } from 'react-router-dom'
import GlobalStyles from './globalStyles'
import { AuthPage } from './pages/AuthPage'
import { CalculationPage } from './pages/CalculationPage'

const initialState: AppState = {
    theme: { mode: (localStorage.getItem('theme') as ThemeMode) ?? 'light' },
    userTokens: {
        accessToken: localStorage.getItem('accessToken') ?? '',
        refreshToken: localStorage.getItem('refreshToken') ?? '',
        loading: false,
        errors: [],
    },
}
const storeWrapper = configureStore(initialState)
storeWrapper.runSagas(rootSaga)

const App: FunctionComponent = () => (
    <Provider store={storeWrapper.store}>
        <SnackbarProvider maxSnack={4}>
            <GlobalStyles />
            <Router history={history}>
                <Switch>
                    <Route exact path={ROOT} component={AuthPage} />
                    <ProtectedRoute
                        component={CalculationPage}
                        isAuthenticated={!!localStorage.getItem('accessToken')}
                        path={CALCULATIONS}
                        exact
                    />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </SnackbarProvider>
    </Provider>
)

export default App
