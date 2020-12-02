import { BaseNavItem } from '@components/HeaderNavigation'
import { logOut } from '@state/user/actions'
import history from '@utils/history'
import { ROOT } from '@utils/routes'
import React, { FC, useCallback } from 'react'
import { useDispatch } from 'react-redux'

interface LogOutNavItemProps {
    readonly shouldNavigateRoot?: boolean
}

const LogOutNavItem: FC<LogOutNavItemProps> = ({
    shouldNavigateRoot = true,
}) => {
    const dispatch = useDispatch()

    const handleClick = useCallback(() => {
        dispatch(logOut())
        shouldNavigateRoot ? history.push(ROOT) : window.location.reload()
    }, [])

    return <BaseNavItem onClick={handleClick}>Выйти</BaseNavItem>
}

export default LogOutNavItem
