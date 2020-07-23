import React from 'react';
import {notes} from './helpers';
import Octave from './Octave';

function App() {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.value);
  }

  return (
    <div><Octave notes={notes} clickHandler={handleClick} /></div>
  );
}

export default App;
