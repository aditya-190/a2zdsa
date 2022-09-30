import { Flex, Text } from '@chakra-ui/react'

import {
    Bookmark,
    GfG,
    LeetCode,
    Notes,
    Tick,
    UnTick,
    YouTube,
} from '../icons/ProjectIcons'

const SingleQuestion = ({ data, index, totalLength }) => {
    return (
        <Flex
            w={'full'}
            mb={index !== totalLength - 1 ? 2 : 0}
            key={index}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
        >
            {data.isDone ? <Tick /> : <UnTick />}

            <Text
                ml={4}
                flexGrow={1}
                vertical-align={'middle'}
                fontWeight={'400'}
                fontSize={'12px'}
                fontFamily={'?????'}
                fontStyle={'normal'}
                color={'black'}
            >
                {data.questionHeading}
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
