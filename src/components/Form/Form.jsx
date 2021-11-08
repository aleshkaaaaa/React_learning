import React, { useRef, useState } from 'react';
import { AUTHORS } from '../../utils/constants';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

export const Form = ({onSendMessage}) => {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage({
        text: value,
        author: AUTHORS.human,
        id: `mes-${Date.now()}`
    });
    setValue('');
  }

  inputRef.current?.focus();

  return (
    <form onSubmit={handleSubmit}>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" value={value} onChange={handleChange} inputRef={inputRef}/>
      <Button variant="contained" type="submit">Send</Button>
    </form>
  );
};