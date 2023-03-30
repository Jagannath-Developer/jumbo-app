import {
  Avatar,
  Box,
  Card,
  CardMedia,
  styled,
} from "@mui/material";
import React from "react";
import viewImage from "../.././../images/view_image.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LinkIcon from "@mui/icons-material/Link";
const CardContainer = styled(Card)`
  width: 40%;
  height: fit-content;
  background: var(--white-color);
  position: relative;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
`;
const ImageView = styled(CardMedia)`
  height: 300px;
`;
const BottomBox = styled(Box)`
  height: 50px;
  background: var(--white-color);
  color: var(--primary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
`;
const ProfileImage = styled(Avatar)`
  position: static;
  margin-top:-8%;
  width: 65px;
  height: 65px;


`;
export default function ProfileView() {
  const viewURL = viewImage;

  const profileURL =
    "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=";

  return (
    <CardContainer>
      <ImageView component="img" image={viewURL} alt="Paella" />
      <BottomBox>
        <ProfileImage src={profileURL} />
        <FavoriteBorderIcon />
        <ChatBubbleOutlineIcon />
        <LinkIcon />
      </BottomBox>
    </CardContainer>
  );
}
