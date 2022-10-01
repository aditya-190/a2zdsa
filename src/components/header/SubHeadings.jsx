import { Flex, Text } from '@chakra-ui/react'

const SubHeadings = ({
    showBreadCrumbs,
    contentHeading,
    subtitle,
    motivationalQuotes,
}) => {
    const randomQuoteIndex = Math.floor(
        Math.random() * motivationalQuotes.length - 1
    )

    return (
        <Flex
            mt={0.5}
            w={'80vw'}
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
                        {'" ' +
                            motivationalQuotes[randomQuoteIndex].quote +
                            ' " - ' +
                            motivationalQuotes[randomQuoteIndex].author}
                    </Text>
                </>
            )}
        </Flex>
    )
}

export default SubHeadings
