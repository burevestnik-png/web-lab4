import theme, { ThemeMap } from 'styled-theming'

const MODE_CRITERIA: string = 'mode'

interface ColorTheme extends ThemeMap {
    readonly light: string
    readonly dark: string
}

export const primaryColor = theme(MODE_CRITERIA, <ColorTheme>{
    light: '#263860',
    dark: '#041232',
})

export const secondaryColor = theme(MODE_CRITERIA, <ColorTheme>{
    dark: '#FFFFFF',
    light: '#181A1B',
})
