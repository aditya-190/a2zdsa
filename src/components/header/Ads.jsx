import { Flex, Text } from '@chakra-ui/react'

const Ads = () => {
    return (
        <Flex
            className={'ads'}
            w={'100vw'}
            py={1}
            px={4}
            bg={'#D9D9D9'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <Text
                fontSize={'12px'}
                fontFamily={'?????'}
                fontWeight={'400'}
                color={'black'}
            >
                Ads Goes Here...
            </Text>
        </Flex>
    )
}
export default Ads
