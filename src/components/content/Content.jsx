import './ProgressBar.css'

import { Flex, Grid } from '@chakra-ui/react'

import SingleCategory from './SingleCategory.jsx'
import SingleTopic from './SingleTopic.jsx'

const Content = ({ data, setData, isHomeScreen, selectedContentIndex }) => {
    const listOfTopics = data.content
    const listOfCategory = data.content[selectedContentIndex].categoryList

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
                        {listOfTopics.map((contentData, index) => {
                            return (
                                <SingleTopic
                                    data={data}
                                    selectedContentIndex={selectedContentIndex}
                                    key={index}
                                />
                            )
                        })}
                    </Grid>
                </>
            ) : (
                listOfCategory.map((categoryData, index) => {
                    return (
                        <SingleCategory
                            data={data}
                            setData={setData}
                            selectedContentIndex={selectedContentIndex}
                            selectedCategoryIndex={index}
                            key={index}
                        />
                    )
                })
            )}
        </Flex>
    )
}

export default Content