import { Player } from '../models'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useCallback, useState } from 'react'
import Box from '@mui/material/Box'

interface Props {
  data: Player
}

const PlayerCheckbox = ({ data }: Props) => {
  const [checked, setChecked] = useState(false)

  const handleClick = useCallback(() => {
    setChecked((previous) => !previous)
  }, [])

  return (
    <Button
      color={checked ? 'error' : 'success'}
      fullWidth
      onClick={handleClick}
      sx={{ justifyContent: 'left', position: 'relative' }}
      variant='contained'
    >
      <Typography sx={{ pr: 1 }}>{data.rank})</Typography>
      <Typography>{data.playerTeamBye}</Typography>
      {checked && (
        <Box sx={{ height: 1, left: 0, position: 'absolute', width: 1 }}>
          <Box sx={{ height: 1, px: 1, position: 'relative', width: 1 }}>
            <Box sx={{ backgroundColor: '#ffffff88', height: '2px', position: 'relative', top: '50%', width: 1 }} />
          </Box>
        </Box>
      )}
    </Button>
  )
}

export default PlayerCheckbox
