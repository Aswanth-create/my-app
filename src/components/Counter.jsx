import React, { useState } from 'react';
import { Button } from '@mui/material';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);


    
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Count: {count}</h1>
      <Button variant="contained" color="primary" onClick={increment}>+</Button>
      <span style={{ margin: '0 10px' }}></span>
      <Button variant="contained" color="secondary" onClick={decrement}>-</Button>
    </div>
  );
};

export default Counter;
