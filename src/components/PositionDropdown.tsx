import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { memo, useCallback, useEffect, useState } from 'react'
import { useAppSelector } from '../redux/hooks'
import { selectPositions } from '../redux/playersSlice'

const UNDEFINED_VALUE = '---'

interface Props {
  initialValue?: string
  onChange: (position?: string) => any
}

const PositionDropdown = ({ initialValue, onChange }: Props) => {
  const values = useAppSelector(selectPositions)
  const [value, setValue] = useState<string>(initialValue ?? UNDEFINED_VALUE)

  const handlePositionChanged = useCallback((event: SelectChangeEvent) => {
    setValue(event.target.value)
  }, [])

  useEffect(() => {
    if (value === UNDEFINED_VALUE) onChange(undefined)
    else onChange(value)
  }, [onChange, value])

  return (
    <FormControl fullWidth size={'small'} variant={'standard'}>
      <Select
        id='position-selector'
        label='Position'
        onChange={handlePositionChanged}
        sx={{ '& .MuiInputBase-input': { pl: 2 } }}
        value={value}
      >
        <MenuItem value={UNDEFINED_VALUE}>{UNDEFINED_VALUE}</MenuItem>
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
