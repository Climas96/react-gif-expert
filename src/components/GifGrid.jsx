import { useEffect, useState } from 'react';
import { GifItem } from './GifItem';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  // console.log({ isLoading });

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>cargando...</h2>}
      <div className='card-grid'>
        {/* Podemos utlizar desestructuración */}
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
