import React from 'react'
import {Box ,Stack , Divider , Grid } from '@mui/material' 

export const MuiBox = () => {
  return (



  <>
    <Stack className="pt-5 mt-5"  sx={{
      border: '1px solid',
    }} 
    marginTop={10}
    direction='row' 
    spacing={2}
    divider={<Divider orientation='vertical' flexItem />}
    >
    
<Box className="pt-5 mt-5" 
    sx={{
        backgroundColor: 'primary.main',
        color:'white' , 
        height:'100px' , 
        width:'100px',
        padding:'16px' , 
        transition:'1s',
        '&:hover' :{backgroundColor:'primary.light'}
    }}
    >
        hello

    </Box>


    <Box 
    display='flex' height='100px' width='100px' bgcolor='success.light'className="pt-5 mt-5" 
    p={4}
    ></Box>


    </Stack>



    <Grid container my={4} rowSpacing={2} columnSpacing={1}>

      <Grid item xs={12} sm={6} xl={3}>
        <Box bgcolor="primary.light" p={2} >Item 1</Box>
      </Grid>

      <Grid item xs={12} sm={6} xl={3}>
      <Box bgcolor="primary.light" p={2}>Item 2</Box>
      </Grid>

      <Grid item xs={12} sm={6} xl={3}>
      <Box bgcolor="primary.light" p={2}>Item 3</Box>
      </Grid>

      <Grid item xs={12} sm={6} xl={3}>
      <Box bgcolor="primary.light" p={2}>Item 4</Box>
      </Grid>

    </Grid> 

  </>


  )
}
