import React, { useState } from 'react'
import {Box , TextField , MenuItem , Stack , Autocomplete } from '@mui/material'
const MuiSelect = () => {


    // one selecet 
    const [country , setCountry] = useState('')
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>)=> {
        setCountry(e.target.value as string)
    }
    console.log({country})

    // nulti select 
    const [countries , setCountries] = useState<string[]>([])
    const handleChangeMulti = (e : React.ChangeEvent<HTMLInputElement>)=> {
        const value = e.target.value 
        setCountries(typeof value === 'string' ? value.split(',') : value)
    }
    console.log({countries})

    // select auto complate


    type Skill = {
        id:number
        label : string
    }

    const Skills = ['html' , 'css' , 'react' , 'vue']

    const SkillOptions = Skills.map((skill ,index ) => ({
        id:index + 1 , 
        label:skill
    }))

    const [select , setSelect] = useState<String | null>(null)
    const [select1 , setSelect1] = useState<Skill | null>(null)

    console.log({select})
    console.log({select1})

    const handleOnchangeSelect = (e : any , newValue: Skill | null)=> {
        setSelect1(newValue)
    }



  return (
    <>

    {/* one Select */}
    <Box width='450px' className="container pt-5 mt-5">
        <TextField label='Select Country' select value={country} onChange={handleChange} fullWidth>
            <MenuItem value="Ksa">Ksa</MenuItem>
            <MenuItem value="syr">syria</MenuItem>
            <MenuItem value="tr">turkiye</MenuItem>
            <MenuItem value="us">us</MenuItem>
        </TextField>
    </Box>

    {/* multi select */}
    <br />
    <Box width='450px' className="container pt-5 mt-5">
        <TextField
            label='Select Country' 
            select value={countries} 
            onChange={handleChangeMulti} 
            fullWidth
            SelectProps={{
                multiple:true
            }}
            size='small'
            color='secondary'
            helperText="Please select your country"
        >
            <MenuItem value="Ksa">Ksa</MenuItem>
            <MenuItem value="syr">syria</MenuItem>
            <MenuItem value="tr">turkiye</MenuItem>
            <MenuItem value="us">us</MenuItem>
        </TextField>
    </Box>


    {/* select auto complate */}
        
        <Stack spacing={4} width='450px'  className="container pt-5 mt-5">
            <Autocomplete options={SkillOptions} renderInput={(params) =>
            <TextField {...params} label="Skills" 
            /> 

        }
            value={select1} 
            onChange={handleOnchangeSelect}
        />

        </Stack>

    </>
    )
}

export default MuiSelect