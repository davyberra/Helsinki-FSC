import axios from 'axios';
import React, { useState, useEffect } from 'react';

const CountryDetail = ({ country }) => {
  const [weather, setWeather] = useState([])
  const api_key = process.env.REACT_APP_API_KEY
  const hook = () => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${api_key}&query`)
      .then(response =>
        setWeather(response.data))
  }

  useEffect(hook, [])

  return (
    <>
      <h2>{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h3>Languages</h3>
      <ul>
        {country.languages.map(language =>
          <li key={language.name} >{language.name}</li>)
        }
      </ul>
    /*<img src={country.flag} alt='flag' />*/
      <div>
        {weather}
    </>
  )
}

export default CountryDetail;