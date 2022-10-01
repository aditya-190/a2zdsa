import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import chakraTheme from './chakraTheme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ChakraProvider theme={chakraTheme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>
)
