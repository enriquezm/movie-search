import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  gap: 4px;
`;

const Input = styled.input`
  flex-grow: 2;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  padding: 8px 16px;
`;

const Button = styled.button`
  text-transform: uppercase;
  border-radius: 4px;
  border: 1px solid transparent;
  color: white;
  background-color: #dd1a8f;
  cursor: pointer;
`;

export default function SearchBar({handleClick}) {
  const [input, setInput] = useState('');

  const handleChange = event => setInput(event.target.value);

  const handleOnKeyDown = event => {
    if (event.keyCode === 13) {
      handleClick(input);
    }
  };

  return (
    <Container>
      <Input
        placeholder='Enter movie title...'
        type="text"
        onChange={handleChange}
        onKeyDown={handleOnKeyDown} 
      />
      <Button onClick={event => handleClick(input)}>Search</Button>
    </Container>
  );
}