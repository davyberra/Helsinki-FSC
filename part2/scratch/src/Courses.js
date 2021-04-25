import React from 'react';
import Course from './Course.js';

const Courses = ({ courses }) => {
  return (
    <>
      <h1>Web Development Curriculum</h1>
      {courses.map(course =>
        <Course key={course.id} course={course} />
      )}
    </>
  )
}

export default Courses;