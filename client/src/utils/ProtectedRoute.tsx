import { ROOT } from '@utils/routes'
import React, { FC, FunctionComponent } from 'react'
import { Redirect, Route } from 'react-router-dom'

interface ProtectedRouteProps {
    component: FunctionComponent
    isAuthenticated: boolean
    [key: string]: any
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({
    component: Component,
    isAuthenticated,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (isAuthenticated) {
                    return <Component />
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: ROOT,
                                state: { from: props.location },
                            }}
                        />
                    )
                }
            }}
        />
    )
}

export default ProtectedRoute
