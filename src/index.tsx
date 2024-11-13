import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function App() {
  return (
    <div>
      <h1>Welcome to my photography business!</h1>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);