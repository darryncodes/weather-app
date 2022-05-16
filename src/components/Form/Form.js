import React, { useState } from 'react';

const Form = props => {
  //   let [city, setCity] = useState('');
  //   let [unit, setUnit] = useState('metric');
  const [formData, setFormData] = useState({ city: '', unit: 'metric' });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onSubmitForm(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter City"
        maxLength="50"
        name="city"
        value={formData.city}
        onChange={handleChange}
      />
      <input
        type="radio"
        id="fahrenheit"
        name="unit"
        value="imperial"
        checked={formData.unit === 'imperial'}
        onChange={handleChange}
      />
      <label htmlFor="fahrenheit">Fahrenheit</label>
      <input
        type="radio"
        id="celcius"
        name="unit"
        value="metric"
        checked={formData.unit === 'metric'}
        onChange={handleChange}
      />
      <label htmlFor="celcius">Celcius</label>
      <button>Get Forecast</button>
    </form>
  );
};

export default Form;
