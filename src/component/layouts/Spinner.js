import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <img src={spinner} alt='spinner_image' style={{ display: 'block', margin: 'auto', width: '300px' }} />
  )
}

export default Spinner
