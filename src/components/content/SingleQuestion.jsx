import { Flex, Text, useDisclosure } from '@chakra-ui/react'

import {
    Bookmark,
    GfG,
    LeetCode,
    NoBookmark,
    NoNotes,
    Notes,
    Tick,
    UnTick,
    YouTube,
} from '../icons/ProjectIcons'
import NotesEditor from './NotesEditor.jsx'

const SingleQuestion = ({
    data,
    setData,
    selectedCategoryIndex,
    selectedContentIndex,
    selectedQuestionIndex,
}) => {
    const {
        isOpen: isOpenNotes,
        onOpen: onOpenNotes,
        onClose: onCloseNotes,
    } = useDisclosure()

    const current =
        data.data.content[selectedContentIndex].categoryList[
            selectedCategoryIndex
        ].questionList
    const totalLength = current.length
    const questionHeading = current[selectedQuestionIndex].questionHeading
    const questionLink = current[selectedQuestionIndex].questionLink
    const gfgLink = current[selectedQuestionIndex].gfgLink
    const leetCodeLink = current[selectedQuestionIndex].leetCodeLink
    const youTubeLink = current[selectedQuestionIndex].youTubeLink
    const userNotes = current[selectedQuestionIndex].userNotes

    const isDarkMode = data.data.header.darkMode
    const isDone = current[selectedQuestionIndex].isDone
    const isBookmarked = current[selectedQuestionIndex].isBookmarked
    const isNoted = userNotes !== ''
    const isQuestionLinkAvailable = questionLink !== ''
    const isGfgLinkAvailable = gfgLink !== ''
    const isLeetCodeLinkAvailable = leetCodeLink !== ''
    const isYouTubeLinkAvailable = youTubeLink !== ''

    return (
        <>
            <Flex
                id={current[selectedQuestionIndex].questionId}
                w={'full'}
                py={1}
                px={{ base: 1, md: 2 }}
                borderRadius={4}
                mb={selectedQuestionIndex !== totalLength - 1 ? 2 : 0}
                key={selectedQuestionIndex}
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                _hover={{
                    bg: isDarkMode
                        ? 'selectedQuestion_dark'
                        : 'selectedQuestion',
                }}
            >
                {isDone ? (
                    <Tick
                        color={
                            isDarkMode
                                ? 'highlightedColor_dark'
                                : 'highlightedColor'
                        }
                    />
                ) : (
                    <UnTick
                        color={
                            isDarkMode
                                ? 'highlightedColor_dark'
                                : 'highlightedColor'
                        }
                    />
                )}

                <Text
                    ml={{ base: 2, md: 4 }}
                    flexGrow={1}
                    vertical-align={'middle'}
                    fontWeight={'md'}
                    fontSize={{ base: 'sm', md: 'md' }}
                    fontFamily={'customFamily'}
                    fontStyle={'normal'}
                    textDecorationLine={isDone ? 'line-through' : 'none'}
                    color={
                        isQuestionLinkAvailable
                            ? isDarkMode
                                ? 'highlightedColor_dark'
                                : 'highlightedColor'
                            : isDarkMode
                            ? 'defaultColor_dark'
                            : 'defaultColor'
                    }
                    noOfLines={[2, 3]}
                >
                    {isQuestionLinkAvailable ? (
                        <a
                            href={questionLink}
                            target={'_blank'}
                            rel="noreferrer"
                        >
                            {questionHeading}
                        </a>
                    ) : (
                        questionHeading
                    )}
                </Text>

                <Flex flexDirection={'row'} ml={{ base: 3, md: 6 }}>
                    <YouTube
                        href={youTubeLink}
                        cursor={'pointer'}
                        visibility={
                            isYouTubeLinkAvailable ? 'visible' : 'hidden'
                        }
                    />
                    <GfG
                        ml={{ base: 2, md: 4 }}
                        href={gfgLink}
                        cursor={'pointer'}
                        visibility={isGfgLinkAvailable ? 'visible' : 'hidden'}
                    />
                    <LeetCode
                        ml={{ base: 2, md: 4 }}
                        href={leetCodeLink}
                        cursor={'pointer'}
                        visibility={
                            isLeetCodeLinkAvailable ? 'visible' : 'hidden'
                        }
                    />
                </Flex>
                <Flex
                    flexDirection={'row'}
                    ml={6}
                    display={{ base: 'none', md: 'flex' }}
                    cursor={'pointer'}
                >
                    {isNoted ? (
                        <Notes
                            color={
                                isDarkMode
                                    ? 'indianFlag1Color_dark'
                                    : 'indianFlag1Color'
                            }
                            onClick={onOpenNotes}
                        />
                    ) : (
                        <NoNotes
                            color={
                                isDarkMode
                                    ? 'indianFlag1Color_dark'
                                    : 'indianFlag1Color'
                            }
                            onClick={onOpenNotes}
                        />
                    )}
                    {isBookmarked ? (
                        <Bookmark
                            ml={4}
                            color={
                                isDarkMode
                                    ? 'indianFlag3Color_dark'
                                    : 'indianFlag3Color'
                            }
                        />
                    ) : (
                        <NoBookmark
                            ml={4}
                            color={
                                isDarkMode
                                    ? 'indianFlag3Color_dark'
                                    : 'indianFlag3Color'
                            }
                        />
                    )}
                </Flex>
            </Flex>
            <NotesEditor
                data={data}
                setData={setData}
                selectedContentIndex={selectedContentIndex}
                selectedCategoryIndex={selectedCategoryIndex}
                selectedQuestionIndex={selectedQuestionIndex}
                isOpenNotes={isOpenNotes}
                onCloseNotes={onCloseNotes}
                openedBy={'question'}
            />
        </>
    )
}

export default SingleQuestion
