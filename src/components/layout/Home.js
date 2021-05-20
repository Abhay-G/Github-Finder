import React, { Fragment } from 'react';
import Search from '../layout/users/Search';
import Users from '../layout/users/Users';
import Cartoon from './users/Cartoon';
const Home = () => {
  return (
    <Fragment>
      <Search />
      <Users />
      <Cartoon />
    </Fragment>
  );
};
export default Home;
