import React from 'react';

const Course = ({ course }) => {
  const parts = course.parts;
  const exerciseSum = (accumulator, currentValue) => {
    console.log('what is happening', accumulator, currentValue)
    return accumulator + currentValue.exercises
  };


  return (
    <>
      <h2>{course.name}</h2>
      {course.parts.map(part =>
        <p key={part.id}>{part.name}: {part.exercises}</p>
      )}
      <p><strong>Total exercises: {parts.reduce(exerciseSum, 0)}</strong></p>
    </>
  )
}

export default Course;