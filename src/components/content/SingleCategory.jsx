import { Flex, Text } from '@chakra-ui/react'

import SingleQuestion from './SingleQuestion.jsx'

const SingleCategory = ({
    data,
    setData,
    selectedContentIndex,
    selectedCategoryIndex,
}) => {
    const current =
        data.content[selectedContentIndex].categoryList[selectedCategoryIndex]
    const categoryId = current.categoryId
    const categoryName = current.categoryName
    const listOfQuestion = current.questionList
    const isCompleted =
        current.categoryTotalQuestions === current.categoryCompletedQuestions

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
                    {'Step ' + categoryId + '.'}
                </Text>
                <Text
                    ml={4}
                    fontWeight={'md'}
                    fontSize={'xl'}
                    fontFamily={'customFamily'}
                    fontStyle={'normal'}
                    color={'textColor'}
                    textDecorationLine={isCompleted ? 'line-through' : 'none'}
                >
                    {categoryName}
                </Text>
            </Flex>

            <Flex
                mt={4}
                flexDirection={'column'}
                alignItems={'start'}
                justifyContent={'center'}
            >
                {listOfQuestion.map((questionData, index) => {
                    return (
                        <SingleQuestion
                            data={data}
                            setData={setData}
                            selectedContentIndex={selectedContentIndex}
                            selectedCategoryIndex={selectedCategoryIndex}
                            selectedQuestionIndex={index}
                            key={index}
                        />
                    )
                })}
            </Flex>
        </Flex>
    )
}

export default SingleCategory
