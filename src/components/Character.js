import React from 'react';
import styles from './Character.module.css';

const Character = ({
  id,
  name,
  status,
  species,
  gender,
  image,
  origin,
  location,
  created
}) => {
  function calculateYears(timestamp) {
    const actualYear =   new Date(timestamp).getFullYear();
    const getCurrentYear = new Date().getFullYear();
    return getCurrentYear - actualYear;
  }
  return (
    <>
      <div className={`card ${styles.cardClass}`}>
        <div className={`card-top ${styles.cardTopClass}`}>
          <img className="card-img-top" src={image} alt={name} />
          <div className={styles.overlayText}>
            <p>{name}</p>
            <p>{`id: ${id} - created ${calculateYears(
             created
            )} years ago`}</p>
          </div>
        </div>
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
