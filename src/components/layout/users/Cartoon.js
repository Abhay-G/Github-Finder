import React, { Fragment } from 'react';
import cartoon from '../bgimg.svg';
function Cartoon() {
  return (
    <Fragment>
      <img
        src={cartoon}
        alt='loading...'
        style={{ width: '500px', margin: '100px auto 0', display: 'block' }}
      />
    </Fragment>
  );
}

export default Cartoon;
