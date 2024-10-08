import { Player } from '../models'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useCallback } from 'react'
import Box from '@mui/material/Box'
import { useAppDispatch } from '../redux/hooks'
import { togglePlayerDrafted } from '../redux/playersSlice'

const FONT_SIZE = 14

interface Props {
  player: Player
}

const PlayerItem = ({ player }: Props) => {
  const dispatch = useAppDispatch()

  const handleClick = useCallback(() => {
    dispatch(togglePlayerDrafted(player))
  }, [dispatch, player])

  return (
    <Button
      color={player.drafted ? 'inherit' : 'info'}
      fullWidth
      onClick={handleClick}
      size={'small'}
      sx={{ justifyContent: 'left', p: 0.5, position: 'relative' }}
      variant='contained'
    >
      <Typography fontSize={FONT_SIZE} sx={{ pr: 1 }}>
        {player.rank})
      </Typography>
      <Typography fontSize={FONT_SIZE}>{player.playerTeamBye}</Typography>
      {player.drafted && (
        <Box sx={{ height: 1, left: 0, position: 'absolute', width: 1 }}>
          <Box sx={{ height: 1, px: 1, position: 'relative', width: 1 }}>
            <Box sx={{ backgroundColor: 'grey.900', height: '2px', position: 'relative', top: '50%', width: 1 }} />
          </Box>
        </Box>
      )}
    </Button>
  )
}

export default PlayerItem
