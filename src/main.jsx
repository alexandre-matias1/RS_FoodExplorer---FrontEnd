import React from 'react'
import ReactDOM from 'react-dom/client'
import { SignIn } from './pages/SignIn'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import { Test } from './pages/Test'
import { DishView } from './pages/DishView'
import { Home } from './pages/Home'

import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <DishView />
    </ThemeProvider>
  </React.StrictMode>,
)
