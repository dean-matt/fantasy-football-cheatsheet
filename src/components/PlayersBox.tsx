import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import { memo } from 'react'
import PlayerItem from './PlayerItem'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import { useAppSelector } from '../redux/hooks'
import { selectPlayersWithPosition } from '../redux/playersSlice'

const SPACING = 1
const PADDING = 1

const PlayersBox = () => {
  const position = 'QB'
  const players = useAppSelector(selectPlayersWithPosition(position))

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
              {position}
            </Typography>
            <Divider />
          </Stack>
          <Box flexGrow={1} overflow='hidden' mb={PADDING} position='relative' mt={SPACING} mx={PADDING}>
            <Stack height={1} position='absolute' spacing={SPACING} sx={{ overflowY: 'scroll' }} width={1}>
              {players.map((player) => (
                <Box key={player.rank} position='relative' width={1}>
                  <PlayerItem player={player} key={player.rank} />
                </Box>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Paper>
    </Box>
  )
}

export default memo(PlayersBox)
