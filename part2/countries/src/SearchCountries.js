import React from 'react';

const SearchCountries = ({ handleSearchName, searchName }) => {
  return (
    <div>
      <input onChange={handleSearchName} value={searchName} />
    </div>
  )
}

export default SearchCountries;