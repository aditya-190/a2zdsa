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
    const userNotes = current[selectedQuestionIndex].userNotes.trim()

    const isDarkMode = data.data.header.darkMode
    const isDone = current[selectedQuestionIndex].isDone
    const isBookmarked = current[selectedQuestionIndex].isBookmarked
    const isNoted = userNotes !== ''
    const isQuestionLinkAvailable = questionLink !== ''
    const isGfgLinkAvailable = gfgLink !== ''
    const isLeetCodeLinkAvailable = leetCodeLink !== ''
    const isYouTubeLinkAvailable = youTubeLink !== ''

    function onQuestionTickClicked(isQuestionCompleted) {
        const completedQuestion = isQuestionCompleted
            ? data.data.header['completedQuestions'] + 1
            : data.data.header['completedQuestions'] - 1

        const contentCompletedQuestions = isQuestionCompleted
            ? data.data.content[selectedContentIndex][
                  'contentCompletedQuestions'
              ] + 1
            : data.data.content[selectedContentIndex][
                  'contentCompletedQuestions'
              ] - 1

        const categoryCompletedQuestions = isQuestionCompleted
            ? data.data.content[selectedContentIndex].categoryList[
                  selectedCategoryIndex
              ]['categoryCompletedQuestions'] + 1
            : data.data.content[selectedContentIndex].categoryList[
                  selectedCategoryIndex
              ]['categoryCompletedQuestions'] - 1

        setData({
            data: {
                header: {
                    ...data.data.header,
                    completedQuestions: completedQuestion,
                },
                content: [
                    ...data.data.content.map((singleContent, contentIndex) =>
                        contentIndex === selectedContentIndex
                            ? {
                                  ...singleContent,
                                  contentCompletedQuestions:
                                      contentCompletedQuestions,
                                  categoryList: singleContent.categoryList.map(
                                      (singleCategory, categoryIndex) =>
                                          categoryIndex ===
                                          selectedCategoryIndex
                                              ? {
                                                    ...singleCategory,
                                                    categoryCompletedQuestions:
                                                        categoryCompletedQuestions,
                                                    questionList:
                                                        singleCategory.questionList.map(
                                                            (
                                                                singleQuestion,
                                                                questionIndex
                                                            ) =>
                                                                questionIndex ===
                                                                selectedQuestionIndex
                                                                    ? {
                                                                          ...singleQuestion,
                                                                          isDone: isQuestionCompleted,
                                                                      }
                                                                    : singleQuestion
                                                        ),
                                                }
                                              : singleCategory
                                  ),
                              }
                            : singleContent
                    ),
                ],
                footer: { ...data.data.footer },
            },
        })
    }

    function onBookmarkClicked(isBookmarked) {
        setData({
            data: {
                header: { ...data.data.header },
                content: [
                    ...data.data.content.map((singleContent, contentIndex) =>
                        contentIndex === selectedContentIndex
                            ? {
                                  ...singleContent,
                                  categoryList: singleContent.categoryList.map(
                                      (singleCategory, categoryIndex) =>
                                          categoryIndex ===
                                          selectedCategoryIndex
                                              ? {
                                                    ...singleCategory,
                                                    questionList:
                                                        singleCategory.questionList.map(
                                                            (
                                                                singleQuestion,
                                                                questionIndex
                                                            ) =>
                                                                questionIndex ===
                                                                selectedQuestionIndex
                                                                    ? {
                                                                          ...singleQuestion,
                                                                          isBookmarked:
                                                                              isBookmarked,
                                                                      }
                                                                    : singleQuestion
                                                        ),
                                                }
                                              : singleCategory
                                  ),
                              }
                            : singleContent
                    ),
                ],
                footer: { ...data.data.footer },
            },
        })
    }

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
                        onClick={() => onQuestionTickClicked(false)}
                    />
                ) : (
                    <UnTick
                        color={
                            isDarkMode
                                ? 'highlightedColor_dark'
                                : 'highlightedColor'
                        }
                        onClick={() => onQuestionTickClicked(true)}
                    />
                )}

                <Text
                    ml={{ base: 2, md: 4 }}
                    flexGrow={1}
                    vertical-align={'middle'}
                    fontWeight={'md'}
                    fontSize={{ base: 'xs', md: 'md' }}
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

                <Flex
                    flexDirection={'row'}
                    alignItems={'center'}
                    ml={{ base: 3, md: 6 }}
                >
                    <YouTube
                        fontSize={'lg'}
                        href={isYouTubeLinkAvailable ? youTubeLink : '/play'}
                        cursor={'pointer'}
                        visibility={
                            isYouTubeLinkAvailable ? 'visible' : 'hidden'
                        }
                    />
                    <GfG
                        fontSize={'lg'}
                        ml={{ base: 2, md: 4 }}
                        href={isGfgLinkAvailable ? gfgLink : '/play'}
                        cursor={'pointer'}
                        visibility={isGfgLinkAvailable ? 'visible' : 'hidden'}
                    />
                    <LeetCode
                        fontSize={'lg'}
                        ml={{ base: 2, md: 4 }}
                        href={isLeetCodeLinkAvailable ? leetCodeLink : '/play'}
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
                    alignItems={'center'}
                >
                    {isNoted ? (
                        <Notes
                            fontSize={'lg'}
                            color={
                                isDarkMode
                                    ? 'indianFlag1Color_dark'
                                    : 'indianFlag1Color'
                            }
                            onClick={onOpenNotes}
                        />
                    ) : (
                        <NoNotes
                            fontSize={'lg'}
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
                            fontSize={'lg'}
                            color={
                                isDarkMode
                                    ? 'indianFlag3Color_dark'
                                    : 'indianFlag3Color'
                            }
                            onClick={() => onBookmarkClicked(false)}
                        />
                    ) : (
                        <NoBookmark
                            ml={4}
                            fontSize={'lg'}
                            color={
                                isDarkMode
                                    ? 'indianFlag3Color_dark'
                                    : 'indianFlag3Color'
                            }
                            onClick={() => onBookmarkClicked(true)}
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
