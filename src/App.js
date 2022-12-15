import React from 'react';
import MovieCardGrid from './components/MovieCardGrid';
import Header from './components/SiteHeader';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export default function App() {
  return (
    <Container className='App'>
      <Header />
      <MovieCardGrid />
    </Container>
  );
}