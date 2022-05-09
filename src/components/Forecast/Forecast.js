import React, { useState } from 'react';

import Conditions from '../Conditions/Conditions';
import Form from '../Form/Form';

const Forecast = () => {
  const [response, setResponse] = useState({});

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
      <Conditions response={response} />
      <Form onSubmitForm={getForecast} />
    </>
  );
};

export default Forecast;
