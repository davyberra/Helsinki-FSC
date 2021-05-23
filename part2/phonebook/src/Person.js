import React from 'react';

const Person = ({ person, removeName }) => {
  return ( 
    <p key={person.name}>
      {person.name}: {person.number}
      <button onClick={(() => removeName(person.id))}>delete</button>
    </p>
  )
}

export default Person;