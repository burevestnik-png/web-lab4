import theme, { ThemeMap } from 'styled-theming'

const MODE_CRITERIA: string = 'mode'

interface ColorTheme extends ThemeMap {
    readonly light: string
    readonly dark: string
}

export const primaryColor = theme(MODE_CRITERIA, <ColorTheme>{
    light: '#001544',
    dark: '#D3CFC9',
})

export const secondaryColor = theme(MODE_CRITERIA, <ColorTheme>{
    light: '#FFFFFF',
    dark: '#181A1B',
})
