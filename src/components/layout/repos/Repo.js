import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';
function Repo(props) {
  const { repos } = props;
  return (
    <div className='all-center'>
      <h2 className='repo-heading'>
        Recent <span>5</span> Repositories
      </h2>

      <div className='home-card grid-2'>
        {repos.map((repo) => {
          return <RepoItem repo={repo} key={repo.id} />;
        })}
      </div>
    </div>
  );
}
Repo.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repo;
