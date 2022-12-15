import React from 'react';
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

export default function SearchBar() {
  const handleChange = event => console.log(event.target.value);

  const handleClick = () => console.log('button clicked');

  return (
    <Container>
      <Input type="text" onChange={handleChange} />
      <Button onClick={handleClick}>Search</Button>
    </Container>
  );
}