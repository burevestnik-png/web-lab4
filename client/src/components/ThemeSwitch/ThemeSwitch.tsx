import useWindowScrollPosition, { WindowScrollPosition } from '@rehooks/window-scroll-position'
import { transition } from '@theme/constants'
import React, { FunctionComponent, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import Switch from './Switch'
import { ComponentSize } from '@rehooks/component-size'

const ThemeSwitchWrapper = styled.div`
    position: fixed;
    top: 1.6rem;
    right: 0.5rem;
    width: 6.5rem;

    display: flex;
    align-items: center;

    user-select: none;
`

type ThemeSwitcherProps = {
    readonly onClick: () => void
    readonly headerSize: ComponentSize
}

const ThemeSwitcher: FunctionComponent<ThemeSwitcherProps> = ({
    onClick = () => {},
    headerSize,
}) => {
    const themeContext = useContext(ThemeContext)
    const scrollPosition = useWindowScrollPosition()

    const defineScrollPosition = (): boolean => {
        return headerSize.height * 0.9 - scrollPosition.y > 0
    }

    return (
        <ThemeSwitchWrapper>
            <span>&#127774;</span>
            <Switch onClick={onClick} theme={themeContext.mode} isHeader={defineScrollPosition()} />
            <span>&#127770;</span>
        </ThemeSwitchWrapper>
    )
}

export default ThemeSwitcher
