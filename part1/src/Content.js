import React from 'react';

const Content = (props) => {
  const part = props.part;
  return (
    <>
      <p>{part.name}: {part.exercises}</p>
    </>
    )
}

export default Content;