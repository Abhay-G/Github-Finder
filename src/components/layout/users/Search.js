import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Search(props) {
  const [text, setText] = useState('');

  function onChange(event) {
    const newText = event.target.value;
    setText(newText);
  }
  function onSubmit(event) {
    if (text === '') {
      props.setAlert('Please enter something', 'light');
    } else {
      props.searchUser(text);
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
      {props.showClear && (
        <button
          className='btn btn-primary btn-block clear-btn'
          onClick={props.clearUser}
        >
          Clear
        </button>
      )}
    </div>
  );
}
Search.propTypes = {
  searchUser: PropTypes.func.isRequired,
  clearUser: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
