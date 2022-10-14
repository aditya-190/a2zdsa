function DiffChecker(original, current) {
    if (JSON.stringify(original) === JSON.stringify(current)) return original

    original.data.header['darkMode'] = current.data.header['darkMode']

    original.data.header['isBookmarkFilterRequired'] =
        current.data.header['isBookmarkFilterRequired']

    original.data.header['completedQuestions'] =
        current.data.header['completedQuestions']

    const contentLength = current.data.content.length - 1
    original.data.content.map((singleContent, index1) => {
        if (index1 <= contentLength) {
            singleContent['contentUserNotes'] =
                current.data.content[index1]['contentUserNotes']

            singleContent['contentCompletedQuestions'] =
                current.data.content[index1]['contentCompletedQuestions']

            const categoryLength =
                current.data.content[index1]['categoryList'].length - 1
            singleContent['categoryList'].map((singleCategory, index2) => {
                if (index2 <= categoryLength) {
                    singleCategory['categoryCompletedQuestions'] =
                        current.data.content[index1]['categoryList'][index2][
                            'categoryCompletedQuestions'
                        ]

                    const questionLength =
                        current.data.content[index1]['categoryList'][index2][
                            'questionList'
                        ].length - 1
                    singleCategory['questionList'].map(
                        (singleQuestion, index3) => {
                            if (index3 <= questionLength) {
                                singleQuestion['isDone'] =
                                    current.data.content[index1][
                                        'categoryList'
                                    ][index2]['questionList'][index3]['isDone']

                                singleQuestion['isBookmarked'] =
                                    current.data.content[index1][
                                        'categoryList'
                                    ][index2]['questionList'][index3][
                                        'isBookmarked'
                                    ]

                                singleQuestion['userNotes'] =
                                    current.data.content[index1][
                                        'categoryList'
                                    ][index2]['questionList'][index3][
                                        'userNotes'
                                    ]
                            }
                        }
                    )
                }
            })
        }
    })
    return original
}

export default DiffChecker
