import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { Icon } from '@mui/material'

type LinkComponentProps = {
  title: string
  icon: React.ReactElement | string
  url: string
}
const LinkComponent = ({ title, icon, url }: LinkComponentProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center'}}>
      <Icon sx={{ fontSize: 14, margin: '0 5px', color: '#dfdcdc' }}>{icon}</Icon>
      <a href={url} target="_blank" style={{textDecoration: 'none'}}>
        <Typography variant="h6" sx={{color: '#dfdcdc', fontSize: 14}}>{title}</Typography>
      </a>
      <Icon sx={{ fontSize: 18, margin: '0 5px', color: 'rgb(52, 112, 240)' }}>arrow_forward</Icon>
    </Box>
  )
}

export default LinkComponent
