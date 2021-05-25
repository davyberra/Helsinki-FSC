import React from 'react';

const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16,
    margin: 'auto'
  }

  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Davy Berra 2021</em>
    </div>
  )
}

export default Footer;