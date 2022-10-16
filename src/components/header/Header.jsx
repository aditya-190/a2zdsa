import { Flex, Text } from '@chakra-ui/react'

import Ads from './Ads.jsx'
import Headings from './Headings.jsx'
import SearchBar from './SearchBar.jsx'
import SubHeadings from './SubHeadings.jsx'
import TotalProgressBar from './TotalProgressBar.jsx'

const Header = ({
    data,
    setData,
    isHomeScreen,
    selectedContentIndex,
    searchValue,
    setSearchValue,
}) => {
    const numberOfTotalCompletedQuestions = data.data.header.completedQuestions
    const isDarkMode = data.data.header.darkMode

    return (
        <Flex
            className={'header'}
            flexGrow={'0'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            userSelect={'none'}
        >
            <Ads data={data} />
            <Headings data={data} setData={setData} />
            <SubHeadings
                data={data}
                selectedContentIndex={selectedContentIndex}
                showBreadCrumbs={!isHomeScreen}
            />
            {isHomeScreen ? (
                numberOfTotalCompletedQuestions === 0 ? (
                    <Text
                        mt={4}
                        align={'center'}
                        fontWeight={'md'}
                        fontSize={{ base: 'sm', md: 'xl' }}
                        fontFamily={'customFamily'}
                        fontStyle={'normal'}
                        color={
                            isDarkMode ? 'defaultColor_dark' : 'defaultColor'
                        }
                    >
                        Start Solving 🔥
                    </Text>
                ) : (
                    <TotalProgressBar data={data} />
                )
            ) : (
                <SearchBar
                    data={data}
                    setData={setData}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    selectedContentIndex={selectedContentIndex}
                />
            )}
        </Flex>
    )
}

export default Header
