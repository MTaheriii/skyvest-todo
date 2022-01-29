import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { Icon } from '@mui/material'

type PriceComponentProps = {
  ruTitr?: string
  title: string
  titleStyle?: React.CSSProperties
  unit?: string
}
const PriceComponent = ({
  title,
  ruTitr = '',
  unit,
  titleStyle = { fontSize: 25 },
}: PriceComponentProps) => {
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
        {unit && (
          <Typography variant="body2" sx={{ fontSize: 10, padding: '0 4px' }}>
            {unit}
          </Typography>
        )}
      </Box>
    </Box>
  )
}

export default PriceComponent
