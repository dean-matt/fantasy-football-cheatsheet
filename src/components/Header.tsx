import { Menu } from '@mui/icons-material'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { memo } from 'react'

const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
          <Menu />
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color='inherit'>Hi Will!</Button>
      </Toolbar>
    </AppBar>
  )
}

export default memo(Header)
