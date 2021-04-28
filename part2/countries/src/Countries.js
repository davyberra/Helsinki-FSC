import React from 'react';
import CountryDetail from './CountryDetail.js';
import ShowButton from './ShowButton.js';

const Countries = ({ countriesToShow }) => {
  if (countriesToShow.length > 10) {
    return <p>Please narrow your search query.</p>
  }
  if (countriesToShow.length === 1) {
    let country = countriesToShow[0]
    return (
      <CountryDetail country={country} />
    )
  }
  else {
    console.log(countriesToShow.length)
    return (
      <>
        {countriesToShow.map(country =>
          <>
            <p key={country.name}>{country.name}</p>
            <ShowButton country={country} />
          </>
        )
          }
      </>
    )
  }
 
}

  export default Countries;