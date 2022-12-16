import React from 'react';

import styled from 'styled-components';

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(0, auto) auto auto;
  grid-template-areas: 'poster' 'title' 'year';
  gap: 4px;
  // border: 1px solid red;

  .poster {
    grid-area: poster;
    width: 100%;
    max-width: 150px;
    border-radius: 8px;
  }

  .title {
    grid-area: title;
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    color: #111;
  }

  .subtitle {
    font-size: 16px;
    font-weight: 400;
    grid-area: year;
    margin: 0;
    color: #111;
  }
`;

export default function MovieCard(props) {
  return (
    <Card>
      <img className='poster' src={props.imageSrc} alt="" />
      <h3 className='title'>{props.title}</h3>
      <p className='subtitle'>({props.year})</p>
    </Card>
  );
}