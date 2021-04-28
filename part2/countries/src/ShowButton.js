import React, { useState } from 'react';
import CountryDetail from './CountryDetail';

const ShowButton = ({ country }) => {
  const [state, setState] = useState(false)

  if (state) {
    return (
      <>
        <button onClick={(() => setState(!state))}>
          {state ? 'hide' : 'show'}
        </button>
        <CountryDetail country={country} />
      </>
    )
  }

  return (
    <button onClick={(() => setState(!state))}>
      {state ? 'hide' : 'show'}
    </button>
  )
}

export default ShowButton;