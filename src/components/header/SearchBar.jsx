import { Flex, Input, Text, Tooltip, useDisclosure } from '@chakra-ui/react'

import NotesEditor from '../content/NotesEditor'
import { Bookmark, NoBookmark, NoNotes, Notes } from '../icons/ProjectIcons.jsx'

const SearchBar = ({
    data,
    setData,
    searchValue,
    setSearchValue,
    selectedContentIndex,
}) => {
    const {
        isOpen: isOpenNotes,
        onOpen: onOpenNotes,
        onClose: onCloseNotes,
    } = useDisclosure()

    const current = data.data.content[selectedContentIndex]
    const contentCompletedQuestions = current.contentCompletedQuestions
    const contentTotalQuestions = current.contentTotalQuestions

    const isDarkMode = data.data.header.darkMode
    const isNotes = current.contentUserNotes.trim() !== ''
    const isBookmark = data.data.header.isBookmarkFilterRequired

    const heading = data.data.content[selectedContentIndex].contentHeading

    let handleInputChange = e => {
        setSearchValue(e.target.value)
    }

    function getRandomQuestion() {
        const randomCategory =
            current.categoryList[
                Math.floor(Math.random() * current.categoryList.length)
            ]

        const randomQuestion =
            randomCategory.questionList[
                Math.floor(Math.random() * randomCategory.questionList.length)
            ]

        const element = document.getElementById(randomQuestion.questionId)
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })

        const classToAdd = isDarkMode ? 'blink_dark' : 'blink'
        element.classList.add(classToAdd)
        setTimeout(() => {
            element.classList.remove(classToAdd)
        }, 1000)
    }

    return (
        <>
            <Flex
                className={'searchBar'}
                w={'90vw'}
                mt={4}
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Tooltip
                    hasArrow
                    placement={'top-end'}
                    label={'Notes for ' + heading}
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
                        background={
                            isDarkMode ? 'indianFlag1Bg_dark' : 'indianFlag1Bg'
                        }
                        display={{ base: 'none', md: 'flex' }}
                        onClick={onOpenNotes}
                    >
                        {isNotes ? (
                            <Notes
                                fontSize={'16px'}
                                color={
                                    isDarkMode
                                        ? 'indianFlag1Color_dark'
                                        : 'indianFlag1Color'
                                }
                            />
                        ) : (
                            <NoNotes
                                fontSize={'16px'}
                                color={
                                    isDarkMode
                                        ? 'indianFlag1Color_dark'
                                        : 'indianFlag1Color'
                                }
                            />
                        )}
                    </Flex>
                </Tooltip>

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
                    background={
                        isDarkMode ? 'indianFlag1Bg_dark' : 'indianFlag1Bg'
                    }
                    display={{ base: 'none', md: 'flex' }}
                    onClick={() => getRandomQuestion()}
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
                    background={
                        isDarkMode ? 'indianFlag2Bg_dark' : 'indianFlag2Bg'
                    }
                    borderTopRadius={{ base: '6px', md: '0px' }}
                    p={2}
                    ml={1}
                    flexGrow={1}
                    alignitems={'center'}
                    justifyContent={'center'}
                >
                    <Input
                        w={'full'}
                        h={'full'}
                        align={'center'}
                        fontWeight={'lg'}
                        fontSize={'sm'}
                        textAlign={'center'}
                        fontFamily={'customFamily'}
                        fontStyle={'normal'}
                        p={0}
                        border={'none'}
                        borderRadius={0}
                        background={'none'}
                        boxShadow={'none !important'}
                        placeholder={'Search Questions...'}
                        color={
                            isDarkMode ? 'defaultColor_dark' : 'defaultColor'
                        }
                        value={searchValue}
                        onChange={handleInputChange}
                    />
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
                    alignItems={'center'}
                    justifyContent={'center'}
                    background={
                        isDarkMode ? 'indianFlag3Bg_dark' : 'indianFlag3Bg'
                    }
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

                <Tooltip
                    hasArrow
                    placement={'top-start'}
                    label={'Bookmarks for ' + heading}
                >
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
                        background={
                            isDarkMode ? 'indianFlag3Bg_dark' : 'indianFlag3Bg'
                        }
                        display={{ base: 'none', md: 'flex' }}
                        onClick={() => {
                            setData(prevState => ({
                                data: {
                                    ...prevState.data,
                                    header: {
                                        ...prevState.data.header,
                                        isBookmarkFilterRequired: !isBookmark,
                                    },
                                },
                            }))
                        }}
                    >
                        {isBookmark ? (
                            <Bookmark
                                fontSize={'16px'}
                                color={
                                    isDarkMode
                                        ? 'indianFlag3Color_dark'
                                        : 'indianFlag3Color'
                                }
                            />
                        ) : (
                            <NoBookmark
                                fontSize={'16px'}
                                color={
                                    isDarkMode
                                        ? 'indianFlag3Color_dark'
                                        : 'indianFlag3Color'
                                }
                            />
                        )}
                    </Flex>
                </Tooltip>
            </Flex>
            <NotesEditor
                data={data}
                setData={setData}
                selectedContentIndex={selectedContentIndex}
                isOpenNotes={isOpenNotes}
                onCloseNotes={onCloseNotes}
                openedBy={'search_bar'}
            />
        </>
    )
}

export default SearchBar
