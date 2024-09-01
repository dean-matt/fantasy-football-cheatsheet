import { Player } from '../models'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useCallback } from 'react'
import Box from '@mui/material/Box'
import { useAppDispatch } from '../redux/hooks'
import { togglePlayerDrafted } from '../redux/playersSlice'

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
      color={player.drafted ? 'error' : 'success'}
      fullWidth
      onClick={handleClick}
      sx={{ justifyContent: 'left', position: 'relative' }}
      variant='contained'
    >
      <Typography sx={{ pr: 1 }}>{player.rank})</Typography>
      <Typography>{player.playerTeamBye}</Typography>
      {player.drafted && (
        <Box sx={{ height: 1, left: 0, position: 'absolute', width: 1 }}>
          <Box sx={{ height: 1, px: 1, position: 'relative', width: 1 }}>
            <Box sx={{ backgroundColor: '#ffffff88', height: '2px', position: 'relative', top: '50%', width: 1 }} />
          </Box>
        </Box>
      )}
    </Button>
  )
}

export default PlayerItem
