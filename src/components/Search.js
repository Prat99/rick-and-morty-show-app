import React, { useState } from 'react';
import styles from './Search.module.css';
import SVG from 'react-inlinesvg';
import search from '../Static/Images/system_search.svg';

const Search = ({ searchCharactersHandler }) => {
  const [value, setSearch] = useState('');

  function searchHandler({ value }) {
    setSearch(value);
    searchCharactersHandler(value);
  }

  return (
    <div className={styles.searchContainer}>
      <label htmlFor="search">Search By Name</label>
      <div className={styles.inputWrapper}>
        <input
          id="search"
          type="text"
          value={value}
          onChange={e => searchHandler(e.target)}
        ></input>
        <span className={styles.searchIcon}>
          <SVG src={search} />
        </span>
      </div>
    </div>
  );
};

export default Search;
