import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import { memo } from 'react'
import { PlayerPositionCollection } from '../models'
import PlayerCheckbox from './PlayerCheckbox'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'

interface Props {
  data: PlayerPositionCollection
}

const SPACING = 1
const PADDING = 1

const PlayerContainer = (props: Props) => {
  return (
    <Box flexGrow={1} height={1} position='relative' width={1}>
      <Paper elevation={3} sx={{ height: 1, position: 'absolute', width: 1 }}>
        <Stack height={1}>
          <Stack
            sx={{
              backgroundColor: 'background.paper',
              borderRadius: 1,
              px: PADDING,
              position: 'sticky',
              top: 0,
              zIndex: 2,
            }}
          >
            <Typography component='h6' sx={{ pt: 0.5 }} variant='h6'>
              {props.data.position}
            </Typography>
            <Divider />
          </Stack>
          <Box flexGrow={1} overflow='hidden' mb={PADDING} position='relative' mt={SPACING} mx={PADDING}>
            <Stack height={1} position='absolute' spacing={SPACING} sx={{ overflowY: 'scroll' }} width={1}>
              {props.data.players.map((p) => (
                <Box key={p.rank} position='relative' width={1}>
                  <PlayerCheckbox data={p} key={p.rank} />
                </Box>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Paper>
    </Box>
  )
}

export default memo(PlayerContainer)
