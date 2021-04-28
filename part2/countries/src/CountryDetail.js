import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { format } from 'util';

const CountryDetail = ({ country }) => {
  let [weather, setWeather] = useState([])
  const api_key = process.env.REACT_APP_API_KEY
  const params = {
    access_key: api_key,
    query: country.name
  }
  console.log(api_key)
  console.log('weather:', weather)

  const hook = () => {
    console.log('called hook')
    console.log('weather:', weather)
    axios
      .get('https://api.weatherstack.com/current', { params })
      .then(response =>
        setWeather(response.data))
      .catch(error =>
        console.log(error))
    console.log('https://api.weatherstack.com/current?access_key=' + api_key + '?query=' + country.name)
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
      </div>
    </>
  )
}

export default CountryDetail;