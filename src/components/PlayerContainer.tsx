import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Checkbox from '@mui/material/Checkbox'
import Divider from '@mui/material/Divider'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Stack from '@mui/material/Stack'
import { memo } from 'react'
import { Player } from './models'

interface Props {
  position: string
  players: Player[]
}

const PlayerContainer = (props: Props) => {
  return (
    <Stack>
      <Card>
        <CardHeader title={props.position} />
        <CardContent sx={{ pt: 0 }}>
          <Divider />
          <Box sx={{ pt: 2 }}>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label='Label' />
            </FormGroup>
          </Box>
        </CardContent>
      </Card>
    </Stack>
  )
}

export default memo(PlayerContainer)
