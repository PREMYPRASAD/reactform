import { Button, TextField } from '@mui/material';

import React from 'react'

const Login = () => {
  return (
    <div>
          
          <TextField variant='filled' label='email'></TextField>
          <br></br>
          <br></br>  
          <TextField variant='filled' label='password' type='password'></TextField>
          <br></br>
          <br></br>
          <Button variant='contained'>login</Button>
      </div>
  )
}

export default Login





