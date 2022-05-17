import React, { useState } from 'react';

import styles from './Form.module.css';

const Form = props => {
  const [formData, setFormData] = useState({
    city: '',
    unit: 'metric',
    isSubmitted: true,
  });

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
      {/* <label htmlFor="city">Enter city</label> */}
      <input
        type="text"
        id="city"
        maxLength="50"
        placeholder="Enter city"
        name="city"
        value={formData.city}
        onChange={handleChange}
        className={styles.input}
      />
      <fieldset>
        <label htmlFor="fahrenheit">Fahrenheit</label>
        <input
          type="radio"
          id="fahrenheit"
          name="unit"
          value="imperial"
          checked={formData.unit === 'imperial'}
          onChange={handleChange}
          className={styles.radio}
        />
        <label htmlFor="celcius">Celcius</label>
        <input
          type="radio"
          id="celcius"
          name="unit"
          value="metric"
          checked={formData.unit === 'metric'}
          onChange={handleChange}
          className={styles.radio}
        />
      </fieldset>
      <button className={styles.btn}>Get Forecast</button>
    </form>
  );
};

export default Form;
