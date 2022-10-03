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

    const current = data.data.content[selectedContentIndex]
    const completedQuestion = current.contentCompletedQuestions
    const totalQuestion = current.contentTotalQuestions
    const completedPercentage = (completedQuestion / totalQuestion) * 100
    const topicLink = current.contentPath
    const isStarted = current.contentCompletedQuestions !== '0'
    const contentHeading = current.contentHeading
    const contentSubHeading = current.contentSubHeading

    return (
        <Link to={topicLink}>
            <Flex
                className={'singleTopic'}
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                background={isStarted ? 'topicProgressBg' : 'topicStillBg'}
                p={2}
                minH={'100px'}
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
                    justifyContent={'center'}
                    alignItems={'start'}
                >
                    <Text
                        fontWeight={'lg'}
                        fontSize={'2xl'}
                        fontFamily={'customFamily'}
                        fontStyle={'normal'}
                        color={'defaultColor'}
                    >
                        {contentHeading}
                    </Text>
                    <Text
                        fontWeight={'md'}
                        fontSize={'xs'}
                        fontFamily={'customFamily'}
                        fontStyle={'normal'}
                        color={'defaultColor'}
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
                        color={'completedColor'}
                        trackColor={'totalColor'}
                        value={completedPercentage}
                    >
                        <CircularProgressLabel>
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
                        bg={'startNowBg'}
                        borderRadius={'16px'}
                        fontWeight={'xl'}
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
