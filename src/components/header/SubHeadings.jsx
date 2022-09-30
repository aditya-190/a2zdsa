import { Flex, Text } from '@chakra-ui/react'

const SubHeadings = ({
    showBreadCrumbs,
    contentHeading,
    subtitle,
    motivationalQuotes,
}) => {
    return (
        <Flex
            mt={0.5}
            className={'subHeadings'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            {showBreadCrumbs ? (
                <Flex
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Text
                        align={'center'}
                        fontWeight={'400'}
                        fontSize={'18px'}
                        fontFamily={'?????'}
                        fontStyle={'normal'}
                        color={'#3090EA'}
                        cursor={'pointer'}
                    >
                        Topics
                    </Text>
                    <Text
                        align={'center'}
                        fontWeight={'400'}
                        fontSize={'18px'}
                        fontFamily={'?????'}
                        fontStyle={'normal'}
                        color={'black'}
                    >
                        {'/' + contentHeading}
                    </Text>
                </Flex>
            ) : (
                <>
                    <Text
                        align={'center'}
                        fontWeight={'400'}
                        fontSize={'18px'}
                        fontFamily={'?????'}
                        fontStyle={'normal'}
                        color={'black'}
                    >
                        {subtitle}
                    </Text>
                    <Text
                        mt={2}
                        align={'center'}
                        fontWeight={'400'}
                        fontSize={'14px'}
                        fontFamily={'?????'}
                        fontStyle={'normal'}
                        color={'black'}
                    >
                        {motivationalQuotes}
                    </Text>
                </>
            )}
        </Flex>
    )
}

export default SubHeadings
