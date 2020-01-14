import React from 'react'
import { compose } from 'redux'
import { provider, listen } from '@k-ramel/react'
import { ThemeProvider } from '@material-ui/core/styles'

import { store } from 'store'
import { Body } from 'components/body'
import { theme } from 'style/theme'
import { useStyles } from 'style'
import { listeners } from 'app.listeners'

const App = () => {
  useStyles()
  return (
    <ThemeProvider theme={theme}>
      <Body />
    </ThemeProvider>
  )
}

export default compose(
  provider(store),
  listen(listeners, 'APP')
)(App)
