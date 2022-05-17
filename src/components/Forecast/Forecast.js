import React, { useState } from 'react';

import Form from '../Form/Form';
import Results from '../Results/Results';
import './Forecast.mdule.css';

const Forecast = () => {
  const [response, setResponse] = useState(null);
  const [enteredData, setEnteredData] = useState({
    city: '',
    unit: 'metric',
    isSubmitted: false,
  });

  function getForecast(enteredFormData) {
    const data = {
      ...enteredFormData,
    };
    setEnteredData(data);
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
      .then(response => setResponse(response));
    //   .catch(err => console.error(err));
  }

  if (enteredData.isSubmitted === true) {
    return (
      <>
        <h1>
          Discover the <span>weather</span>
          <br /> in your city
        </h1>
        <Results response={response} />
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
    </>
  );
};

export default Forecast;
