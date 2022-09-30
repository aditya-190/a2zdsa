import './ProgressBar.css'

import { Flex, Grid, Hide, Show } from '@chakra-ui/react'

import SingleCategory from './SingleCategory.jsx'
import SingleTopic from './SingleTopic.jsx'

const Content = ({ data, isHomeScreen, selectedContentIndex }) => {
    return (
        <Flex
            className={'content'}
            my={2}
            w={'80vw'}
            flexGrow={'1'}
            flexDirection={'column'}
            border={'2px solid #000000'}
            borderRadius={'6px'}
            p={2}
            overflowY={'scroll'}
        >
            {isHomeScreen ? (
                <>
                    <Show above={'md'}>
                        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                            {data.content.map((contentData, index) => {
                                return (
                                    <SingleTopic
                                        data={contentData}
                                        key={index}
                                    />
                                )
                            })}
                        </Grid>
                    </Show>
                    <Hide above={'md'}>
                        <Grid templateColumns="repeat(1, 1fr)" gap={4}>
                            {data.content.map((contentData, index) => {
                                return (
                                    <SingleTopic
                                        data={contentData}
                                        key={index}
                                    />
                                )
                            })}
                        </Grid>
                    </Hide>
                </>
            ) : (
                data.content[selectedContentIndex].categoryList.map(
                    (categoryData, index) => {
                        return (
                            <SingleCategory data={categoryData} key={index} />
                        )
                    }
                )
            )}
        </Flex>
    )
}

export default Content
