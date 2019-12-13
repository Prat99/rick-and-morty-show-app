import React, { useState, useEffect } from 'react';
import styles from './Dashboard.module.css';
import Character from './Character';
import Search from './Search';
import Sort from './Sort';

const Dashboard = () => {
  const [state, setCharacters] = useState({
    characters: [],
    allCharacters: [],
  });

  function searchCharactersHandler(value) {
    if (!value) {
      setCharacters({
        ...state,
        characters: Object.assign([], state.allCharacters)
      });
    } else {
      setCharacters({
        ...state,
        characters: Object.assign([], state.allCharacters).filter(
          ch => ch.name.toLowerCase().indexOf(value.toLowerCase()) > -1
        )
      });
    }
  }

  
  function sortCharactersHandler(value) {
    if (value === 'dsc') {
      setCharacters({
        ...state,
        characters: state.characters.sort((a, b) => b.id - a.id)
      });
    } else {
      setCharacters({
        ...state,
        characters: state.characters.sort((a, b) => a.id - b.id)
      });
    }
  }

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(res => res.json())
      .then(res => {
        setCharacters({ characters: res.results, allCharacters: res.results });
      })
      .catch(e => console.error('error', e));
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className={`row ${styles.topHeaderRow}`}>
              <div className="col-md-4 col-lg-4 col-sm-12 col-12">
                <Search
                  searchCharactersHandler={v => searchCharactersHandler(v)}
                ></Search>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-12 col-12">
                <Sort
                  sortCharactersHandler={v => sortCharactersHandler(v)}
                ></Sort>
              </div>
            </div>

            <div className="row">
              {state.characters && state.characters.length > 0 ? (
                state.characters.map(character => (
                  <div
                    className="col-md-3 col-lg-3 col-sm-6 col-6"
                    key={`${character.created}`}
                  >
                    <Character {...character}></Character>
                  </div>
                ))
              ) : (
                <div className="col-md-12 col-sm-12 col-lg-12">
                  <div className={styles.noCharacterFound}>
                    {'No character found'}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
