import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import DSA from './components/index.jsx'
import initialData from './components/initialData.js'

function App() {
    const [data, setData] = useState(initialData)

    return (
        data !== null && (
            <Routes>
                <Route
                    path="/"
                    element={
                        <DSA
                            data={data}
                            setData={setData}
                            isHomeScreen={true}
                            selectedContentIndex={0}
                            is404={false}
                        />
                    }
                />
                {data.content.map((contentData, index) => {
                    return (
                        <Route
                            key={index}
                            path={contentData.contentPath}
                            element={
                                <DSA
                                    data={data}
                                    setData={setData}
                                    isHomeScreen={false}
                                    selectedContentIndex={index}
                                    is404={false}
                                />
                            }
                        />
                    )
                })}
                <Route
                    path="*"
                    element={
                        <DSA
                            data={data}
                            setData={setData}
                            isHomeScreen={true}
                            selectedContentIndex={0}
                            is404={true}
                        />
                    }
                />
            </Routes>
        )
    )
}

export default App
