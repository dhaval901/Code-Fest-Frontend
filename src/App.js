import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import Team from "./scenes/team/team";
import Contacts from "./scenes/contacts/contacts";
import Refer from "./scenes/refer/refer";
import Talk from "./scenes/talk/Talk";
import React from 'react';
import ReactDOM from 'react-dom';

// Use Ctrl + K +C

// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        <Sidebar />
          <main className="content">
            <Box> <Topbar/></Box>
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/refer" element={<Refer/>} />
              <Route path="/team" element={<Team/>} />
              <Route path="/talk" element={<Talk/>} />
              <Route path="/contacts" element={<Contacts/>} />
              <Route path="/invoices" element="Invoices" />
              <Route path="/bar" element="Bar" />
              <Route path="/form" element="Form" />
              <Route path="/line" element="Line" />
              <Route path="/pie" element="Pie" />
              <Route path="/faq" element="FAQ" />
              <Route path="/geography" element="Geography" />
              <Route path="/form" element="Form" />
              <Route path="/calendar" element="Calendar" />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
