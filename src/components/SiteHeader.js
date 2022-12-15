import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  background-color: #111;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 24px;
`;

export default function Header() {
  const title = 'hooked';

  return (
    <Container>{ title }</Container>
  );
}