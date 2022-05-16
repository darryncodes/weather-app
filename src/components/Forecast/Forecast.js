import React, { useState } from 'react';

import Form from '../Form/Form';
import Results from '../Results/Results';

const Forecast = () => {
  const [response, setResponse] = useState(null);

  function getForecast(enteredFormData) {
    const data = {
      ...enteredFormData,
    };
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

  return (
    <>
      <h2>Find current weather conditions</h2>
      <Form onSubmitForm={getForecast} />
      <Results response={response} />
    </>
  );
};

export default Forecast;
