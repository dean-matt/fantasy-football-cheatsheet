import PlayerContainer from './PlayerContainer'
import { memo, useMemo } from 'react'
import playerData from '../../public/player-data.json'
import { Player, PlayerPositionCollection } from './models'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

const TILES_PER_COLUMN = 2

const Body = () => {
  const data = playerData as Player[]

  const filteredData: PlayerPositionCollection[][] = useMemo(() => {
    const stage_1: PlayerPositionCollection[] = []

    data.forEach((p) => {
      const foundCollection = stage_1.find((c) => c.position === p.pos)

      if (foundCollection) {
        foundCollection.players.push(p)
      } else {
        stage_1.push({ players: [p], position: p.pos })
      }
    })

    const stage_2: PlayerPositionCollection[][] = []

    stage_1.forEach((data, index) => {
      if (index % TILES_PER_COLUMN === 0 || !stage_2[index]) {
        stage_2.push([data])
      } else {
        stage_2[index].push(data)
      }
    })

    return stage_2
  }, [data])

  return (
    <Box flexBasis={0} flexShrink={0} flexGrow={1} sx={{ position: 'relative' }}>
      <Box sx={{ backgroundColor: 'grey.200', height: 1, p: 1, position: 'absolute', width: 1 }}>
        <Stack direction='row' height={1} position='relative' spacing={1} width={1}>
          {filteredData.map((column, index) => {
            return (
              <Stack flexGrow={1} key={index}>
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
