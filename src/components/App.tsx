import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Header from './Header'
import Body from './Body'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    success: {
      main: '#25d231',
    },
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ height: 1, position: 'relative', width: 1 }}>
        <Stack direction='column' sx={{ height: 1, position: 'relative', width: 1 }}>
          <Header />
          <Body />
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default App
