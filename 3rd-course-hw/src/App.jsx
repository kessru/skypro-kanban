import './App.css'
import { useState } from 'react'
import { GlobalStyle } from './components/Global.styled.js'
import { ThemeProvider } from 'styled-components'
import { dark, light } from './theme.js'
import { AppRoutes } from './router/AppRoutes.jsx'

function App() {
    const [switchTheme, setSwitchTheme] = useState('light') 

    return (
        <ThemeProvider theme={switchTheme === 'light' ? light : dark}>
            <GlobalStyle />
            <AppRoutes
                switchTheme={switchTheme}
                setSwitchTheme={setSwitchTheme}
            />
        </ThemeProvider>
    )
}

export default App
