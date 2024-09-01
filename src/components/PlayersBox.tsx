import Stack from '@mui/material/Stack'
import { memo, useCallback, useMemo, useState } from 'react'
import PlayerItem from './PlayerItem'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import { useAppSelector } from '../redux/hooks'
import { selectPlayers, selectPlayersWithPosition } from '../redux/playersSlice'
import PositionDropdown from './PositionDropdown'
import { sortPlayers } from '../helpers/sorting'

const SPACING = 0.5
const PADDING = 1

interface Props {
  initialPosition?: string
}

const PlayersBox = ({ initialPosition }: Props) => {
  const [position, setPosition] = useState<string | undefined>(initialPosition)
  const players = useAppSelector(position ? selectPlayersWithPosition(position) : selectPlayers)

  const handlePositionChanged = useCallback((position?: string) => {
    setPosition(position)
  }, [])

  const sortedPlayers = useMemo(() => sortPlayers(players), [players])

  return (
    <Box flexGrow={1} height={1} position='relative' width={1}>
      <Paper elevation={3} sx={{ height: 1, position: 'absolute', width: 1 }}>
        <Stack height={1}>
          <Stack
            sx={{
              backgroundColor: 'background.paper',
              borderRadius: 1,
              position: 'sticky',
              top: 0,
              zIndex: 2,
            }}
          >
            <Box sx={{ pt: PADDING, px: PADDING }}>
              <PositionDropdown initialValue={initialPosition} onChange={handlePositionChanged} />
            </Box>
          </Stack>
          <Box flexGrow={1} overflow='hidden' mb={PADDING} position='relative' mt={SPACING} mx={PADDING}>
            <Stack height={1} position='absolute' spacing={SPACING} sx={{ overflowY: 'scroll' }} width={1}>
              {sortedPlayers?.map((player) => (
                <Box key={player.rank} position='relative' width={1}>
                  <PlayerItem player={player} />
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
