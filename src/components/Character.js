import React from 'react';
import styles from './Character.module.css'

const Character = ({
  name,
  status,
  species,
  type,
  gender,
  image,
  origin,
  location
}) => {
  return (
    <>
      <div className={`card ${styles.cardClass}`}>
        <img class="card-img-top" src={image} alt={name} />
        <div className={`card-body ${styles.chCardBody}`}>
          <p className={styles.chInfoClass}>
            <span>STATUS</span>
            <span>{status}</span>
          </p>
          <p>
            <span>SPECIES</span>
            <span>{species}</span>
          </p>
          <p>
            <span>GENDER</span>
            <span>{gender}</span>
          </p>
          <p>
            <span>ORIGIN</span>
            <span>{origin && origin.name}</span>
          </p>
          <p>
            <span>LAST LOCATION</span>
            <span>{location && location.name}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Character;
