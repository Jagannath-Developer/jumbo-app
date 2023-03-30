import {
  Box,
  Card,
  CardActions,
  CardContent,
  Divider,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIconOutlined from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const DescriptionText = styled(Typography)`
  font-size: 14px;
  margin-left: 10px;
`;
const DescriptionBox = styled(Box)`
  display: flex;
  padding-bottom: 15px;
  padding-top: 15px;
`;
const SocialIconBg = styled(Box)`
  width: 45px;
  height: 45px;
  background: var(--primary-color);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--box-shadow);
`;
const CardContainer = styled(Card)`
  width: 30%;
  padding: 10px;
  height: fit-content;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
`;
export default function SocialCard() {
  return (
    <CardContainer>
      <CardContent>
        <Typography
          sx={{ fontSize: 20, marginBottom: "15px" }}
          variant="h5"
          component="div"
        >
          Our office
        </Typography>
        <DescriptionBox>
          <LocationOnIcon />
          <DescriptionText>
            488, blingum, JP Street, NJ,California
          </DescriptionText>
        </DescriptionBox>
        <Divider/>
        <DescriptionBox>
          <CallIcon />
          <DescriptionText>+01-992856-8535</DescriptionText>
        </DescriptionBox>
        <Divider/>
        <DescriptionBox>
          <EmailIconOutlined />
          <DescriptionText>bob.builder@jobportal.com</DescriptionText>
        </DescriptionBox>
      </CardContent>
      <CardActions sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
        <SocialIconBg
          sx={{ background: "#2979ff", color: "var(--white-color)" }}
        >
          <TwitterIcon fontSize="medium" />
        </SocialIconBg>
        <SocialIconBg
          sx={{ background: "#4a148c", color: "var(--white-color)" }}
        >
          <FacebookIcon fontSize="medium" />
        </SocialIconBg>
        <SocialIconBg
          sx={{ background: "#ff2b75", color: "var(--white-color)" }}
        >
          <InstagramIcon fontSize="medium" />
        </SocialIconBg>
        <SocialIconBg
          sx={{ background: "#2979ff", color: "var(--white-color)" }}
        >
          <LinkedInIcon fontSize="medium" />
        </SocialIconBg>
      </CardActions>
    </CardContainer>
  );
}
