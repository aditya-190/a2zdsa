import { Flex } from '@chakra-ui/react'

import Content from './content/Content.jsx'
import Footer from './footer/Footer.jsx'
import Header from './header/Header.jsx'
import { Reacteroids } from './NotFound/Reacteroids'

const DSA = ({ data, setData, isHomeScreen, selectedContentIndex, is404 }) => {
    const originalDsaSheetLink = data.data.footer.originalDsaSheetLink
    const originalAuthorLinkedInLink =
        data.data.footer.originalAuthorLinkedInLink
    const gitHubLink = data.data.footer.gitHubLink

    return (
        <Flex
            className={'app'}
            w={'100vw'}
            h={'100vh'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'space-between'}
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
                    <Footer
                        originalDsaSheetLink={originalDsaSheetLink}
                        originalAuthorLinkedInLink={originalAuthorLinkedInLink}
                        gitHubLink={gitHubLink}
                    />
                </>
            )}
        </Flex>
    )
}

export default DSA
