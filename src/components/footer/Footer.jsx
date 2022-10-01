import { Flex, Link, Text } from '@chakra-ui/react'

const Footer = ({
    originalDsaSheetLink,
    originalAuthorLinkedInLink,
    gitHubLink,
}) => {
    return (
        <Flex
            className={'footer'}
            bg={'footerBg'}
            w={'100vw'}
            px={4}
            py={1}
            flexGrow={'0'}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
        >
            <Text
                fontWeight={'md'}
                fontSize={'xs'}
                fontFamily={'customFamily'}
                fontStyle={'normal'}
                color={'secondaryColor'}
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
                    bg={'secondaryColor'}
                    borderRadius={'16px'}
                    fontWeight={'lg'}
                    fontSize={'xs'}
                    fontFamily={'customFamily'}
                    fontStyle={'normal'}
                    color={'defaultColor'}
                >
                    This Project
                </Text>
            </Link>
        </Flex>
    )
}

export default Footer
