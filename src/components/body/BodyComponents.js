import { Box, styled } from "@mui/material";
import React from "react";
import BottomSection from "./bottomSection/BottomSection";
import TopSection from "./TopSection/TopSection";

const BoxContainer = styled(Box)`
  margin-top: 20px;
  padding-left: 30px;
  padding-right: 30px; 
  position: relative;
`;

export default function BodyComponents() {
  return (
    <BoxContainer>
      <TopSection />
      <BottomSection />
    </BoxContainer>
  );
}
