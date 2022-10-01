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
                        fontWeight={'md'}
                        fontSize={'lg'}
                        fontFamily={'customFamily'}
                        fontStyle={'normal'}
                        color={'highlightedColor'}
                        cursor={'pointer'}
                    >
                        Topics
                    </Text>
                    <Text
                        align={'center'}
                        fontWeight={'md'}
                        fontSize={'lg'}
                        fontFamily={'customFamily'}
                        fontStyle={'normal'}
                        color={'textColor'}
                    >
                        {'/' + contentHeading}
                    </Text>
                </Flex>
            ) : (
                <>
                    <Text
                        align={'center'}
                        fontWeight={'md'}
                        fontSize={'lg'}
                        fontFamily={'customFamily'}
                        fontStyle={'normal'}
                        color={'defaultColor'}
                    >
                        {subtitle}
                    </Text>
                    <Text
                        mt={2}
                        align={'center'}
                        fontWeight={'md'}
                        fontSize={'sm'}
                        fontFamily={'customFamily'}
                        fontStyle={'normal'}
                        color={'textColor'}
                    >
                        {motivationalQuotes}
                    </Text>
                </>
            )}
        </Flex>
    )
}

export default SubHeadings
