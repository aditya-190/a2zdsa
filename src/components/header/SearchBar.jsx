import {
    Editable,
    EditableInput,
    EditablePreview,
    Flex,
    Text,
} from '@chakra-ui/react'

import { Bookmark, Notes } from '../icons/ProjectIcons.jsx'

const SearchBar = ({ contentCompletedQuestions, contentTotalQuestions }) => {
    return (
        <Flex
            className={'searchBar'}
            w={'calc(80vw)'}
            mt={4}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <Flex
                borderWidth={'2px'}
                borderColor={'indianFlag1Color'}
                borderRadius={'6px'}
                p={2}
                cursor={'pointer'}
                alignItems={'center'}
                justifyContent={'center'}
                background={'indianFlag1Bg'}
            >
                <Notes fontSize={'16px'} />
            </Flex>

            <Flex
                borderWidth={'2px'}
                borderColor={'indianFlag1Color'}
                borderTopLeftRadius={'6px'}
                borderBottomLeftRadius={'6px'}
                p={2}
                ml={1}
                cursor={'pointer'}
                alignItems={'center'}
                justifyContent={'center'}
                background={'indianFlag1Bg'}
            >
                <Text
                    align={'center'}
                    fontWeight={'xl'}
                    fontSize={'xs'}
                    fontFamily={'customFamily'}
                    fontStyle={'normal'}
                    color={'indianFlag1Color'}
                >
                    Pick Random
                </Text>
            </Flex>

            <Flex
                borderWidth={'2px'}
                borderColor={'indianFlag2Color'}
                p={2}
                ml={1}
                flexGrow={1}
                alignitems={'center'}
                justifyContent={'center'}
            >
                <Editable
                    w={'full'}
                    align={'center'}
                    fontWeight={'xl'}
                    fontSize={'xs'}
                    fontFamily={'customFamily'}
                    fontStyle={'normal'}
                    placeholder={'Search Questions...'}
                >
                    <EditablePreview
                        p={0}
                        borderRadius={0}
                        background={'none'}
                    />
                    <EditableInput boxShadow={'none !important'} p={0} />
                </Editable>
            </Flex>

            <Flex
                borderWidth={'2px'}
                borderColor={'indianFlag3Color'}
                borderTopRightRadius={'6px'}
                borderBottomRightRadius={'6px'}
                p={2}
                ml={1}
                cursor={'pointer'}
                alignItems={'center'}
                justifyContent={'center'}
                background={'indianFlag3Bg'}
            >
                <Text
                    align={'center'}
                    fontWeight={'xl'}
                    fontSize={'xs'}
                    fontFamily={'customFamily'}
                    fontStyle={'normal'}
                    color={'indianFlag3Color'}
                >
                    {contentCompletedQuestions +
                        '/' +
                        contentTotalQuestions +
                        ' Done'}
                </Text>
            </Flex>

            <Flex
                borderWidth={'2px'}
                borderColor={'indianFlag3Color'}
                borderRadius={'6px'}
                p={2}
                ml={1}
                cursor={'pointer'}
                alignItems={'center'}
                justifyContent={'center'}
                background={'indianFlag3Bg'}
            >
                <Bookmark fontSize={'16px'} />
            </Flex>
        </Flex>
    )
}

export default SearchBar
