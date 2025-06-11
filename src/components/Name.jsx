import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const Name = () => {
  const [name, setName] = useState("alan");
  const [a, setA] = useState(name); // Initial display name

  const inputHandler = (e) => {
    setName(e.target.value);
  };

  const addHandler = () => {
    setA(name); // Update the displayed name
  };
  const Name = () => {
    const[name,setName]=useState("alan")
    const inputHandler= (e) =>{
      setName(e.target.value)
    }
  }

  return (
    <div >
      <h1>Welcome {a}</h1>
      <TextField 
        variant="outlined" 
        label="Enter name" 
        onChange={inputHandler} 
        value={name}
      /> 
      <br /><br />
      <Button variant="contained" onClick={addHandler}>Add</Button>
      <br /><br /><br />



      <h1>welcome {name}</h1>
      <TextField variant='outlined' label='enter name' onChange={inputHandler}/>

    </div>



  );
};

export default Name;
