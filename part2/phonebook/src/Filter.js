import React from 'react';

const Filter = ({ searchName, handleSearchName }) => {
  return (
    <div>
      Search: <input value={searchName} onChange={handleSearchName} />
    </div>)
}

export default Filter;