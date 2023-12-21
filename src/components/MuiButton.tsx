import React from 'react'
import {Stack , Button , IconButton, ButtonGroup , ToggleButtonGroup , ToggleButton} from '@mui/material' 

import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import {useState} from 'react'
import Container from './Container/Container.tsx';
export const MuiButton = () => {

  const[format , setFormat ] = useState<String | null>(null)
  const handelFormatChange = (
    _event:React.MouseEvent<HTMLElement> , updatedFormat : string | null )=> { 
    setFormat(updatedFormat)

  }
  return (
      <Container className="container pt-5 mt-5">

<Stack spacing={10}>

<Stack spacing={2} direction='row'>

    <Button variant='text' href='https://google.com'>Text</Button>
    <Button variant='contained' >contained</Button>
    <Button variant='outlined' disabled >outlined</Button>

</Stack>

<Stack spacing={2} direction='row' display='block'>

    <Button variant='contained' color='secondary' size='small'>secondary</Button>
    <Button variant='contained' color="warning" size='medium' startIcon={<AddCircleSharpIcon />}>warning</Button>
    <Button variant='outlined' color="success"  size='large' endIcon={<AddCircleSharpIcon />}>success</Button>
    <Button variant='contained' color="info">info</Button>
    <Button variant='text' color="error"  >error </Button>
    <IconButton color='error' size="large">
    <AddCircleSharpIcon />
    </IconButton>
    <IconButton color='primary' size="small">
    <AddCircleSharpIcon />


    </IconButton>
</Stack>


  {/* grup button */}
<Stack spacing={4} direction='row' display='block'>

  <ButtonGroup variant='contained' orientation='vertical' color='success'>
      <Button variant='contained' size='small'>left</Button>
      <Button variant='contained'  size='small'>center</Button>
      <Button variant='contained'  size='small'>right</Button>
  </ButtonGroup>



</Stack>



  {/* toggle button */}
<Stack spacing={4} direction='row' display='block'>

  <ToggleButtonGroup aria-label='text formatting' value={format}  onChange={handelFormatChange} exclusive>
  <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon /></ToggleButton>
  <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon /></ToggleButton>
  <ToggleButton value='underLined' aria-label='underLined'><FormatUnderlinedIcon /></ToggleButton>

  </ToggleButtonGroup>


</Stack>

  </Stack>


      </Container>
   )
}


