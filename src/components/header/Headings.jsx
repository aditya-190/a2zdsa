import { Flex, Text } from '@chakra-ui/react'

import { DarkModeToggle } from '../icons/ProjectIcons.jsx'

const Headings = ({ data, setData }) => {
    const heading = data.header.heading
    return (
        <Flex
            className={'headings'}
            w={'100vw'}
            px={6}
            mt={4}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
        >
            <DarkModeToggle data={data} setData={setData} toShow={false} />
            <Text
                flexGrow={1}
                align={'center'}
                fontWeight={'lg'}
                fontSize={'2xl'}
                fontFamily={'customFamily'}
                fontStyle={'normal'}
                color={'defaultColor'}
            >
                {heading}
            </Text>
            <DarkModeToggle data={data} setData={setData} toShow={true} />
        </Flex>
    )
}

export default Headings