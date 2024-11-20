import React from 'react';

const ChildComponent2 = ({ onOptionSelect }) => {
  return (
    <div>
      <button onClick={() => onOptionSelect('Option 2')}>Select Option 2</button>
    </div>
  );
};

export default ChildComponent2;
