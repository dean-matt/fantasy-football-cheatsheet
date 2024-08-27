import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Header from './Header'

const App = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ height: 1, position: 'relative', width: 1 }}>
        <Stack direction='column'>
          <Header />
        </Stack>
      </Box>
    </>
  )
}

export default App
