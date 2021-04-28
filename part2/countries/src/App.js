import './App.css';
import React, { useState, useEffect } from 'react';
import SearchCountries from './SearchCountries.js';
import Countries from './Countries.js';
import axios from 'axios';

const App = () => {
  const [searchName, setSearchName] = useState('')
  const [countries, setCountries] = useState([])

  let countriesToShow = countries

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }

  useEffect(hook, [])

  let re = new RegExp(`${searchName}`, 'i')
  countriesToShow = searchName.length > 0
    ? countries.filter(country => country.name.match(re))
    : countries

  const handleSearchName = (event) => {
    setSearchName(event.target.value)

  }

  return (
    <>
      <h1>Search Countries</h1>
      <SearchCountries searchName={searchName} handleSearchName={handleSearchName} />
      <h2>Countries</h2>
      <Countries countriesToShow={countriesToShow} />
      
    </>
  )
}

export default App;
