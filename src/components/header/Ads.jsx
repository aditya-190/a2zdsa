import { Flex, Text } from '@chakra-ui/react'

const Ads = ({ data }) => {
    const isDarkMode = data.data.header.darkMode
    return (
        <Flex
            className={'ads'}
            display={'none'}
            w={'100vw'}
            py={1}
            px={4}
            bg={isDarkMode ? 'adsBg_dark' : 'adsBg'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <Text
                fontSize={'xs'}
                fontFamily={'customFamily'}
                fontWeight={'md'}
                color={isDarkMode ? 'defaultColor_dark' : 'defaultColor'}
            >
                Ads Goes Here...
            </Text>
        </Flex>
    )
}
export default Ads
