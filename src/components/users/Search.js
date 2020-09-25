import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, setAlert, showClear, clearUsers }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
    e.preventDefault();
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search Users....'
          value={text}
          onChange={handleChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
