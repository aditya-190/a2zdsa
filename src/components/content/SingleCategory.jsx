import { Flex, Text } from '@chakra-ui/react'

import SingleQuestion from './SingleQuestion.jsx'

const SingleCategory = ({
    data,
    setData,
    selectedContentIndex,
    selectedCategoryIndex,
}) => {
    const current =
        data.data.content[selectedContentIndex].categoryList[
            selectedCategoryIndex
        ]
    const categoryId = current.categoryId
    const categoryName = current.categoryName
    const listOfQuestion = current.questionList
    const isCompleted =
        current.categoryTotalQuestions === current.categoryCompletedQuestions

    return (
        <Flex className={'singleCategory'} p={2} flexDirection={'column'}>
            <Flex
                flexDirection={'row'}
                justifyContent={'start'}
                alignItems={'center'}
            >
                <Text
                    h={'100%'}
                    fontWeight={'xl'}
                    fontSize={{ base: 'sm', md: 'lg' }}
                    fontFamily={'customFamily'}
                    fontStyle={'normal'}
                    color={'textColor'}
                    whiteSpace={'nowrap'}
                >
                    {'Step ' + categoryId + '.'}
                </Text>
                <Text
                    ml={{ base: 1, md: 2 }}
                    fontWeight={'xl'}
                    fontSize={{ base: 'sm', md: 'lg' }}
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
