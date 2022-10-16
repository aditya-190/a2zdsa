import './ProgressBar.css'

import {
    CircularProgress,
    CircularProgressLabel,
    Flex,
    Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SingleTopic = ({ data, selectedContentIndex }) => {
    const [isHovering, setHover] = useState(false)

    const isDarkMode = data.data.header.darkMode
    const current = data.data.content[selectedContentIndex]
    const completedQuestion = current.contentCompletedQuestions
    const totalQuestion = current.contentTotalQuestions
    const completedPercentage = (completedQuestion / totalQuestion) * 100
    const topicLink = current.contentPath
    const isStarted = current.contentCompletedQuestions !== 0
    const contentHeading = current.contentHeading
    const contentSubHeading = current.contentSubHeading

    return (
        <Link to={topicLink}>
            <Flex
                className={'singleTopic'}
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                background={
                    isStarted
                        ? isDarkMode
                            ? 'topicProgressBg_dark'
                            : 'topicProgressBg'
                        : isDarkMode
                        ? 'topicStillBg_dark'
                        : 'topicStillBg'
                }
                p={2}
                minH={'120px'}
                borderRadius={16}
                cursor={'pointer'}
                onMouseEnter={() => {
                    setHover(true)
                }}
                onMouseLeave={() => {
                    setHover(false)
                }}
                transform={isHovering ? 'scale(1.05)' : 'scale(1)'}
                transition={'all 0.2s linear'}
            >
                <Flex
                    flexDirection={'column'}
                    justifyContent={'space-around'}
                    alignItems={'start'}
                >
                    <Text
                        fontWeight={'lg'}
                        fontSize={'2xl'}
                        fontFamily={'customFamily'}
                        fontStyle={'normal'}
                        color={
                            isDarkMode ? 'defaultColor_dark' : 'defaultColor'
                        }
                    >
                        {contentHeading}
                    </Text>
                    <Text
                        mt={1}
                        fontWeight={'md'}
                        fontSize={'xs'}
                        fontFamily={'customFamily'}
                        fontStyle={'normal'}
                        color={
                            isDarkMode ? 'defaultColor_dark' : 'defaultColor'
                        }
                    >
                        {contentSubHeading}
                    </Text>
                </Flex>

                {isStarted ? (
                    <CircularProgress
                        ml={6}
                        size={'70px'}
                        thickness={'8px'}
                        role={'progressbar'}
                        color={
                            isDarkMode
                                ? 'completedColor_dark'
                                : 'completedColor'
                        }
                        trackColor={
                            isDarkMode ? 'totalColor_dark' : 'totalColor'
                        }
                        value={completedPercentage}
                    >
                        <CircularProgressLabel
                            color={
                                isDarkMode
                                    ? 'defaultColor_dark'
                                    : 'defaultColor'
                            }
                        >
                            {completedQuestion + '/' + totalQuestion}
                        </CircularProgressLabel>
                    </CircularProgress>
                ) : (
                    <Text
                        w={'fit-content'}
                        h={'fit-content'}
                        ml={6}
                        px={4}
                        py={1}
                        bg={isDarkMode ? 'startNowBg_dark' : 'startNowBg'}
                        borderRadius={'16px'}
                        fontWeight={'md'}
                        fontSize={'xs'}
                        fontFamily={'customFamily'}
                        fontStyle={'normal'}
                        color={'secondaryColor'}
                        cursor={'pointer'}
                        whiteSpace={'nowrap'}
                    >
                        Start Now
                    </Text>
                )}
            </Flex>
        </Link>
    )
}

export default SingleTopic
