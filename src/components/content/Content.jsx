import './ProgressBar.css'

import { Flex, Grid } from '@chakra-ui/react'

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
            borderColor={'defaultColor'}
            borderWidth={'2px'}
            borderRadius={'6px'}
            p={2}
            overflowY={'scroll'}
        >
            {isHomeScreen ? (
                <>
                    <Grid
                        templateColumns={{
                            base: 'repeat(1, 1fr)',
                            md: 'repeat(3, 1fr)',
                        }}
                        gap={4}
                    >
                        {data.content.map((contentData, index) => {
                            return (
                                <SingleTopic data={contentData} key={index} />
                            )
                        })}
                    </Grid>
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
