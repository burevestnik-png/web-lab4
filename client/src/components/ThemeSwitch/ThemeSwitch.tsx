import { ComponentSize } from '@rehooks/component-size'
import useWindowScrollPosition, { WindowScrollPosition } from '@rehooks/window-scroll-position'
import { changeTheme } from '@state/theme/actions'
import { AppState } from '@state/types'
import { PHONE, PHONE_EXTENDED } from '@theme/constants'
import React, { FunctionComponent, useCallback, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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

type EmbeddedWrapperProps = {
    readonly responsive?: boolean
}

const EmbeddedWrapper = styled(Wrapper)<EmbeddedWrapperProps>`
    display: ${(props) => (props.responsive ? 'none' : 'block')};

    @media (max-width: ${PHONE}px) {
        display: block;
    }

    @media (max-width: ${PHONE_EXTENDED}px) {
        display: ${(props) => (props.responsive ? 'none' : 'block')};
    }
`

type ThemeSwitcherProps = {
    readonly headerSize?: ComponentSize
    readonly type?: 'fixed' | 'embedded'
    readonly responsive?: boolean
}

const ThemeSwitcher: FunctionComponent<ThemeSwitcherProps> = ({
    headerSize,
    type = 'fixed',
    responsive = false,
}) => {
    const themeContext = useContext(ThemeContext)
    const scrollPosition = useWindowScrollPosition()
    const mode = useSelector<AppState>((state) => state.theme.mode)
    const dispatch = useDispatch()

    const themeChangeAction = useCallback(() => {
        dispatch(changeTheme())
    }, [])

    const defineScrollPosition = (): boolean => {
        return headerSize?.height * 0.9 - scrollPosition.y > 0 ?? true
    }

    if (!responsive) {
        return (
            <EmbeddedWrapper>
                <span>&#127774;</span>
                <Switch
                    checked={mode == 'dark'}
                    onClick={themeChangeAction}
                    theme={themeContext.mode}
                    isHeader={defineScrollPosition()}
                />
                <span>&#127770;</span>
            </EmbeddedWrapper>
        )
    }

    return type == 'fixed' ? (
        <FixedWrapper>
            <span>&#127774;</span>
            <Switch
                checked={mode == 'dark'}
                onClick={themeChangeAction}
                theme={themeContext.mode}
                isHeader={defineScrollPosition()}
            />
            <span>&#127770;</span>
        </FixedWrapper>
    ) : (
        <EmbeddedWrapper responsive>
            <span>&#127774;</span>
            <Switch
                checked={mode == 'dark'}
                onClick={themeChangeAction}
                theme={themeContext.mode}
                isHeader={defineScrollPosition()}
            />
            <span>&#127770;</span>
        </EmbeddedWrapper>
    )
}

export default ThemeSwitcher
