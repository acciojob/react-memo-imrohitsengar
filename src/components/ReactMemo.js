import React, { useState, useEffect } from "react";

const ReactMemo = React.memo(() => {
  const [inputValue, setInputValue] = useState("");
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript", "React"]);
  const isSubmitDisabled = !inputValue || inputValue.trim().length <= 5;
  useEffect(() => {}, [inputValue]);
  const handleSubmit = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    if (inputValue && inputValue.trim().length > 5) {
      setSkills((prevSkills) => [...prevSkills, inputValue.trim()]);
      setInputValue("");
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
        onChange={(e) => setInputValue(e.target.value)}
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
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
});

export default ReactMemo;
