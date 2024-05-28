import React, { useState } from 'react';
import MyComponent from './MyComponent';
import './App.css';

function App() {
  const [selected, setSelected] = useState(false);

  const handleButtonClick = () => {
    setSelected(true);
  };

  return (
    <div className="App">
      <button onClick={handleButtonClick}>Select</button>
      <div className='document'>
        {selected ? (
          <>
            <MyComponent>
              <div className='page'>Hello</div>
            </MyComponent>
            <MyComponent>
              <div className='page'>Hello</div>
            </MyComponent>
            <MyComponent>
              <div className='page'>Hello</div>
            </MyComponent>
          </>
        ) : (
          <>
            <div className='page'>Hey</div>
            <div className='page'>Hek</div>
            <div className='page'>Helo</div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
