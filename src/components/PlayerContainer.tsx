import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { memo } from 'react'

const PlayerContainer = () => {
  return (
    <Stack>
      <Card>
        <CardHeader title='Hi Jimmy!' />
        <CardContent sx={{ pt: 0 }}>
          <Divider />
          <Box sx={{ pt: 2 }}>
            <Typography>
              This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
              of frozen peas along with the mussels, if you like.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Stack>
  )
}

export default memo(PlayerContainer)
