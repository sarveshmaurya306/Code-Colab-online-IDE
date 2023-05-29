import React from 'react';
import { Link } from 'react-router-dom';
const pageContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

const headingStyle = {
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '20px',
  color:'white',
};

const gifStyle = {
  maxWidth: '50%',
  marginBottom: '20px',
};

const buttonContainerStyle = {
  display: 'flex',
  gap: '20px',
};

const buttonStyle = {
  padding: '12px 24px',
  fontSize: '16px',
  border: 'none',
  borderRadius: '4px',
  color: 'white',
  cursor: 'pointer',
};

const codingButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#007bff',
};

const sandboxButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#28a745',
};

const LandingPage = () => {
  return (
    <div style={pageContainerStyle}>
      <h1 style={headingStyle}>CodeBuddy</h1>
      <img
        src="https://cdn.dribbble.com/users/1708816/screenshots/15637256/media/f9826f0af8a49462f048262a8502035b.gif"
        alt="codeBuddy GIF"
        style={gifStyle}
      />
      <div style={buttonContainerStyle}>
        <Link to='/login'><button style={codingButtonStyle}>Go to Coding Area</button></Link>
        <Link to='/codepen'><button style={sandboxButtonStyle}>Go to Development Sandbox</button></Link> 
      </div>
    </div>
  );
};

export default LandingPage;
