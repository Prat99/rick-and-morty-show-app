import React, { useState, useEffect } from 'react';
import Character from './Character';
import Search from './Search';
import Sort from './Sort';

const Dashboard = () => {
  const [state, setCharacters] = useState({
    characters: [],
    allCharacters: []
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
        characters: Object.assign([], state.characters).filter(
          ch => ch.name.toLowerCase().indexOf(value.toLowerCase()) > -1
        )
      });
    }
  }

  function sortCharactersHandler(value) {
    console.log('value', value);
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
      .catch(e => console.log('error', e));
  }, []);

  return (
    <>
     <div className='container-fluid'>
     <div className="row">
        <div className="col-md-12">
          <p>{console.log('characters', state.characters)}</p>
          <div>
            <Search searchCharactersHandler={v => searchCharactersHandler(v)}></Search>
            <Sort sortCharactersHandler={v => sortCharactersHandler(v)}></Sort>
          </div>
          <div className="row">
            {state.characters &&
              state.characters.length > 0 &&
              state.characters.map(character => (
                <div className="col-md-3">
                  <Character key={character.id} {...character}></Character>
                </div>
              ))}
          </div>
        </div>
      </div>
     </div>
    </>
  );
};

export default Dashboard;
