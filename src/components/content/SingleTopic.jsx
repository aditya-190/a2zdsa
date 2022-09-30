import './ProgressBar.css'

import {
    CircularProgress,
    CircularProgressLabel,
    Flex,
    Text,
} from '@chakra-ui/react'
import { useState } from 'react'

const SingleTopic = ({ data }) => {
    const [isHovering, setHover] = useState(false)
    const completedPercentage =
        (data.contentCompletedQuestions / data.contentTotalQuestions) * 100

    return (
        <Flex
            className={'singleTopic'}
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            background={
                data.contentCompletedQuestions !== '0' ? '#AAD6B9' : '#AAD0F6'
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
                    fontWeight={'500'}
                    fontSize={'24px'}
                    fontFamily={'?????'}
                    fontStyle={'normal'}
                    color={'black'}
                >
                    {data.contentHeading}
                </Text>
                <Text
                    fontWeight={'400'}
                    fontSize={'12px'}
                    fontFamily={'?????'}
                    fontStyle={'normal'}
                    color={'black'}
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
                    color={'#F3C623'}
                    trackColor={'#4F4F4F'}
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
                    bg={'#007bff'}
                    borderRadius={'16px'}
                    fontWeight={'700'}
                    fontSize={'12px'}
                    fontFamily={'?????'}
                    fontStyle={'normal'}
                    color={'white'}
                    cursor={'pointer'}
                    whiteSpace={'nowrap'}
                >
                    Start Now
                </Text>
            )}
        </Flex>
    )
}

export default SingleTopic
