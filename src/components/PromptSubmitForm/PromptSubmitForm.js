import React from "react";
import { useState } from "react";
import { fetchCompletionData } from "../../utilities/fetchCompletionData";
import "./PromptSubmitForm.css";

const engineTypes = [
  "text-curie-001",
  "text-davinci-002",
  "text-babbage-001",
  "text-ada-001",
];

const PromptSubmitForm = ({ completionData, setCompletionData }) => {
  const [prompt, setPrompt] = useState("");
  const [engine, setEngine] = useState("text-curie-001");

  const submitPrompt = (prompt) => {
    if (prompt !== "") {
      const data = {
        prompt: `${prompt}`,
        temperature: 0.5,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      };

      fetchCompletionData(data, engine).then((result) => {
        setCompletionData([
          {
            inputPrompt: prompt,
            completionResult: result.choices[0].text,
            engine: engine,
            id: result.id,
          },
          ...completionData,
        ]);
      });

      setPrompt("");
    }
  };

  return (
    <div>
      <div className="content-container">
        <p>Enter prompt</p>
        <textarea
          value={prompt}
          placeholder="Enter some text..."
          type="text"
          onChange={(e) => setPrompt(e.target.value)}
          className="input"
        ></textarea>
      </div>
      <div className="content-container">
        <div>
          <p>Select Engine</p>
        </div>
        <div className="engine-btn-container">
          {engineTypes.map((name) => (
            <button
              className={engine === name ? "active-engine-btn btn" : "btn"}
              key={name}
              onClick={() => setEngine(name)}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
      <button className="btn submit-btn" onClick={() => submitPrompt(prompt)}>
        Submit
      </button>
    </div>
  );
};

export default PromptSubmitForm;
