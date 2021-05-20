import React, { useState, useContext } from 'react';
import { GithubContext } from '../../../context/github/GithubContext';
import { AlertContext } from '../../../context/alert/AlertContext';

function Search() {
  const value = useContext(GithubContext);
  const alertvalue = useContext(AlertContext);

  const [text, setText] = useState('');

  function onChange(event) {
    const newText = event.target.value;
    setText(newText);
    console.log(text);
  }
  function onSubmit(event) {
    if (text === '') {
      alertvalue.setAlert('Please enter something', 'light');
    } else {
      value.searchUsers(text);
      setText('');
    }
    event.preventDefault();
  }
  return (
    <div>
      <form autoComplete='off' onSubmit={onSubmit} className='form'>
        <input
          className='searchInput'
          onChange={onChange}
          name='text'
          type='text'
          value={text}
          placeholder='Search Users...'
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {value.users.length > 0 && (
        <button
          className='btn btn-primary btn-block clear-btn'
          onClick={value.clearUser}
        >
          Clear
        </button>
      )}
    </div>
  );
}

export default Search;
