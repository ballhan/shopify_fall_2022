import React from "react";
import "./ResponseLists.css";
const ResponseLists = ({ completionData }) => {
  return (
    <div>
      {completionData.length !== 0 ? (
        <h2 className="header">Responses</h2>
      ) : (
        <></>
      )}

      {completionData.map(({ id, inputPrompt, completionResult, engine }) => (
        <div className="list" key={id}>
          <div className="content-container">
            <p>Prompt:</p>
            <p>{inputPrompt}</p>
          </div>
          <div className="content-container">
            <p>Response:</p>
            <p>{completionResult}</p>
          </div>
          <div className="content-container">
            <p>Engine:</p>
            <p>{engine}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResponseLists;
