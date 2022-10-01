import './ProgressBar.css'

import {
    CircularProgress,
    CircularProgressLabel,
    Flex,
    Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SingleTopic = ({ data }) => {
    const [isHovering, setHover] = useState(false)
    const completedPercentage =
        (data.contentCompletedQuestions / data.contentTotalQuestions) * 100

    return (
        <Link to={data.contentPath}>
            <Flex
                className={'singleTopic'}
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                background={
                    data.contentCompletedQuestions !== '0'
                        ? 'topicProgressBg'
                        : 'topicStillBg'
                }
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
                        fontWeight={'md'}
                        fontSize={'2xl'}
                        fontFamily={'customFamily'}
                        fontStyle={'normal'}
                        color={'defaultColor'}
                    >
                        {data.contentHeading}
                    </Text>
                    <Text
                        fontWeight={'md'}
                        fontSize={'xs'}
                        fontFamily={'customFamily'}
                        fontStyle={'normal'}
                        color={'defaultColor'}
                    >
                        {data.contentSubHeading}
                    </Text>
                </Flex>

                {data.contentCompletedQuestions !== '0' ? (
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
                            {data.contentCompletedQuestions +
                                '/' +
                                data.contentTotalQuestions}
                        </CircularProgressLabel>
                    </CircularProgress>
                ) : (
                    <Text
                        w={'fit-content'}
                        h={'fit-content'}
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
