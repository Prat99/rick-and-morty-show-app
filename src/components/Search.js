import React, { useState } from 'react';
import styles from './Search.module.css';

const Search = ({ searchCharactersHandler }) => {
  const [value, setSearch] = useState('');

  function searchHandler({ value }) {
    setSearch(value);
    searchCharactersHandler(value);
  }

  return (
    <div className={styles.searchContainer}>
      <label htmlFor='search'>Search By Name</label>
      <input
        id='search'
        type="text"
        value={value}
        onChange={e => searchHandler(e.target)}
      ></input>
    </div>
  );
};

export default Search;
