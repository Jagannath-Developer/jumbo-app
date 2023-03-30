import { Avatar, Box, styled } from '@mui/material'
import React from 'react'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationImportantIconOutlined from '@mui/icons-material/NotificationImportantOutlined';


const IconContainer=styled(Box)`
    display: flex;
    margin-right: 25px;
`
const IconWrapper = styled(Box)`
background: var(--white-color);
width: 45px;
height: 45px;
border-radius: 100%;
display: flex;
justify-content:center;
align-items: center;
box-shadow: var(--image-shadow);
margin-right: 12px;
`
export default function IconsContainer() {
    const profileURL="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=";
  return (
    <IconContainer>
        <IconWrapper>
             <ChatBubbleOutlineIcon sx={{color:"var(--primary-color)"}}/>
        </IconWrapper>
        <IconWrapper>
             <NotificationImportantIconOutlined sx={{color:"var(--primary-color)"}}/>
        </IconWrapper>
        <IconWrapper>
            <Avatar src={profileURL} alt="profile" sx={{width:"100%",height:"100%"}}/>
        </IconWrapper>
    </IconContainer>
  )
}
