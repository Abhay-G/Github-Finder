import React from 'react';
import notFound from './notFound.svg';
function NotFound() {
  return (
    <div>
      <img className='cartoon-home' src={notFound} alt='not found img' />
      <p className='lead all-center'>Page you are looking for does not exist</p>
    </div>
  );
}

export default NotFound;
