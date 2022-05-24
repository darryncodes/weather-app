import React, { useState } from 'react';

import Form from '../Form/Form';
import Results from '../Results/Results';
import styles from './Forecast.module.css';

const Forecast = () => {
  const [response, setResponse] = useState(null);
  const [enteredData, setEnteredData] = useState({
    city: '',
    unit: 'metric',
    isSubmitted: false,
  });

  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);

  function getForecast(enteredFormData) {
    const data = {
      ...enteredFormData,
    };
    setEnteredData(data);

    if (data.city.length === 0) {
      return setError(true);
    }

    // Clear state in preparation for new data
    setError(false);
    setResponse(null);
    setLoading(true);

    let uriEncodedCity = encodeURIComponent(data.city);
    fetch(
      `https://community-open-weather-map.p.rapidapi.com/weather?units=${data.unit}&q=${uriEncodedCity}`,
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        },
      }
    )
      .then(response => response.json())
      .then(response => {
        if (response.cod !== 200) {
          throw new Error();
        }
        setResponse(response);
        setLoading(false);
      })
      .catch(err => {
        setError(true);
        setLoading(false);
        console.log(err.message);
      });
  }
  console.log(response);
  if (
    enteredData.isSubmitted === true &&
    enteredData.city.length !== 0 &&
    response !== null
  ) {
    return (
      <>
        <h1>
          Discover the <span>weather</span>
          <br /> in your city
        </h1>
        <Results response={response} />
        {loading && <div className={styles.loader}></div>}
      </>
    );
  }
  return (
    <>
      <h1>
        Discover the <span>weather</span>
        <br /> in your city
      </h1>
      <Form onSubmitForm={getForecast} />
      {error && <small>Please enter a valid city.</small>}
    </>
  );

  //   return (
  //     <>
  //       <h1>
  //         Discover the <span>weather</span>
  //         <br /> in your city
  //       </h1>
  //       <Results response={response} />
  //       <Form onSubmitForm={getForecast} />
  //       {error && <small>Please enter a valid city.</small>}
  //       {loading && <div className={styles.loader}></div>}
  //     </>
  //   );
};

export default Forecast;
