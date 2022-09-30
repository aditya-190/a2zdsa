import { Flex, Text } from '@chakra-ui/react'

import SingleQuestion from './SingleQuestion.jsx'

const SingleCategory = ({ data }) => {
    const isCategoryCompleted =
        data.categoryTotalQuestions === data.categoryCompletedQuestions
    return (
        <Flex
            className={'singleCategory'}
            p={'2'}
            flexDirection={'column'}
        >
            <Flex
                flexDirection={'row'}
                justifyContent={'start'}
                alignItems={'flex-end'}
            >
                <Text
                    fontWeight={'500'}
                    fontSize={'24px'}
                    fontFamily={'?????'}
                    fontStyle={'normal'}
                    color={'black'}
                >
                    {'Step' + data.categoryId + '.'}
                </Text>
                <Text
                    ml={4}
                    fontWeight={'400'}
                    fontSize={'22px'}
                    fontFamily={'?????'}
                    fontStyle={'normal'}
                    color={'black'}
                    textDecorationLine={
                        isCategoryCompleted ? 'line-through' : 'none'
                    }
                >
                    {data.categoryName}
                </Text>
            </Flex>

            <Flex
                mt={4}
                flexDirection={'column'}
                alignItems={'start'}
                justifyContent={'center'}
            >
                {data.questionList.map((questionData, index) => {
                    return (
                        <SingleQuestion
                            data={questionData}
                            key={index}
                            index={index}
                            totalLength={data.questionList.length}
                        />
                    )
                })}
            </Flex>
        </Flex>
    )
}

export default SingleCategory
