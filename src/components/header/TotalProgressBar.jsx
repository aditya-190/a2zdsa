import { Flex, Text } from '@chakra-ui/react'

const TotalProgressBar = ({ data }) => {
    const isDarkMode = data.data.header.darkMode
    const completedQuestions = data.data.header.completedQuestions
    const percentageCompleted = (
        (data.data.header.completedQuestions /
            data.data.header.totalQuestions) *
        100
    ).toFixed(1)
    return (
        <Flex
            className={'totalProgressBar'}
            mt={4}
            flexDirection={'column'}
            alignItems={'center'}
        >
            <Text
                align={'center'}
                fontWeight={'lg'}
                fontSize={{ base: 'sm', md: 'xl' }}
                fontFamily={'customFamily'}
                fontStyle={'normal'}
                color={isDarkMode ? 'defaultColor_dark' : 'defaultColor'}
            >
                Total Question Solved:{' '}
                {completedQuestions + ' (' + percentageCompleted + '% Done)'}
            </Text>

            <Flex
                mt={2}
                bg={isDarkMode ? 'totalColor_dark' : 'totalColor'}
                borderRadius={16}
                minH={'12px'}
                w={'70vw'}
            >
                <Flex
                    bg={isDarkMode ? 'completedColor_dark' : 'completedColor'}
                    borderRadius={16}
                    w={percentageCompleted + '%'}
                />
            </Flex>
        </Flex>
    )
}

export default TotalProgressBar
