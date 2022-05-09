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

    const enteredData = {
      ...formData,
    };

    props.onSubmitForm(enteredData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter City"
        maxLength="50"
        value={formData.city}
        onChange={handleChange}
      />
      <label>
        htmlFor="fahrenheit"
        <input
          type="radio"
          id="fahrenheit"
          name="unit"
          value="imperial"
          checked={formData.unit === 'imperial'}
          onChange={handleChange}
        />
        Fahrenheit
      </label>
      <label>
        htmlFor="celcius"
        <input
          type="radio"
          id="celcius"
          name="unit"
          value="metric"
          checked={formData.unit === 'metric'}
          onChange={handleChange}
        />
        Celcius
      </label>
      <button>Get Forecast</button>
    </form>
  );
};

export default Form;
