import React, { Fragment, useContext } from 'react';
import cartoon from '../bgimg.svg';
import { GithubContext } from '../../../context/github/GithubContext';
function Cartoon() {
  const { users } = useContext(GithubContext);
  return (
    <Fragment>
      {users.length <= 0 && (
        <img src={cartoon} alt='loading...' className='cartoon-home' />
      )}
    </Fragment>
  );
}

export default Cartoon;
