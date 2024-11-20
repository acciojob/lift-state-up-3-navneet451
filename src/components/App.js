import React, { useState } from 'react';
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';

const App = () => {
  // State to manage the selected option
  const [selectedOption, setSelectedOption] = useState('');

  // Function to update the selected option
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="parent">
      <h1>Lifting State Up Demo</h1>
      <p>Selected Option: {selectedOption || "None"}</p>
      {/* Rendering child components with props */}
      <ChildComponent1 onOptionSelect={handleOptionChange} />
      <ChildComponent2 onOptionSelect={handleOptionChange} />
    </div>
  );
};

export default App;

