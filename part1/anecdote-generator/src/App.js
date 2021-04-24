import './App.css';
import React, { useState } from 'react';

function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(6).fill(0))

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  const increaseVotes = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <p><strong>{votes[selected]} votes</strong></p>
      <button onClick={increaseVotes}>Vote</button>
      <button onClick={() => setSelected(getRandomInt(anecdotes.length))}>Next Anecdote</button>
      <h2>Highest voted anecdote:</h2>
      <p>{anecdotes[]}</p>
    </div>
  )
}

export default App;
