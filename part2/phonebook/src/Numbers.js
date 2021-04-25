import React from 'react';
import Person from './Person.js';

const Numbers = ({ persons }) => {
  return (
    <>
      {persons.map(person =>
        <Person key={person.name} person={person} />
      )}
    </>
  )
}

export default Numbers;