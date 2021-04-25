import './App.css';
import Filter from './Filter.js';
import PersonForm from './PersonForm.js';
import Numbers from './Numbers.js';
import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    let repeat = false;

    const nameObject = {
      name: newName,
      number: newNumber
    }

    let i = 0;
    for (i; i < persons.length; i++) {
      if (persons[i].name.toLowerCase() === newName.toLowerCase()) {       
        alert(`${newName} already exists in the phonebook`)
        repeat = true
      }
    }

    if (!repeat) {
      setPersons(persons.concat(nameObject))

    setNewName('')
    setNewNumber('')
    }
  }

  const handleInputName = (event) => {
    console.log(newName)
    setNewName(event.target.value)
  }

  const handleInputNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchName = (event) => {
    setSearchName(event.target.value)
  }

  let re = new RegExp(`${searchName}`, 'i')
  const personsToShow = searchName.length > 0
    ? persons.filter(person => person.name.match(re))
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchName={searchName} handleSearchName={handleSearchName} />
      <h2>Add new</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleInputName={handleInputName}
        handleInputNumber={handleInputNumber}
      />
      <h2>Numbers</h2>
      <Numbers persons={personsToShow} />
    </div>
  )
}

export default App