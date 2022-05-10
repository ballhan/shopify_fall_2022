import "./App.css";
import ResponseLists from "./components/ResponseLists/ResponseLists";
import PromptSubmitForm from "./components/PromptSubmitForm/PromptSubmitForm";
import { useState } from "react";

function App() {
  const [completionData, setCompletionData] = useState([]);

  return (
    <div className="App">
      <h1 className="header">Fun with AI</h1>
      <PromptSubmitForm
        completionData={completionData}
        setCompletionData={setCompletionData}
      />
      <ResponseLists completionData={completionData} />
    </div>
  );
}

export default App;
