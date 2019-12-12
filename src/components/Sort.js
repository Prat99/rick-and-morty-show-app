import React, { useState } from 'react';


const Sort = ({sortCharactersHandler}) => {
    const [value, setSearch] = useState('');

  function sortHandler({ value }) {
    setSearch(value);
    sortCharactersHandler(value);
  }
    return (
        <select value={value} onChange={e => sortHandler(e.target)}>
            <option value='asc'>Ascending</option>
            <option value='dsc'>Descending</option>
        </select>
    )
}

export default Sort;