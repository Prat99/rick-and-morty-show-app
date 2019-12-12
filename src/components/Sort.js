import React, { useState } from 'react';
import styles from './Sort.module.css'


const Sort = ({sortCharactersHandler}) => {
    const [value, setSearch] = useState('');

  function sortHandler({ value }) {
    setSearch(value);
    sortCharactersHandler(value);
  }
    return (
        <div className={styles.sortContainer}>
          
            <select value={value} onChange={e => sortHandler(e.target)}>
            <option value='' disabled hidden>Sort By Id</option>
            <option value='asc'>Ascending</option>
            <option value='dsc'>Descending</option>
        </select>
        </div>
    )
}

export default Sort;