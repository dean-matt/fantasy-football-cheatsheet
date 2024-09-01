import PlayersBox from './PlayersBox'
import { memo } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

const SPACING = 1

const Body = () => {
  // const smallestTilePerRow = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  // const mediumTilesPerRow = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <Box flexBasis={0} flexShrink={0} flexGrow={1} sx={{ position: 'relative' }}>
      <Box sx={{ backgroundColor: 'grey.200', height: 1, p: 1, position: 'absolute', width: 1 }}>
        <Stack height={1} position='relative' spacing={SPACING} width={1}>
          <Stack direction='row' flexGrow={1} spacing={SPACING}>
            <PlayersBox />
            <PlayersBox />
            <PlayersBox />
          </Stack>
          <Stack direction='row' flexGrow={1} spacing={SPACING}>
            <PlayersBox />
            <PlayersBox />
            <PlayersBox />
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}

export default memo(Body)
