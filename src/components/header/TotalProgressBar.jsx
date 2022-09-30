import { Flex, Text } from '@chakra-ui/react'

const TotalProgressBar = ({ completedQuestions, percentageCompleted }) => {
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
                fontWeight={'500'}
                fontSize={'18px'}
                fontFamily={'?????'}
                fontStyle={'normal'}
                color={'black'}
            >
                Total Question Solved:{' '}
                {completedQuestions + ' (' + percentageCompleted + '% Done)'}
            </Text>

            <Flex
                mt={2}
                bg={'#4F4F4F'}
                borderRadius={16}
                minH={'12px'}
                w={'calc(60vw)'}
            >
                <Flex
                    bg={'#F3C623'}
                    borderRadius={16}
                    w={percentageCompleted + '%'}
                />
            </Flex>
        </Flex>
    )
}

export default TotalProgressBar
