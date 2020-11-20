import { ComponentSize } from '@rehooks/component-size'
import useWindowScrollPosition, { WindowScrollPosition } from '@rehooks/window-scroll-position'
import { AppState } from '@state/types'
import { PHONE, PHONE_EXTENDED } from '@theme/constants'
import React, { FunctionComponent, useContext } from 'react'
import { useSelector } from 'react-redux'
import styled, { ThemeContext } from 'styled-components'
import Switch from './Switch'

const Wrapper = styled.div`
    display: flex;
    align-items: center;

    user-select: none;
`

const FixedWrapper = styled(Wrapper)`
    position: fixed;
    top: 1.6rem;
    right: 0.5rem;
    width: 6.5rem;

    @media (max-width: ${PHONE}px) {
        display: none;
    }
`

const EmbeddedWrapper = styled(Wrapper)`
    display: none;

    @media (max-width: ${PHONE}px) {
        display: block;
    }

    @media (max-width: ${PHONE_EXTENDED}px) {
        display: none;
    }
`

type ThemeSwitcherProps = {
    readonly onClick: () => void
    readonly headerSize: ComponentSize
    readonly type?: 'fixed' | 'embedded'
}

const ThemeSwitcher: FunctionComponent<ThemeSwitcherProps> = ({
    onClick = () => {},
    headerSize,
    type = 'fixed',
}) => {
    const themeContext = useContext(ThemeContext)
    const scrollPosition = useWindowScrollPosition()
    const mode = useSelector<AppState>((state) => state.theme.mode)

    const defineScrollPosition = (): boolean => {
        return headerSize.height * 0.9 - scrollPosition.y > 0
    }

    return type == 'fixed' ? (
        <FixedWrapper>
            <span>&#127774;</span>
            <Switch
                checked={mode == 'dark'}
                onClick={onClick}
                theme={themeContext.mode}
                isHeader={defineScrollPosition()}
            />
            <span>&#127770;</span>
        </FixedWrapper>
    ) : (
        <EmbeddedWrapper>
            <span>&#127774;</span>
            <Switch
                checked={mode == 'dark'}
                onClick={onClick}
                theme={themeContext.mode}
                isHeader={defineScrollPosition()}
            />
            <span>&#127770;</span>
        </EmbeddedWrapper>
    )
}

export default ThemeSwitcher
