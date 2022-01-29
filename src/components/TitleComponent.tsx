import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { Icon } from '@mui/material'

type TitleComponentProps = {
  ruTitr?: string
  title: string
  titleStyle: React.CSSProperties
}
const TitleComponent = ({ title, ruTitr = '', titleStyle = { fontSize: 25 } }: TitleComponentProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
      }}
    >
      <Box>
        <Typography variant="body2" sx={{ color: '#ccc', fontSize: 12 }}>
          {ruTitr}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Typography variant="h4" sx={titleStyle}>
          {title}
        </Typography>
      </Box>
    </Box>
  )
}

export default TitleComponent
