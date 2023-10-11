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
      {/* <Button variant="text" startIcon={<Settings />}>
        Text
      </Button>
      <Button variant="contained" color="otherColor">
        Contained
      </Button>
      <Button variant="outlined">Outlined</Button> */}
      <Typography variant="h4" component="p">
        This is H4 type with P component
      </Typography>
      <Chatbot/>
      {/* <BlueButton>Another Button</BlueButton>
      <BlueButton>My Button</BlueButton> */}
    </div>
  );
}

export default App;
