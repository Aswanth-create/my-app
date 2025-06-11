

import { Button, TextField } from '@mui/material'
import React from 'react'


const Signup = () => {
  return (
    <div ><h2>signup</h2>

    
    
    <TextField id="outlined-basic" label="number" variant="outlined" />
    <br />
         
        <TextField id="outlined-basic" label="username" variant="outlined" margin='normal' /><br />
        
        <TextField id="outlined-basic" label="password" variant="outlined" margin='normal' type="password"/> <br />
        <br />
        <br />
        <Button variant="contained">signup</Button>
        
    </div>
  )
}

export default Signup