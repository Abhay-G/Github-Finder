import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import { reducer } from './GithubReducer';

export const GithubContext = createContext();

export const GithubProvider = (props) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
    repos: [],
    alert: null,
  };

  //Search Users
  const searchUsers = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({ type: 'SEARCH_USERS', payload: res.data.items });
  };
  //GET USER
  const getUser = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({ type: 'GET_USER', payload: res.data });
  };
  //Get User Repos
  const getUserRepo = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({ type: 'GET_REPOS', payload: res.data });
  };
  //SET LOADING
  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  //Clear Users
  const clearUser = () => dispatch({ type: 'CLEAR_USERS' });

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUser,
        getUser,
        getUserRepo,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
