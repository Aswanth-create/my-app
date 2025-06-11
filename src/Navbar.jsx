import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
<AppBar>
    <Toolbar>
        <h3>MyApp</h3> &nbsp;
        <Link to="/Login">
        <button variant='filled' color='secondary'>login</button>&nbsp;
        </Link>&nbsp;
<Link to="/Signup">

        <button variant='filled' color='secondary'>signup</button>&nbsp;
        </Link>&nbsp;
        <Link to='/Name'>
        <button variant='filled' color='secondary'>Name</button>&nbsp;
        </Link>&nbsp;
         <Link to='/Counter'>
        <button variant='filled' color='secondary'>Counter</button>&nbsp;
        </Link>&nbsp;
        <Link to='/User'>

         <button variant='filled' color='secondary'>User</button>&nbsp;
        
        </Link>&nbsp;
        <Link to='/product'>
        <button variant='filled' color='secondary'>product</button>&nbsp;
        </Link>



    </Toolbar>
</AppBar>

    </div>
  )
}

export default Navbar