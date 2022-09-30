import { Flex } from '@chakra-ui/react'

import Content from './components/content/Content.jsx'
import Footer from './components/footer/Footer.jsx'
import Header from './components/header/Header.jsx'
import data from './data/data.json'
function App() {
    const isHomeScreen = data.isHomeScreen
    const selectedContentIndex = data.selectedContentIndex

    return (
        <Flex
            className={'app'}
            w={'100vw'}
            h={'100vh'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'space-between'}
        >
            <Header
                data={data}
                isHomeScreen={isHomeScreen}
                selectedContentIndex={selectedContentIndex}
            />
            <Content
                data={data}
                isHomeScreen={isHomeScreen}
                selectedContentIndex={selectedContentIndex}
            />
            <Footer
                originalDsaSheetLink={data.footer.originalDsaSheetLink}
                originalAuthorLinkedInLink={
                    data.footer.originalAuthorLinkedInLink
                }
                gitHubLink={data.footer.gitHubLink}
            />
        </Flex>
    )
}

export default App
