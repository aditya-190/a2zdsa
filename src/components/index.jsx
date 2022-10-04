import { Flex } from '@chakra-ui/react'

import Content from './content/Content.jsx'
import Footer from './footer/Footer.jsx'
import Header from './header/Header.jsx'
import { Reacteroids } from './NotFound/Reacteroids'

const DSA = ({ data, setData, isHomeScreen, selectedContentIndex, is404 }) => {
    const isDarkMode = data.data.header.darkMode
    return (
        <Flex
            className={'app'}
            w={'100vw'}
            h={'100vh'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'space-between'}
            bg={isDarkMode ? 'fullPageColor_dark' : 'fullPageColor'}
        >
            {is404 ? (
                <Reacteroids />
            ) : (
                <>
                    <Header
                        data={data}
                        setData={setData}
                        isHomeScreen={isHomeScreen}
                        selectedContentIndex={selectedContentIndex}
                    />
                    <Content
                        data={data}
                        setData={setData}
                        isHomeScreen={isHomeScreen}
                        selectedContentIndex={selectedContentIndex}
                    />
                    <Footer data={data} />
                </>
            )}
        </Flex>
    )
}

export default DSA
