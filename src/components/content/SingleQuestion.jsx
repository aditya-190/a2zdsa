import { Flex, Text } from '@chakra-ui/react'

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

const SingleQuestion = ({
    data,
    setData,
    selectedCategoryIndex,
    selectedContentIndex,
    selectedQuestionIndex,
}) => {
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

    const isDone = current[selectedQuestionIndex].isDone
    const isBookmarked = current[selectedQuestionIndex].isBookmarked
    const isNoted = userNotes !== ''
    const isQuestionLinkAvailable = questionLink !== ''
    const isGfgLinkAvailable = gfgLink !== ''
    const isLeetCodeLinkAvailable = leetCodeLink !== ''
    const isYouTubeLinkAvailable = youTubeLink !== ''

    return (
        <Flex
            w={'full'}
            py={1}
            borderRadius={4}
            mb={selectedQuestionIndex !== totalLength - 1 ? 2 : 0}
            key={selectedQuestionIndex}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            _hover={{ bg: 'selectedQuestion' }}
        >
            {isDone ? (
                <Tick
                    onClick={() => {
                        console.log({
                            header: { ...data.header },
                            content: data.content.map(singleContent =>
                                singleContent.index === selectedContentIndex
                                    ? {
                                          ...singleContent,
                                          categoryList:
                                              singleContent.categoryList.map(
                                                  singleCategory =>
                                                      singleCategory.index ===
                                                      selectedCategoryIndex
                                                          ? {
                                                                ...singleCategory,
                                                                questionList:
                                                                    singleCategory.questionList.map(
                                                                        singleQuestion =>
                                                                            singleQuestion.index ===
                                                                            selectedQuestionIndex
                                                                                ? {
                                                                                      ...singleQuestion,
                                                                                      isDone: false,
                                                                                  }
                                                                                : singleQuestion
                                                                    ),
                                                            }
                                                          : singleCategory
                                              ),
                                      }
                                    : singleContent
                            ),
                            footer: { ...data.footer },
                        })
                    }}
                />
            ) : (
                <UnTick
                    onClick={() => {
                        console.log({
                            header: { ...data.header },
                            content: data.content.map(singleContent =>
                                singleContent.key === selectedContentIndex
                                    ? {
                                          ...singleContent,
                                          categoryList:
                                              singleContent.categoryList.map(
                                                  singleCategory =>
                                                      singleCategory.key ===
                                                      selectedCategoryIndex
                                                          ? {
                                                                ...singleCategory,
                                                                questionList:
                                                                    singleCategory.questionList.map(
                                                                        singleQuestion =>
                                                                            singleQuestion.key ===
                                                                            selectedQuestionIndex
                                                                                ? {
                                                                                      ...singleQuestion,
                                                                                      isDone: true,
                                                                                  }
                                                                                : singleQuestion
                                                                    ),
                                                            }
                                                          : singleCategory
                                              ),
                                      }
                                    : singleContent
                            ),
                            footer: { ...data.footer },
                        })
                    }}
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
                        ? 'highlightedColor'
                        : 'defaultColor'
                }
                noOfLines={[2, 3]}
            >
                {isQuestionLinkAvailable ? (
                    <a href={questionLink} target={'_blank'} rel="noreferrer">
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
                    visibility={isYouTubeLinkAvailable ? 'visible' : 'hidden'}
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
                    visibility={isLeetCodeLinkAvailable ? 'visible' : 'hidden'}
                />
            </Flex>
            <Flex
                flexDirection={'row'}
                ml={6}
                display={{ base: 'none', md: 'flex' }}
            >
                {isNoted ? <Notes /> : <NoNotes />}
                {isBookmarked ? <Bookmark ml={4} /> : <NoBookmark ml={4} />}
            </Flex>
        </Flex>
    )
}

export default SingleQuestion
