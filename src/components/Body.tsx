import Stack from '@mui/material/Stack'
import PlayerContainer from './PlayerContainer'
import { memo } from 'react'

const Body = () => {
  return (
    <Stack sx={{ p: 2 }}>
      <PlayerContainer position='QB' players={[]} />
    </Stack>
  )
}

export default memo(Body)
