import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../users/Spinner';
import Repo from '../repos/Repo';
import { GithubContext } from '../../../context/github/GithubContext';
const SingleUser = (props) => {
  const value = useContext(GithubContext);
  useEffect(() => {
    value.getUser(props.match.params.login);
    value.getUserRepo(props.match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    company,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = value.user;
  const repos = value.repos;

  if (value.loading) return <Spinner />;
  return (
    <Fragment>
      <Link to='/' className='back btn btn-light'>
        Back To Home
      </Link>
      Hireable:{' '}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle' />
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            className='round-img'
            alt='avatar img'
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3 className='neon'>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a
            href={html_url}
            className='btn btn-dark my-1'
            target='_blank'
            rel='noreferrer'
          >
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong className='neon'>Username: </strong>
                  {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong className='neon'>Company: </strong>
                  {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong className='neon'>Website: </strong>
                  {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-danger'>Public repo: {public_repos}</div>
        <div className='badge badge-dark'>Public Gists: {public_gists}</div>
      </div>
      <div>
        {repos.length > 0 ? (
          <Repo repos={repos} />
        ) : (
          <div className='alert alert-light'>
            <i className='fas fa-info-circle' />
            No repository exist
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default SingleUser;
