import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [values, setValues] = useState([8, 2, 4, 1, 3]);
  const [sortedValues, setSortedValues] = useState([0, 0, 0, 0, 0]);

  const handleChange = (index, value) => {
    const newValues = [...values];
    newValues[index] = parseInt(value, 10);
    setValues(newValues);
  };

  const sortValues = (event) => {
    event.preventDefault();
    const sorted = [...values].sort((a, b) => a - b);
    setSortedValues(sorted);
  };

  return (
    <main>
      <h1>Number Sorter</h1>
      <form onSubmit={sortValues} className="form">
        <h2>Input:</h2>
        <fieldset>
          <span className="bracket">[</span>
          {values.map((value, index) => (
            <div key={index}>
              <select
                value={value}
                className="values-dropdown"
                onChange={(e) => handleChange(index, e.target.value)}
                aria-label={`number ${index + 1}`}
              >
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
              {index < values.length - 1 && <span className="comma">,</span>}
            </div>
          ))}
          <span className="bracket">]</span>
        </fieldset>
        <button type="submit">Sort</button>
      </form>
      <div className="output-container">
        <h2>Output:</h2>
        <div className="output-array">
          <span className="bracket">[</span>
          {sortedValues.map((value, index) => (
            <div key={index}>
              <span className="output-value">{value}</span>
              {index < sortedValues.length - 1 && <span className="comma">,</span>}
            </div>
          ))}
          <span className="bracket">]</span>
        </div>
      </div>
    </main>
  );
};

export default App;
