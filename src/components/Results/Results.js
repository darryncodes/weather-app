import React from 'react';

import styles from './Results.module.css';

const Results = props => {
  if (props.response === null) return;

  let city = props.response.name;
  let temperature = Math.round(props.response.main.temp);
  let condition = props.response.weather[0].description;

  //   console.log(props);

  return (
    <div className={styles.card}>
      <p>
        <span className={styles.temp}>{temperature}</span> in{' '}
        <span className={styles.city}>{city}</span>
        <br /> with {condition}
      </p>
    </div>
  );
};

export default Results;
