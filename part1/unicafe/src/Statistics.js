import React from 'react';
import Statistic from './Statistic.js';

const Statistics = ({ good, neutral, bad }) => {
  let all = good + neutral + bad;
  if (all === 0) {
    return (
      <>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <Statistic text="Good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="Bad" value={bad} />
          <Statistic text="All" value={all} />
          <Statistic text="Average" value={((good * 1) + (neutral * 0) + (bad * -1)) / all} />
          <Statistic text="Positive" value={(good / all) * 100} />
        </tbody>
      </table>
    </>
  )
}

export default Statistics;