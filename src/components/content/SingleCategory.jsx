import { Flex, Text } from '@chakra-ui/react'

import SingleQuestion from './SingleQuestion.jsx'

const SingleCategory = ({
    data,
    setData,
    selectedContentIndex,
    selectedCategoryIndex,
    searchValue,
}) => {
    const isDarkMode = data.data.header.darkMode
    const current =
        data.data.content[selectedContentIndex].categoryList[
            selectedCategoryIndex
        ]
    const categoryId = current.categoryId
    const categoryName = current.categoryName
    const listOfQuestion = current.questionList
    const isCompleted =
        current.categoryTotalQuestions === current.categoryCompletedQuestions
    const isBookmark = data.data.header.isBookmarkFilterRequired
    const isSearchable = searchValue !== ''

    const filteredListOfQuestions = () => {
        const filteredData = listOfQuestion.filter(singleQuestion =>
            isSearchable
                ? singleQuestion.questionHeading
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                : (isBookmark && singleQuestion.isBookmarked) || !isBookmark
        )
        return [filteredData, filteredData.length !== 0]
    }

    return (
        <Flex
            className={'singleCategory'}
            p={2}
            flexDirection={'column'}
            display={filteredListOfQuestions()[1] ? 'flex' : 'none'}
        >
            <Flex
                flexDirection={'row'}
                justifyContent={'start'}
                alignItems={'center'}
            >
                <Text
                    h={'100%'}
                    fontWeight={'lg'}
                    fontSize={{ base: 'sm', md: 'xl' }}
                    fontFamily={'customFamily'}
                    fontStyle={'normal'}
                    color={isDarkMode ? 'defaultColor_dark' : 'defaultColor'}
                    whiteSpace={'nowrap'}
                >
                    {'Step ' + categoryId + '.'}
                </Text>
                <Text
                    ml={{ base: 1, md: 2 }}
                    fontWeight={'lg'}
                    fontSize={{ base: 'sm', md: 'xl' }}
                    fontFamily={'customFamily'}
                    fontStyle={'normal'}
                    color={isDarkMode ? 'defaultColor_dark' : 'defaultColor'}
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
                {filteredListOfQuestions()[0].map((questionData, index) => {
                    return (
                        <SingleQuestion
                            data={data}
                            setData={setData}
                            selectedContentIndex={selectedContentIndex}
                            selectedCategoryIndex={selectedCategoryIndex}
                            selectedQuestionIndex={questionData.questionIndex}
                            key={index}
                        />
                    )
                })}
            </Flex>
        </Flex>
    )
}

export default SingleCategory
