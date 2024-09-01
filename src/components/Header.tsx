import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { memo } from 'react'

const Header = () => {
  return (
    <AppBar color={'info'} position='static' sx={{ zIndex: 1000 }}>
      <Toolbar disableGutters variant={'dense'}>
        <Box flexGrow={1} px={1}>
          <Typography variant='h6' component='div'>
            Fantasy Football Cheatsheet
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default memo(Header)
