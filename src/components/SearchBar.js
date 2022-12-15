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
`;

const Button = styled.button`
  text-transform: uppercase;
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
      <Input type="text" onChange={handleChange} onKeyDown={handleOnKeyDown} />
      <Button onClick={event => handleClick(input)}>Search</Button>
    </Container>
  );
}