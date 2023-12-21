import { Stack  , TextField , InputAdornment, Input} from '@mui/material'
import React from 'react'


import {useState} from 'react'


const MuiTextField = () => {
    const [value , setValue] = useState('')
  return (
    <Stack spacing={4} className="container pt-5 mt-5">
         <Stack spacing={2} direction='row'>
        <TextField  label="Name" variant='outlined' color='secondary' size='small' required helperText="write first name " type='text'/>
        <TextField  label="Name " variant='filled' color='warning' size='medium' />
        <TextField  label="Name " variant='standard' color='success' size='medium' disabled/>


        </Stack>
        <Stack spacing={2} direction='row'>

            <TextField  label="Name" variant='outlined' InputProps={
                {
                    startAdornment: <InputAdornment position='start'>$</InputAdornment>
                }
            } />
              <TextField  label="Name" variant='outlined' InputProps={
                {
                    endAdornment: <InputAdornment position='start'>$</InputAdornment>
                }
            } />

        </Stack>
        <TextField  label="Name " variant='filled'  size='medium'  value={value} onChange={
            (e) => {
                setValue(e.target.value)
            }
        } error={!value} helperText={!value ? 'Required' : 'write the first name '} />
    </Stack>
  )
}

export default MuiTextField