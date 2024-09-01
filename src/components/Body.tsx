import PlayersBox from './PlayersBox'
import { memo, useMemo } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { useAppSelector } from '../redux/hooks'
import { selectPositions } from '../redux/playersSlice'
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const SPACING = 1
const DEFAULT_TILES_PER_ROW = 3
const MEDIUM_TILES_PER_ROW = 2
const SMALLEST_TILES_PER_ROW = 1

const Body = () => {
  const positions = useAppSelector(selectPositions)
  const smallestTilePerRow = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const mediumTilesPerRow = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  const tilesPerRow = useMemo(() => {
    if (smallestTilePerRow) return SMALLEST_TILES_PER_ROW
    else if (mediumTilesPerRow) return MEDIUM_TILES_PER_ROW
    else return DEFAULT_TILES_PER_ROW
  }, [mediumTilesPerRow, smallestTilePerRow])

  const positionRows: string[][] = useMemo(() => {
    const rows: string[][] = []

    positions.forEach((position, index) => {
      if (index % tilesPerRow === 0) {
        rows.push([position])
      } else {
        rows[rows.length - 1].push(position)
      }
    })

    return rows
  }, [positions, tilesPerRow])

  return (
    <Box flexBasis={0} flexShrink={0} flexGrow={1} sx={{ position: 'relative' }}>
      <Box sx={{ backgroundColor: 'grey.200', height: 1, p: 1, position: 'absolute', width: 1 }}>
        <Stack height={1} position='relative' spacing={SPACING} width={1}>
          {positionRows.map((row, index) => (
            <Stack direction='row' flexGrow={1} key={index} spacing={SPACING}>
              {row.map((position) => (
                <PlayersBox initialPosition={position} key={`${index}_${position}`} />
              ))}
            </Stack>
          ))}
        </Stack>
      </Box>
    </Box>
  )
}

export default memo(Body)
