import React, { useState } from "react";

const ReactMemo = React.memo(() => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState(["HTML", "CSS", "JavaScript", "React"]);

  const handleSubmit = () => {
    if (inputValue.length > 5) {
      setItems((prevItems) => [...prevItems, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <h2>React.memo</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Skill</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
});

export default ReactMemo;
