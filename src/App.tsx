import React from 'react'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';

import { MuiTypograohy } from './components/MuiTypograohy.tsx'
import { MuiButton } from './components/MuiButton.tsx'
import MuiTextField from './components/MuiTextField.tsx'
import MuiSelect from './components/MuiSelect.tsx'
import MuiRadio from './components/MuiRadio.tsx'

import Nav from './components/NavCom/Nav.tsx'
import { Container } from '@mui/material';  
import MuiSwitch from './components/MuiSwitch.tsx';
import { MuiBox } from './components/MuiBox.tsx';

const App = () => {
  return (
    <div>
        <Router>
          <Nav></Nav>
        <Container>
        <Routes>
            <Route path='/MuiTypograohy' element={<MuiTypograohy />}/>
            <Route path='/MuiButton' element={<MuiButton />}/>
            <Route path='/MuiSelect' element={<MuiSelect />}/>
            <Route path='/MuiTextField' element={<MuiTextField />}/>
            <Route path='/MuiRadio' element={<MuiRadio />}/>
            <Route path='/MuiSwitch' element={<MuiSwitch />}/>
            <Route path='/MuiBox' element={<MuiBox />}/>

        </Routes>
        </Container>
        </Router>


        {/* <MuiTypograohy></MuiTypograohy> */}
        {/* <MuiButton></MuiButton> */}
        {/* <MuiTextField></MuiTextField> */}
        {/* <MuiSelect></MuiSelect> */}
        {}
    </div>
  )
}

export default App