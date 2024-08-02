import React, { useState } from 'react';

const TextInput = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-label="text-input"
      />
      <p>Enter text: {value}</p>
    </div>
  );
};

export default TextInput;
