import React,{useState} from "react"

const customDictionary = {

  teh: "the",

  wrok: "work",

  fot: "for",

  exampl: "example"

};


function App() {

  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  function handleChange(e) {
    const input = e.target.value;
    setText(input);

    if (input.trim() === "") {
      setSuggestion("");
      return;
    }

    const words = input.split(/\s+/);

    for (let word of words) {
      const lower = word.toLowerCase();

      if (customDictionary[lower]) {
        setSuggestion(`${customDictionary[lower]}?`);
        return;
      }
    }
    setSuggestion("");
  }

  return (
    <div className="App">
      <h1>Spell Check and Auto-Correct</h1>
      <textarea
        onChange={handleChange}
        value={text}
        placeholder="Enter text"
        rows="6"
        style={{
          width: "600px",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
        ></textarea>
        {suggestion && (
        <p style={{ marginTop: "15px", fontSize: "18px", }}>
          Did you mean: {suggestion}?
        </p>
      )}
    </div>
  );
}

export default App;
