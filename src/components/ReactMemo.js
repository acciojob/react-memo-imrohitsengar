import React, { useState } from "react";

const ReactMemo = React.memo(() => {
  const [inputValue, setInputValue] = useState("");
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript", "React"]);
  const [error, setError] = useState("");

  // Disables the submit button when the input is 5 or fewer characters
  const isSubmitDisabled = inputValue.length <= 5;

  // Input validation to ensure input is more than 5 characters
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.length > 0 && value.length <= 5) {
      setError("Input must be more than 5 characters");
    } else {
      setError("");
    }
  };

  // Submission logic checking length (> 5 characters) before adding
  const handleSubmit = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    // Validation: ensure input length is strictly greater than 5 characters
    if (inputValue.length <= 5) {
      setError("Input must be more than 5 characters");
      return;
    }

    if (inputValue.length > 5) {
      setSkills((prevSkills) => [...prevSkills, inputValue]);
      setInputValue("");
      setError("");
    }
  };

  return (
    <div>
      <h2>React.memo</h2>
      <input
        id="skill-input"
        data-testid="memo-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter task (> 5 characters)"
      />
      <button
        id="submit-btn"
        data-testid="submit-btn"
        type="submit"
        onClick={handleSubmit}
        disabled={isSubmitDisabled}
      >
        Submit
      </button>
      {error && <p id="error-msg" style={{ color: "red" }}>{error}</p>}
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
});

export default ReactMemo;
