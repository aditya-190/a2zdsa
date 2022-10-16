import { Flex, Text } from '@chakra-ui/react'

import { DarkModeToggle } from '../icons/ProjectIcons.jsx'

const Headings = ({ data, setData }) => {
    const heading = 'A2Z DSA Tracker'
    const isDarkMode = data.data.header.darkMode
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
                fontSize={'5xl'}
                fontFamily={'customFamily'}
                fontStyle={'normal'}
                color={isDarkMode ? 'defaultColor_dark' : 'defaultColor'}
            >
                {heading}
            </Text>
            <DarkModeToggle data={data} setData={setData} toShow={true} />
        </Flex>
    )
}

export default Headings
