import { Flex, Text } from '@chakra-ui/react'

import Ads from './Ads.jsx'
import Headings from './Headings.jsx'
import SearchBar from './SearchBar.jsx'
import SubHeadings from './SubHeadings.jsx'
import TotalProgressBar from './TotalProgressBar.jsx'

const Header = ({ data, setData, isHomeScreen, selectedContentIndex }) => {
    const numberOfTotalCompletedQuestions = data.header.completedQuestions
    return (
        <Flex
            className={'header'}
            flexGrow={'0'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <Ads />
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
                        fontSize={'lg'}
                        fontFamily={'customFamily'}
                        fontStyle={'normal'}
                        color={'defaultColor'}
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
                    selectedContentIndex={selectedContentIndex}
                />
            )}
        </Flex>
    )
}

export default Header
