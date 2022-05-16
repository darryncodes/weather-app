import React from 'react';

const Results = props => {
  if (props.response === null) return;

  let city = props.response.name;
  let temperature = Math.round(props.response.main.temp);
  let condition = props.response.weather[0].description;

  console.log(props);

  return (
    <>
      <p>{city}</p>
      <p>
        It is currently {temperature} degrees out with {condition}
      </p>
    </>
  );
};

export default Results;
