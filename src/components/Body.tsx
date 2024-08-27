import Stack from '@mui/material/Stack'
import PlayerContainer from './PlayerContainer'
import { memo } from 'react'
import playerData from '../../public/player-data.json'
import { Player } from './models'
import { Box } from '@mui/material'

const Body = () => {
  const data = playerData as Player[]

  return (
    <Stack flexGrow={1} sx={{ height: 1, px: 2, position: 'relative' }}>
      <Box sx={{ height: 1, overflowY: 'scroll' }}>
        <PlayerContainer position='QB' players={data} />
      </Box>
    </Stack>
  )
}

export default memo(Body)
