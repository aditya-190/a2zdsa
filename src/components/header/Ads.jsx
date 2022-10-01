import { Flex, Text } from '@chakra-ui/react'

const Ads = () => {
    return (
        <Flex
            className={'ads'}
            display={'none'}
            w={'100vw'}
            py={1}
            px={4}
            bg={'adsBg'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <Text
                fontSize={'xs'}
                fontFamily={'customFamily'}
                fontWeight={'md'}
                color={'textColor'}
            >
                Ads Goes Here...
            </Text>
        </Flex>
    )
}
export default Ads
