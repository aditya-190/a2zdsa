import { extendTheme } from '@chakra-ui/react'

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const theme = extendTheme({
    config,

    // If you want to change color on Pick Random Click, Check ProgressBar.css.
    colors: {
        fullPageColor: '#FFFFFF',
        adsBg: '#D9D9D9',
        textColor: '#000000A6',
        defaultColor: '#000000',
        borderColor: '#000000',
        secondaryColor: '#FFFFFF',
        highlightedColor: '#3090EA',
        totalColor: '#4F4F4F',
        completedColor: '#F3C623',
        indianFlag1Color: '#FF9933',
        indianFlag1BorderColor: '#FF9933',
        indianFlag1Bg: '#FF99330D',
        indianFlag2Color: '#000080',
        indianFlag2BorderColor: '#000080',
        indianFlag2Bg: '#0000800d',
        indianFlag3Color: '#138808',
        indianFlag3BorderColor: '#138808',
        indianFlag3Bg: '#1388080d',
        footerBg: '#27AE60',
        topicProgressBg: '#AAD6B9',
        topicStillBg: '#AAD0F6',
        selectedQuestion: '#d0d7de3d',
        startNowBg: '#007bff',

        fullPageColor_dark: '#0d1117',
        adsBg_dark: '#21262d',
        textColor_dark: '#8b949e',
        defaultColor_dark: '#c9d1d9',
        borderColor_dark: '#30363d',
        secondaryColor_dark: '#0d1117',
        highlightedColor_dark: '#58a6ff',
        totalColor_dark: '#4F4F4F',
        completedColor_dark: '#F3C623',
        indianFlag1Color_dark: '#e8eaed',
        indianFlag1BorderColor_dark: 'transparent',
        indianFlag1Bg_dark: '#303134',
        indianFlag2Color_dark: '#e8eaed',
        indianFlag2BorderColor_dark: 'transparent',
        indianFlag2Bg_dark: '#303134',
        indianFlag3Color_dark: '#e8eaed',
        indianFlag3BorderColor_dark: 'transparent',
        indianFlag3Bg_dark: '#303134',
        footerBg_dark: '#27AE60',
        topicProgressBg_dark: '#21262d',
        topicStillBg_dark: '#21262d',
        selectedQuestion_dark: '#21262d',
        startNowBg_dark: '#1f6feb',
    },
    fonts: {
        customFamily:
            '-apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
    },
    fontWeights: {
        sm: '200',
        md: '400',
        lg: '600',
        xl: '800',
    },
    fontSizes: {
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        md: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.3125rem', // 21px
        '2xl': '1.5rem', // 24px
        '3xl': '1.75rem', // 28px
        '3.5xl': '1.875rem', // 30px
        '4xl': '2rem', // 32px
        '5xl': '2.25rem', // 36px
    },
})

export default theme
