import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  createTheme,
  ThemeProvider,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import VolumeUpIconOutlined from "@mui/icons-material/VolumeUpOutlined";
import SyncIcon from "@mui/icons-material/Sync";

const CardContainer = styled(Card)`
  width: 25%;
  height: fit-content;
  padding: 10px;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
`;
const SoundButton = styled(Button)`
  width: 36px;
  height: 36px;
  padding: 0px;
`;
const RefreshButton = styled(Box)`
  position: absolute;
  right: 10px;
`;
const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#8e24aa",
    },
  },
});
export default function MusicCard() {
  return (
    <CardContainer>
      <CardContent sx={{ position: "relative" }}>
        <RefreshButton>
          <SyncIcon />
        </RefreshButton>
        <Typography
          sx={{ fontSize: 20, marginBottom: "15px" }}
          variant="h5"
          component="div"
        >
          Word of the day
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{ fontSize: 20, marginBottom: 1 }}
        >
          be-new-o-lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The definition of benevolent is enjoy helping others or someone whose
          characteristic is being friendly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <ThemeProvider theme={theme}>
          <SoundButton variant="contained" color="secondary">
            <VolumeUpIconOutlined sx={{ color: "var(--white-color)" }} />
          </SoundButton>
        </ThemeProvider>
      </CardActions>
    </CardContainer>
  );
}
