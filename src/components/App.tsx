import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Header from './Header'
import Body from './Body'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import { createTheme } from '@mui/material/styles'
import playerData from '../assets/player-data.json'
import { useEffect } from 'react'
import { useAppDispatch } from '../redux/hooks'
import { setValues } from '../redux/playersSlice'
import { sortPlayers } from '../helpers/sorting'

const theme = createTheme({})

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setValues(sortPlayers(playerData)))
  }, [dispatch])

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
