import { stat } from 'fs'
import React, { Children, Fragment, useEffect } from 'react'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import { Loading } from './Loading'
import { StatusEnum } from '../features/enum'

export type StatusProvider = {
  export: React.ReactElement
}

type props = {
  status: StatusEnum
  content: (provider: StatusProvider) => any
  children?: any
  classWrapper?: any
}

const StatusWrapper = ({ status, content, children, classWrapper }: props) => {
  const makeExport = () => {
    let element: React.ReactElement = <Loading />
    if (status == StatusEnum.FAILED) {
      element = (
        <Alert severity="error">Error has occurred. </Alert>
      )
    } else if (status == StatusEnum.SUCCEEDED) {
      element = children
    }
    return <Box sx={classWrapper}>{element}</Box>
  }
  const provider: StatusProvider = {
    export: makeExport(),
  }

  return <Fragment>{content && content(provider)}</Fragment>
}

export default StatusWrapper
