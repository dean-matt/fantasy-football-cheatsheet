import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { memo, useCallback, useEffect, useState } from 'react'
import { useAppSelector } from '../redux/hooks'
import { selectPositions } from '../redux/playersSlice'

interface Props {
  initialValue?: string
  onChange: (position: string) => any
}

const PositionDropdown = ({ initialValue, onChange }: Props) => {
  const values = useAppSelector(selectPositions)
  const [value, setValue] = useState(initialValue ?? values[0])

  const handlePositionChanged = useCallback((event: SelectChangeEvent) => {
    setValue(event.target.value)
  }, [])

  useEffect(() => {
    onChange(value)
  }, [onChange, value])

  return (
    <FormControl fullWidth size={'small'} variant={'standard'}>
      <InputLabel id='position-selector'>Position</InputLabel>
      <Select id='position-selector' label='Position' onChange={handlePositionChanged} value={value}>
        {values.map((position) => (
          <MenuItem key={position} value={position}>
            {position}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default memo(PositionDropdown)
