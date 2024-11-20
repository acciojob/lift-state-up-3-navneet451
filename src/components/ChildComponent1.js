import React from 'react';

const ChildComponent1 = ({ onOptionSelect }) => {
  return (
    <div>
      <button onClick={() => onOptionSelect('Option 1')}>Select Option 1</button>
    </div>
  );
};

export default ChildComponent1;
