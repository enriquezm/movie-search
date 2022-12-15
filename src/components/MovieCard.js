import React from 'react';

import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 18px;
    font-weight: 700;
  }

  .poster {
    width: 100%;
    max-width: 150px;
  }
`;

export default function MovieCard(props) {
  return (
    <Card>
      <h3 className='title'>{props.title}</h3>
      <img className='poster' src={props.imageSrc} alt="" />
      <p>({props.year})</p>
    </Card>
  );
}