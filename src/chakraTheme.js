import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        adsBg: '#D9D9D9',
        textColor: '#000000A6',
        defaultColor: '#000000',
        secondaryColor: '#FFFFFF',
        highlightedColor: '#3090EA',
        totalColor: '#4F4F4F',
        completedColor: '#F3C623',
        indianFlag1Color: '#FF9933',
        indianFlag1Bg: '#FF99330D',
        indianFlag2Color: '#000080',
        indianFlag3Color: '#138808',
        indianFlag3Bg: '#1388080d',
        footerBg: '#27AE60',
        topicProgressBg: '#AAD6B9',
        topicStillBg: '#AAD0F6',
        startNowBg: '#007bff',
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
