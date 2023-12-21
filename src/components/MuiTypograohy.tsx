import React from 'react'

import {Typography} from '@mui/material'

export const MuiTypograohy = () => {
  return (
    <div>
            <Typography variant="h2" >Hello world</Typography>
            <Typography variant="h2" component="h1" gutterBottom>Hello world</Typography>
            <Typography variant="h2" >Hello world</Typography>

            <Typography variant="subtitle1">Hello world</Typography>
            <Typography variant="subtitle2" >Hello world</Typography>

            <Typography variant="body1" >Hello world</Typography>
            <Typography variant="body2" >Hello world</Typography>

    </div>
  )
}
