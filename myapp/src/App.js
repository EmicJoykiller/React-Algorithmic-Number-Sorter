import React, { useState } from "react";
import "./App.css";

function App() {
  const [decimal, setDecimal] = useState("");
  const [binary, setBinary] = useState("");
  const [error, setError] = useState("");

  const handleConvert = () => {
    if (!decimal || isNaN(decimal) || parseInt(decimal) < 0) {
      setError("Please enter a valid positive integer.");
      setBinary("");
      return;
    }
    setError("");
    setBinary(parseInt(decimal).toString(2));
  };

  const handleClear = () => {
    setDecimal("");
    setBinary("");
    setError("");
  };

  return (
    <main>
      <h1>Decimal to Binary Converter</h1>
      <div className="converter-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleConvert();
          }}
        >
          <fieldset>
            <input
              type="text"
              placeholder="Enter Decimal Number"
              value={decimal}
              onChange={(e) => setDecimal(e.target.value)}
            />
            <button type="submit">Convert</button>
          </fieldset>
        </form>
        {error && <div className="alert">{error}</div>}
        {binary && (
          <div className="output-container">
            <h2>Binary Output</h2>
            <p className="output-value">{binary}</p>
          </div>
        )}
        {binary && (
          <button className="clear-btn" onClick={handleClear}>
            Clear
          </button>
        )}
      </div>
    </main>
  );
}

export default App;
