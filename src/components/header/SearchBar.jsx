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
                border={'2px solid #FF9933'}
                borderRadius={'6px'}
                p={2}
                cursor={'pointer'}
                alignItems={'center'}
                justifyContent={'center'}
                background={'rgba(255, 153, 51, 0.05)'}
            >
                <Notes fontSize={'16px'} />
            </Flex>

            <Flex
                border={'2px solid #FF9933'}
                borderTopLeftRadius={'6px'}
                borderBottomLeftRadius={'6px'}
                p={2}
                ml={1}
                cursor={'pointer'}
                alignItems={'center'}
                justifyContent={'center'}
                background={'rgba(255, 153, 51, 0.05)'}
            >
                <Text
                    align={'center'}
                    fontWeight={'700'}
                    fontSize={'12px'}
                    fontFamily={'?????'}
                    fontStyle={'normal'}
                    color={'#FF9933'}
                >
                    Pick Random
                </Text>
            </Flex>

            <Flex
                border={'2px solid #000080'}
                p={2}
                ml={1}
                flexGrow={1}
                alignitems={'center'}
                justifyContent={'center'}
            >
                <Editable
                    w={'full'}
                    align={'center'}
                    fontWeight={'700'}
                    fontSize={'12px'}
                    fontFamily={'?????'}
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
                border={'2px solid #138808'}
                borderTopRightRadius={'6px'}
                borderBottomRightRadius={'6px'}
                p={2}
                ml={1}
                cursor={'pointer'}
                alignItems={'center'}
                justifyContent={'center'}
                background={'rgba(19, 136, 8, 0.05)'}
            >
                <Text
                    align={'center'}
                    fontWeight={'700'}
                    fontSize={'12px'}
                    fontFamily={'?????'}
                    fontStyle={'normal'}
                    color={'#138808'}
                >
                    {contentCompletedQuestions +
                        '/' +
                        contentTotalQuestions +
                        ' Done'}
                </Text>
            </Flex>

            <Flex
                border={'2px solid #138808'}
                borderRadius={'6px'}
                p={2}
                ml={1}
                cursor={'pointer'}
                alignItems={'center'}
                justifyContent={'center'}
                background={'rgba(19, 136, 8, 0.05)'}
            >
                <Bookmark fontSize={'16px'} />
            </Flex>
        </Flex>
    )
}

export default SearchBar
