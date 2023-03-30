import { Avatar, AvatarGroup, Box, styled, Typography } from "@mui/material";
import React from "react";
import { LinearProgress } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { imageDataURL } from "../../../images/imageData";
const BoxContainer = styled(Box)`
  width: 27%;
  background: var(--white-color);
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
`;
const TextWrapper = styled(Box)`
  width: fit-content;
  padding: 2px 10px;
  border-radius: 25px;
  margin-top: 20px;
`;
const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#00d4a3",
    },
  },
});
export default function ProjectTeamView() {
  return (
    <BoxContainer>
      <ThemeProvider theme={theme}>
        <Typography >Projects and teams</Typography>
        <TextWrapper sx={{ background: "var(--primary-color)" }}>
          <Typography sx={{ color: "#fff" }} fontSize="13px">Development</Typography>
        </TextWrapper>
        <Typography mt="10px">New UI design for project jumbo.</Typography>
        <Typography mt="10px" sx={{ color: "#b0b0b0" }}>70% completed</Typography>
        <LinearProgress variant="determinate" sx={{height:"6px",marginTop:"8px",background:"#b0b0b029"}} color="secondary" value={70} />
        <AvatarGroup max={5} sx={{display:"flex",justifyContent:"start",paddingY:"15px"}}>
          {
            imageDataURL.map((item,index)=>(
              <Avatar alt={item.name} src={item.url} key={index} />
            ))
          }

        </AvatarGroup>
        <TextWrapper  sx={{ background: "#00d4a3" }}>
          <Typography sx={{ color: "#fff" }} fontSize="13px">Designing</Typography>
        </TextWrapper>
        <Typography mt="10px">Promo graphic design for wieldy</Typography>
        <Typography mt="10px" sx={{ color: "#b0b0b0" }}>60% completed</Typography>
        <LinearProgress variant="determinate" sx={{height:"6px",marginTop:"8px",background:"#b0b0b029"}} color="secondary"  value={60} />
        <AvatarGroup max={5} sx={{display:"flex",justifyContent:"start",paddingY:"15px",fontSize:"12px"}}>
          {
            imageDataURL.reverse().map((item,index)=>(
              <Avatar alt={item.name} src={item.url} key={index} />
            ))
          }
        </AvatarGroup>
      </ThemeProvider>
    </BoxContainer>
  );
}
