import { Flex, Text } from '@chakra-ui/react'

import SingleQuestion from './SingleQuestion.jsx'

const SingleCategory = ({ data }) => {
    const isCategoryCompleted =
        data.categoryTotalQuestions === data.categoryCompletedQuestions
    return (
        <Flex className={'singleCategory'} p={'2'} flexDirection={'column'}>
            <Flex
                flexDirection={'row'}
                justifyContent={'start'}
                alignItems={'flex-end'}
            >
                <Text
                    fontWeight={'lg'}
                    fontSize={'2xl'}
                    fontFamily={'customFamily'}
                    fontStyle={'normal'}
                    color={'textColor'}
                >
                    {'Step ' + data.categoryId + '.'}
                </Text>
                <Text
                    ml={4}
                    fontWeight={'md'}
                    fontSize={'xl'}
                    fontFamily={'customFamily'}
                    fontStyle={'normal'}
                    color={'textColor'}
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
