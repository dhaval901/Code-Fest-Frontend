import { Settings } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import styled from "styled-components";
import Chatbot from "./Chatbot";

function App() {
  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "#345",
    margin: 5,
    "&:hover": { backgroundColor: "lightblue" },
    "&:disbaled": { backgroundColor: "gray", color: "white" },
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reacting with Youtube
        </a>
      </header>
    </div>
  );
}

export default App;
