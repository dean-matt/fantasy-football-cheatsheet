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

const SPACING = 1
const PADDING = 2

const PlayerContainer = (props: Props) => {
  return (
    <Stack sx={{ position: 'relative', p: PADDING }}>
      <Paper elevation={5}>
        <Stack sx={{ backgroundColor: 'background.paper', px: PADDING, position: 'sticky', top: 0, zIndex: 2 }}>
          <Typography component='h5' sx={{ pb: 1, pt: 1.5 }} variant='h5'>
            {props.position}
          </Typography>
          <Divider />
        </Stack>
        <Stack spacing={SPACING} pb={PADDING} pt={SPACING} px={PADDING}>
          {props.players.map((p) => (
            <PlayerCheckbox data={p} />
          ))}
        </Stack>
      </Paper>
    </Stack>
  )
}

export default memo(PlayerContainer)
