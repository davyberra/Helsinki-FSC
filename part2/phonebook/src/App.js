import './App.css';
import Filter from './Filter.js';
import PersonForm from './PersonForm.js';
import Numbers from './Numbers.js';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import numbersService from './services/numbersService'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')

  const hook = () => {
    axios
      .get('/api/persons')
      .then(response => {
        setPersons(response.data)
      })
  }

  useEffect(hook, [])
  

  const addName = (event) => {
    event.preventDefault()
    let repeat = false;
    var curId;

    const nameObject = {
      name: newName,
      number: newNumber
    }

    let i = 0;
    for (i; i < persons.length; i++) {
      if (persons[i].name.toLowerCase() === newName.toLowerCase()) {
        repeat = true
        curId = persons[i].id              
      }
    }

    if (repeat) {
      if (window.confirm(`${newName} already exists in the phone book. Do you wish to update their phone number with the new one provided?`)) {
        numbersService
          .update(nameObject, curId)
          .then(returnedName => {
            setPersons(persons.map(person => person.id !== curId ? person : returnedName))
          })
        repeat = true
      }
    }

    if (!repeat) {
      numbersService
        .create(nameObject)
        .then(returnedName => {

          setPersons(persons.concat(returnedName))        
        })
    }

    setNewName('')
    setNewNumber('')
  }

  const removeName = id => {
    if (window.confirm("Are you sure you wish to delete this entry?")) {
      numbersService
        .deleteNumber(id)
        .then(returnedNumbers => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  const handleInputName = (event) => {
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
      <Numbers persons={personsToShow} removeName={removeName} />
    </div>
  )
}

export default App