import { Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'

import {
    Bookmark,
    GfG,
    LeetCode,
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
    const [isHovering, setHovering] = useState(false)
    const current =
        data.content[selectedContentIndex].categoryList[selectedCategoryIndex]
            .questionList
    const totalLength = current.length
    const isDone = current[selectedQuestionIndex].isDone
    const questionHeading = current[selectedQuestionIndex].questionHeading

    return (
        <Flex
            w={'full'}
            mb={selectedQuestionIndex !== totalLength - 1 ? 2 : 0}
            key={selectedQuestionIndex}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            onMouseEnter={() => {
                setHovering(true)
            }}
            onMouseLeave={() => {
                setHovering(false)
            }}
        >
            {isDone || isHovering ? <Tick /> : <UnTick />}

            <Text
                ml={4}
                flexGrow={1}
                vertical-align={'middle'}
                fontWeight={'md'}
                fontSize={'xs'}
                fontFamily={'customFamily'}
                fontStyle={'normal'}
                color={'defaultColor'}
            >
                {questionHeading}
            </Text>

            <Flex flexDirection={'row'} ml={6}>
                <YouTube />
                <GfG ml={4} />
                <LeetCode ml={4} />
            </Flex>
            <Flex flexDirection={'row'} ml={6}>
                <Notes />
                <Bookmark ml={4} />
            </Flex>
        </Flex>
    )
}

export default SingleQuestion
