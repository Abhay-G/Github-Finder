import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from './Spinner';
import { GithubContext } from '../../../context/github/GithubContext';
function Users() {
  const githubContext = useContext(GithubContext);
  const { users, loading } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='users'>
        {users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  }
}

export default Users;
