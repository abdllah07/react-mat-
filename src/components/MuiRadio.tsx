import React, { useState } from 'react'
import {Box , FormControl , FormLabel , FormControlLabel , RadioGroup, Radio} from '@mui/material'
const MuiRadio = () => {

const [value , setValue ] = useState('')
console.log({value})
const handleChange = (e : React.ChangeEvent<HTMLInputElement>)=> { 
setValue(e.target.value)
}

  return (

    <Box className="container pt-5 mt-5">
      <FormControl error>
        <FormLabel id="job-experience-group-label">
          Years Of experience
        </FormLabel>

        <RadioGroup name="job-experience-group" 
        aria-labelledby='job-experience-group-label' value={value} onChange={handleChange} row>
          <FormControlLabel 
            control={<Radio />} label='0-2'
            value={'0-2'}
            
          />
           <FormControlLabel 
            control={<Radio />} label='3-5'
            value={'3-5'}
          />
           <FormControlLabel 
            control={<Radio size="small" color='success'/>} label='6-8'
            value={'6-8'}
          />
           <FormControlLabel 
            control={<Radio />} label='9-11'
            value={'9-11'}
          />
        </RadioGroup>
      </FormControl>
    </Box>
  )
}

export default MuiRadio