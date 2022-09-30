import { Flex } from '@chakra-ui/react'

import Ads from './Ads.jsx'
import Headings from './Headings.jsx'
import SearchBar from './SearchBar.jsx'
import SubHeadings from './SubHeadings.jsx'
import TotalProgressBar from './TotalProgressBar.jsx'

const Header = ({ data, isHomeScreen, selectedContentIndex }) => {
    return (
        <Flex
            className={'header'}
            flexGrow={'0'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <Ads />
            <Headings
                heading={data.header.heading}
                darkMode={data.header.darkMode}
            />
            <SubHeadings
                showBreadCrumbs={!isHomeScreen}
                contentHeading={
                    data.content[selectedContentIndex].contentHeading
                }
                subtitle={data.header.subtitle}
                motivationalQuotes={data.header.motivationalQuotes}
            />
            {isHomeScreen ? (
                <TotalProgressBar
                    completedQuestions={data.header.completedQuestions}
                    percentageCompleted={(
                        (data.header.completedQuestions /
                            data.header.totalQuestions) *
                        100
                    ).toFixed(1)}
                />
            ) : (
                <SearchBar
                    contentCompletedQuestions={
                        data.content[selectedContentIndex]
                            .contentCompletedQuestions
                    }
                    contentTotalQuestions={
                        data.content[selectedContentIndex].contentTotalQuestions
                    }
                />
            )}
        </Flex>
    )
}

export default Header
