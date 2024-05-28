import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent';
import './App.css';

function App() {
  const [selected, setSelected] = useState(false);
  const [pages, setPages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSelectClick = () => {
    setSelected(true);
  };

  const handleDeselectClick = () => {
    setSelected(false);
  };

  const handleAddPage = () => {
    if (inputValue.trim()) {
      setPages([...pages, inputValue]);
      setInputValue("");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      <div className="button-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter page text"
          className="text-input"
        />
        <button className="btn add-btn" onClick={handleAddPage}>Add Page</button>
        <button className="btn select-btn" onClick={handleSelectClick}>Select</button>
        <button className="btn deselect-btn" onClick={handleDeselectClick}>Deselect</button>
      </div>
      <div className='document'>
        {pages.map((text, index) => {
          const pageElement = <div className='page' key={index}>{text}</div>;
          return selected ? (
            ReactDOM.createPortal(
              <MyComponent key={index}>{pageElement}</MyComponent>,
              document.querySelector('.document')
            )
          ) : (
            pageElement
          );
        })}
      </div>
    </div>
  );
}

export default App;


// import React, { useState } from 'react';
// import MyComponent from './MyComponent';
// import './App.css';

// function App() {
//   const [selected, setSelected] = useState(false);
//   const [pages, setPages] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   const handleSelectClick = () => {
//     setSelected(true);
//   };

//   const handleDeselectClick = () => {
//     setSelected(false);
//   };

//   const handleAddPage = () => {
//     if (inputValue.trim()) {
//       setPages([...pages, inputValue]);
//       setInputValue("");
//     }
//   };

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <div className="App">
//       <div className="button-container">
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder="Enter page text"
//           className="text-input"
//         />
//         <button className="btn add-btn" onClick={handleAddPage}>Add Page</button>
//         <button className="btn select-btn" onClick={handleSelectClick}>Select</button>
//         <button className="btn deselect-btn" onClick={handleDeselectClick}>Deselect</button>
//       </div>
//       <div className='document'>
//         {pages.map((text, index) => (
//           selected ? (
//             <MyComponent key={index}>
//               <div className='page'>{text}</div>
//             </MyComponent>
//           ) : (
//             <div className='page' key={index}>{text}</div>
//           )
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
