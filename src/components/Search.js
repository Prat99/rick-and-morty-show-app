import React, { useState } from 'react';

const Search = ({ searchCharactersHandler }) => {
  const [value, setSearch] = useState('');

  function searchHandler({ value }) {
    setSearch(value);
    searchCharactersHandler(value);
  }

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={e => searchHandler(e.target)}
      ></input>
    </div>
  );
};

export default Search;
