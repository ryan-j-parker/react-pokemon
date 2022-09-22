import React from 'react';

export default function Select({ options, changeHandler }) {
  return (
    <select onChange={(e) => changeHandler(e.target.value)}>
      <option value="all">all pokemon</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
