import { Box, styled } from "@mui/material";
import React from "react";
import BodyComponents from "./components/body/BodyComponents";
import HeaderComponent from "./components/Header/HeaderComponent";
import Navbar from "./components/navbar/Navbar";
const BoxContainer = styled(Box)`
  background: var(--body-color);
  display:flex;
  justify-content: flex-start;
`;
// const drawerWidth = 250;
export default function App() {
  return (
    <BoxContainer style={{display:"flex"}}>
      <Navbar />
      {/* <Box sx={{ flexGrow: 1  , width: { sm: `calc(100% - ${drawerWidth}px)` } }}> */}
      <Box sx={{flex:"1"}}>
        <HeaderComponent />
        <BodyComponents />
      </Box>
    </BoxContainer>
  );
}
