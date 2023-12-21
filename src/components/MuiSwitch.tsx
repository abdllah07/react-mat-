import React, { useState } from 'react'
import {Box ,FormControlLabel , Switch , Stack , Rating } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'


const MuiSwitch = () => {

  const [value , setValue] = useState(false)
  console.log(value)
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=> {
    setValue(e.target.checked)
  }



  const [rat , setRat ] = useState<number | null>(null)
  console.log(rat)
  const handleChangeRAT = (e : React.ChangeEvent<{}> , newValue : number | null)=> {
    setRat(newValue)
  }
  return (
   <>

<Box className="pt-4 mt-5">
        <FormControlLabel label='dark Mode' control={<Switch  checked={value} 
        onChange={handleChange} size='medium' color='warning'/>} 
        />

    </Box>


    <Stack spacing={2} className="pt-5">

      <Rating  value={rat} onChange={handleChangeRAT}
      icon={<FavoriteIcon />} emptyIcon={<FavoriteBorderIcon/>}/>
    </Stack>
  </>
  )
}

export default MuiSwitch