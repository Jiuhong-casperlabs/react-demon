import React, { useState } from "react";
import { fetchDetail } from "./api";

function App() {
  const getcontent = async () => {
    console.log("there");
    const result = await fetchDetail();
    setContent(JSON.stringify(result));
  };

  const [content, setContent] = useState("");
  return (
    <div className="App">
      <header className="App-header">hello</header>
      <button onClick={getcontent}>get deploy</button>

      <p>{content}</p>
    </div>
  );
}

export default App;
