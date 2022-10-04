import {
    Editable,
    EditableInput,
    EditablePreview,
    Flex,
    Text,
} from '@chakra-ui/react'

import { Bookmark, Notes } from '../icons/ProjectIcons.jsx'

const SearchBar = ({ data, setData, selectedContentIndex }) => {
    const isDarkMode = data.data.header.darkMode
    const current = data.data.content[selectedContentIndex]
    const contentCompletedQuestions = current.contentCompletedQuestions
    const contentTotalQuestions = current.contentTotalQuestions

    return (
        <Flex
            className={'searchBar'}
            w={'calc(80vw)'}
            mt={4}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <Flex
                h={'full'}
                borderWidth={'2px'}
                borderColor={
                    isDarkMode
                        ? 'indianFlag1BorderColor_dark'
                        : 'indianFlag1BorderColor'
                }
                borderRadius={'6px'}
                p={2}
                cursor={'pointer'}
                alignItems={'center'}
                justifyContent={'center'}
                background={isDarkMode ? 'indianFlag1Bg_dark' : 'indianFlag1Bg'}
                display={{ base: 'none', md: 'flex' }}
            >
                <Notes
                    fontSize={'16px'}
                    color={
                        isDarkMode
                            ? 'indianFlag1Color_dark'
                            : 'indianFlag1Color'
                    }
                />
            </Flex>

            <Flex
                h={'full'}
                borderWidth={'2px'}
                borderColor={
                    isDarkMode
                        ? 'indianFlag1BorderColor_dark'
                        : 'indianFlag1BorderColor'
                }
                borderTopLeftRadius={'6px'}
                borderBottomLeftRadius={'6px'}
                p={2}
                ml={1}
                cursor={'pointer'}
                alignItems={'center'}
                justifyContent={'center'}
                background={isDarkMode ? 'indianFlag1Bg_dark' : 'indianFlag1Bg'}
                display={{ base: 'none', md: 'flex' }}
            >
                <Text
                    align={'center'}
                    fontWeight={'xl'}
                    fontSize={'xs'}
                    fontFamily={'customFamily'}
                    fontStyle={'normal'}
                    color={
                        isDarkMode
                            ? 'indianFlag1Color_dark'
                            : 'indianFlag1Color'
                    }
                >
                    Pick Random
                </Text>
            </Flex>

            <Flex
                h={'full'}
                borderWidth={'2px'}
                borderColor={
                    isDarkMode
                        ? 'indianFlag2BorderColor_dark'
                        : 'indianFlag2BorderColor'
                }
                background={isDarkMode ? 'indianFlag2Bg_dark' : 'indianFlag2Bg'}
                borderTopRadius={{ base: '6px', md: '0px' }}
                p={2}
                ml={1}
                flexGrow={1}
                alignitems={'center'}
                justifyContent={'center'}
            >
                <Editable
                    w={'full'}
                    align={'center'}
                    fontWeight={'lg'}
                    fontSize={'xs'}
                    fontFamily={'customFamily'}
                    fontStyle={'normal'}
                    placeholder={'Search Questions...'}
                    color={isDarkMode ? 'defaultColor_dark' : 'defaultColor'}
                >
                    <EditablePreview
                        p={0}
                        borderRadius={0}
                        background={'none'}
                    />
                    <EditableInput boxShadow={'none !important'} p={0} />
                </Editable>
            </Flex>

            <Flex
                h={'full'}
                borderWidth={'2px'}
                borderColor={
                    isDarkMode
                        ? 'indianFlag3BorderColor_dark'
                        : 'indianFlag3BorderColor'
                }
                borderTopRightRadius={'6px'}
                borderBottomRightRadius={'6px'}
                p={2}
                ml={1}
                cursor={'pointer'}
                alignItems={'center'}
                justifyContent={'center'}
                background={isDarkMode ? 'indianFlag3Bg_dark' : 'indianFlag3Bg'}
                display={{ base: 'none', md: 'flex' }}
            >
                <Text
                    align={'center'}
                    fontWeight={'xl'}
                    fontSize={'xs'}
                    fontFamily={'customFamily'}
                    fontStyle={'normal'}
                    color={
                        isDarkMode
                            ? 'indianFlag3Color_dark'
                            : 'indianFlag3Color'
                    }
                >
                    {contentCompletedQuestions +
                        '/' +
                        contentTotalQuestions +
                        ' Done'}
                </Text>
            </Flex>

            <Flex
                h={'full'}
                borderWidth={'2px'}
                borderColor={
                    isDarkMode
                        ? 'indianFlag3BorderColor_dark'
                        : 'indianFlag3BorderColor'
                }
                borderRadius={'6px'}
                p={2}
                ml={1}
                cursor={'pointer'}
                alignItems={'center'}
                justifyContent={'center'}
                background={isDarkMode ? 'indianFlag3Bg_dark' : 'indianFlag3Bg'}
                display={{ base: 'none', md: 'flex' }}
            >
                <Bookmark
                    fontSize={'16px'}
                    color={
                        isDarkMode
                            ? 'indianFlag3Color_dark'
                            : 'indianFlag3Color'
                    }
                />
            </Flex>
        </Flex>
    )
}

export default SearchBar
