import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <div>
      <h3>
        <a
          className='repo-links'
          href={repo.html_url}
          target='_blank'
          rel='noreferrer'
        >
          {repo.name}
        </a>
        <p className='repo-desc'>{repo.description}</p>
      </h3>
    </div>
  );
};
RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};
export default RepoItem;
