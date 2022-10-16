import { Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const SubHeadings = ({ data, selectedContentIndex, showBreadCrumbs }) => {
    const isDarkMode = data.data.header.darkMode
    const contentHeading =
        data.data.content[selectedContentIndex].contentHeading
    const subtitle = 'Learn DSA from scratch ⭐'
    const motivationalQuotes = data.data.header.motivationalQuotes
    const randomQuoteIndex = Math.floor(
        Math.random() * motivationalQuotes.length - 1
    )

    return (
        <Flex
            mt={0.5}
            w={'90vw'}
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
                    <Link to={'/'}>
                        <Text
                            align={'center'}
                            fontWeight={'md'}
                            fontSize={'xl'}
                            fontFamily={'customFamily'}
                            fontStyle={'normal'}
                            color={
                                isDarkMode
                                    ? 'highlightedColor_dark'
                                    : 'highlightedColor'
                            }
                            cursor={'pointer'}
                            _hover={{ textDecorationLine: 'underline' }}
                        >
                            Topics
                        </Text>
                    </Link>
                    <Text
                        align={'center'}
                        fontWeight={'md'}
                        fontSize={'xl'}
                        fontFamily={'customFamily'}
                        fontStyle={'normal'}
                        color={isDarkMode ? 'textColor_dark' : 'textColor'}
                    >
                        {'/' + contentHeading}
                    </Text>
                </Flex>
            ) : (
                <>
                    <Text
                        align={'center'}
                        fontWeight={'md'}
                        fontSize={'xl'}
                        fontFamily={'customFamily'}
                        fontStyle={'normal'}
                        color={
                            isDarkMode ? 'defaultColor_dark' : 'defaultColor'
                        }
                    >
                        {subtitle}
                    </Text>
                    <Text
                        mt={2}
                        align={'center'}
                        fontWeight={'md'}
                        fontSize={'md'}
                        display={{ base: 'none', md: 'flex' }}
                        fontFamily={'customFamily'}
                        fontStyle={'normal'}
                        color={isDarkMode ? 'textColor_dark' : 'textColor'}
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
