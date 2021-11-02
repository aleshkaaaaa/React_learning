import React, { useRef, useState } from 'react';
import { AUTHORS } from '../../utils/constants';

export const Form = ({onSendMessage}) => {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    onSendMessage({
        text: value,
        author: AUTHORS.human,
        id: `mes-${Date.now()}`
    });
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <input className="input" type="submit" />
    </form>
  )
}