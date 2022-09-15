import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className='App'>
      <Title />
      
      </div>
    </>
  );
}

export default App;
