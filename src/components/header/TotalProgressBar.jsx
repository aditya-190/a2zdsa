import { Flex, Text } from '@chakra-ui/react'

const TotalProgressBar = ({ data }) => {
    const completedQuestions = data.header.completedQuestions
    const percentageCompleted = (
        (data.header.completedQuestions / data.header.totalQuestions) *
        100
    ).toFixed(1)
    return (
        <Flex
            className={'totalProgressBar'}
            w={'100%'}
            mt={4}
            flexDirection={'column'}
            alignItems={'center'}
        >
            <Text
                align={'center'}
                fontWeight={'lg'}
                fontSize={'lg'}
                fontFamily={'customFamily'}
                fontStyle={'normal'}
                color={'defaultColor'}
            >
                Total Question Solved:{' '}
                {completedQuestions + ' (' + percentageCompleted + '% Done)'}
            </Text>

            <Flex
                mt={2}
                bg={'totalColor'}
                borderRadius={16}
                minH={'12px'}
                w={'calc(60vw)'}
            >
                <Flex
                    bg={'completedColor'}
                    borderRadius={16}
                    w={percentageCompleted + '%'}
                />
            </Flex>
        </Flex>
    )
}

export default TotalProgressBar
