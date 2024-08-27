import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import { memo } from 'react'
import { Player } from './models'
import PlayerCheckbox from './PlayerCheckbox'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

interface Props {
  position: string
  players: Player[]
}

const PlayerContainer = (props: Props) => {
  return (
    <Stack sx={{ position: 'relative', p: 1 }}>
      <Paper elevation={5} sx={{ px: 1 }}>
        <Stack sx={{ backgroundColor: 'background.paper', pb: 1, px: 1, position: 'sticky', top: 0, zIndex: 2 }}>
          <Typography component='h5' sx={{ pb: 1, pt: 1.5 }} variant='h5'>
            {props.position}
          </Typography>
          <Divider />
        </Stack>
        <Stack spacing={1} px={1}>
          {props.players.map((p) => (
            <PlayerCheckbox data={p} />
          ))}
        </Stack>
      </Paper>
    </Stack>
  )
}

export default memo(PlayerContainer)
