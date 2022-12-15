import React, { useState, useEffect } from 'react';

import MovieCard from './MovieCard';
import SearchBar from './SearchBar';

import styled from 'styled-components';

const Heading = styled.h2`
  font-size: 18px;
  font-weight: 400;
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  max-width: 1200px;
  width: 100%;

  .grid-item {
    list-style-type: none;
  }
`;

export default function MovieCardGrid() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const apiKey = process.env.REACT_APP_API_KEY;

      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=iron`);
      const responseJson = await response.json();

      const movieCards = responseJson.Search.map((movie) => {
        return (
          <li className='grid-item' key={movie.imdID}>
            <MovieCard title={movie.Title} imageSrc={movie.Poster} year={movie.Year} />
          </li>
        );
      });

      setData(movieCards);
    }

    if(!data) {
      getData()
    }
  }, [data, setData]);

  return (
    <>
      <SearchBar />
      <section>
        <Heading>Sharing a few of our favorite movies</Heading>
        <Grid>
          { data }
        </Grid>
      </section>
    </>
  );
}