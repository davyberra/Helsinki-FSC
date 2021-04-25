import React from 'react';

const Note = ({ note, important }) => {
  return (
    <li className={important.toString()} >{note.content}</li>
  )
}

export default Note;