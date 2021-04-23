import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Content from './Content.js';
import Total from './Total.js';

function App() {
  const course = {
    name: 'Half stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header>{course.name}</Header>
      <Content part={course.parts[0]} />
      <Content part={course.parts[1]} />
      <Content part={course.parts[2]} />
      <Total parts={course.parts} />
    </div>
  );
}

export default App;
