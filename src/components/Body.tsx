import PlayerContainer from './PlayerContainer'
import { memo, useMemo } from 'react'
import { PlayerPositionCollection } from '../models'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Theme } from '@mui/material/styles'
import { useAppSelector } from '../redux/hooks'

const SPACING = 1
const DEFAULT_TILES_PER_ROW = 3
const MEDIUM_TILES_PER_ROW = 2
const SMALLEST_TILES_PER_ROW = 1

const Body = () => {
  const smallestTilePerRow = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const mediumTilesPerRow = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const players = useAppSelector((s) => s.players.values)

  const tilesPerRow = useMemo(() => {
    if (smallestTilePerRow) return SMALLEST_TILES_PER_ROW
    else if (mediumTilesPerRow) return MEDIUM_TILES_PER_ROW
    else return DEFAULT_TILES_PER_ROW
  }, [mediumTilesPerRow, smallestTilePerRow])

  const filteredPlayers: PlayerPositionCollection[][] = useMemo(() => {
    const stage_1: PlayerPositionCollection[] = []

    players.forEach((p) => {
      const foundCollection = stage_1.find((c) => c.position === p.position)

      if (foundCollection) {
        foundCollection.players.push(p)
      } else {
        stage_1.push({ players: [p], position: p.position })
      }
    })

    const stage_2: PlayerPositionCollection[][] = []

    stage_1.forEach((data, index) => {
      if (index % tilesPerRow === 0) {
        stage_2.push([data])
      } else {
        stage_2[stage_2.length - 1].push(data)
      }
    })

    return stage_2
  }, [players, tilesPerRow])

  return (
    <Box flexBasis={0} flexShrink={0} flexGrow={1} sx={{ position: 'relative' }}>
      <Box sx={{ backgroundColor: 'grey.200', height: 1, p: 1, position: 'absolute', width: 1 }}>
        <Stack height={1} position='relative' spacing={SPACING} width={1}>
          {filteredPlayers.map((column, index) => {
            return (
              <Stack direction='row' flexGrow={1} key={index} spacing={SPACING}>
                {column.map((data) => (
                  <PlayerContainer data={data} key={data.position} />
                ))}
              </Stack>
            )
          })}
        </Stack>
      </Box>
    </Box>
  )
}

export default memo(Body)
