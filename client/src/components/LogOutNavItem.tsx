import { BaseNavItem } from '@components/HeaderNavigation'
import { logOut } from '@state/user/actions'
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

const LogOutNavItem = () => {
    const dispatch = useDispatch()

    const handleClick = useCallback(() => {
        dispatch(logOut())
        window.location.reload()
    }, [])

    return <BaseNavItem onClick={handleClick}>Выйти</BaseNavItem>
}

export default LogOutNavItem
