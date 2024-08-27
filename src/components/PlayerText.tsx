import { Player } from './models'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

interface Props {
  data: Player
}

const PlayerText = ({ data }: Props) => {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label={data.playerTeamBye} />
    </FormGroup>
  )
}

export default PlayerText
