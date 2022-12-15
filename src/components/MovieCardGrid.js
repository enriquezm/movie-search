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
  const [data , setData] = useState(null);
  const [error, setError] = useState(null);

  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${keyword}`);

        if (!response.ok) {
          setError('Error while fetching data');
          setData(null);
          throw Error('Could not fetch data');
        }

        const responseJson = await response.json();

        if (responseJson.Error) {
          setError(responseJson.Error);
        } else {
          setError(null);
        }

        setData(responseJson.Search);
      } catch(error) {
        setError(error.message);
        setData(null);
      }
    }
    
    getData();
  }, [keyword, setKeyword]);

  const handleClick = (input) => setKeyword(input);

  return (
    <>
      <SearchBar handleClick={handleClick}  />
      <section>
        <Heading>Sharing a few of our favorite movies</Heading>
        <Grid>
          { error && (<p>{error}</p>) }
          {
            data && data.map((movie) => {
              return (
                <li className='grid-item' key={movie.imdID}>
                  <MovieCard title={movie.Title} imageSrc={movie.Poster} year={movie.Year} />
                </li>
              );
            })
          }
        </Grid>
      </section>
    </>
  );
}