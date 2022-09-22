import React from 'react';

export default function Select(option, changeHandler) {
  return (
    <select onChange={(e) => changeHandler(e.target.value)}>
      <option value="all">all pokemon</option>
      {option.map((choice) => (
        <option key={choice} value={choice}>{choice}</option>
      ))}
    </select>
  );
}
