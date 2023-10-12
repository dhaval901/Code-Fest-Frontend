import React from "react";
import { Header } from "../../components/Header";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { alignBox } from "@nivo/core";

const Dashboard = () => {
  return (
    <div>
      <Box m="20px">
        <Box display="flex" justifyContent= "space-between" alignItems="center">
          <Header title='DASHBOARD' subtitles='Good Morning' />
        </Box>
      </Box>
      <div>
          <iframe className="chatbot" src="https://web.powerva.microsoft.com/environments/Default-9ff87383-ae93-4e4b-85fd-e21685c0431c/bots/crae2_listeningear/webchat?__version__=2"></iframe>
      </div>
    </div>
  );
};

export default Dashboard;
