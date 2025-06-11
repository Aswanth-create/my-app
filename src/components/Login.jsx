import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Login = () => {

var[x,setX]=useState()
const inpt=()=>{
setX("react")

}
const inpt2=()=>{
    setX("angular")
}
const inpt3=()=>{
    setX("next")
}
// useEffect(()=>{},[])
useEffect(()=>{
    inpt2()
},[])


  return (
    <div>
        <h1>welcome to {x}</h1>
        <Button variant='outlined' color='primary' onClick={inpt}>react</Button>&nbsp;
        <Button variant='outlined' color='primary' onClick={inpt2}>angular</Button>&nbsp;
        <Button variant='outlined' color='primary' onClick={inpt3}>nextjs</Button>&nbsp;

    </div>
  )
}

export default Login
