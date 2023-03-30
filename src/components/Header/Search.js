import { Box, InputBase, styled } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled(Box)`
  border-radius: 20px;
  width: 25%;
  height: 45px;
  background: var(--white-color);
  margin-left: 10px;
  display: flex;
  box-shadow: var(--search-shadow);
  margin-left: 25px;
`;
const SearchIconWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 5px; */ padding-left: 10px;
`;
const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;

export default function Serach() {
  return (
    <SearchContainer>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <InputSearchBase placeholder="Search anything" />
    </SearchContainer>
  );
}
