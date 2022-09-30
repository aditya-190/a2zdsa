import { Flex, Link, Text } from '@chakra-ui/react'

const Footer = ({
    originalDsaSheetLink,
    originalAuthorLinkedInLink,
    gitHubLink,
}) => {
    return (
        <Flex
            className={'footer'}
            bg={'#27AE60'}
            w={'100vw'}
            px={4}
            py={1}
            flexGrow={'0'}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
        >
            <Text
                fontWeight={'400'}
                fontSize={'12px'}
                fontFamily={'?????'}
                fontStyle={'normal'}
                color={'white'}
            >
                A Personal web-based progress tracker based on{' '}
                {
                    <a
                        href={originalDsaSheetLink}
                        target={'_blank'}
                        rel="noreferrer"
                    >
                        <b>A2Z DSA Sheet</b>
                    </a>
                }{' '}
                by{' '}
                {
                    <a
                        href={originalAuthorLinkedInLink}
                        target={'_blank'}
                        rel="noreferrer"
                    >
                        <b>Striver</b>
                    </a>
                }
                .
            </Text>

            <Link href={gitHubLink} target={'_blank'} _hover={{}}>
                <Text
                    w={'fit-content'}
                    h={'fit-content'}
                    px={4}
                    py={1}
                    bg={'white'}
                    borderRadius={'16px'}
                    fontWeight={'700'}
                    fontSize={'12px'}
                    fontFamily={'?????'}
                    fontStyle={'normal'}
                    color={'black'}
                >
                    This Project
                </Text>
            </Link>
        </Flex>
    )
}

export default Footer
