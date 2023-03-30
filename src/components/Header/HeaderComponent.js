import { Box, styled } from "@mui/material";
import React from "react";
import IconsContainer from "./IconsContainer";
import Search from "./Search";

const StyleHeader = styled(Box)`
  background: var(--body-color);
  height: 80px;
  box-shadow: var(--box-shadow);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export default function HeaderComponent() {
  return (
    <StyleHeader>
      <Search />
      <IconsContainer />
    </StyleHeader>
  );
}
