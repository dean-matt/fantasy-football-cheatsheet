import Stack from '@mui/material/Stack'
import PlayerContainer from './PlayerContainer'
import { memo, useMemo } from 'react'
import playerData from '../../public/player-data.json'
import { Player, PlayerPositionCollection } from './models'
import { Box } from '@mui/material'

const Body = () => {
  const data = playerData as Player[]

  const filteredData: PlayerPositionCollection[] = useMemo(() => {
    const collection: PlayerPositionCollection[] = []

    data.forEach((p) => {
      const foundCollection = collection.find((c) => c.position === p.pos)

      if (foundCollection) {
        foundCollection.players.push(p)
      } else {
        collection.push({ players: [p], position: p.pos })
      }
    })

    return collection
  }, [data])

  return (
    <Stack flexGrow={1} sx={{ height: 1, px: 2, position: 'relative' }}>
      <Box sx={{ height: 1, overflowY: 'scroll' }}>
        {filteredData.map((c) => (
          <PlayerContainer position={c.position} players={c.players} />
        ))}
      </Box>
    </Stack>
  )
}

export default memo(Body)
