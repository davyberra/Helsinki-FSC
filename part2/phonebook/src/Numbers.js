import React from 'react';
import Person from './Person.js';

const Numbers = ({ persons, removeName }) => {
  return (
    <>
      {persons.map(person =>
        <Person key={person.name} person={person} removeName={removeName} />
      )}
    </>
  )
}

export default Numbers;