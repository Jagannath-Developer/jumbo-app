import React, { useState } from "react";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import ShoppingCartIconOutlined from "@mui/icons-material/ShoppingCartOutlined";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ChatIconOutlined from "@mui/icons-material/ChatOutlined";
import ContactsIconOutlined from "@mui/icons-material/ContactsOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WidgetsIconOutlined from "@mui/icons-material/WidgetsOutlined";
import EqualizerIconOutlined from "@mui/icons-material/EqualizerOutlined";
import WebIcon from "@mui/icons-material/Web";
import EditIcon from "@mui/icons-material/Edit";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import PetsIcon from "@mui/icons-material/Pets";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import "./Navbar.css";
import {
  Box,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";

const home = [
  { name: "Music", icon: <GraphicEqIcon /> },
  { name: "Crypto", icon: <CurrencyExchangeIcon /> },
  { name: "Listing", icon: <ListAltIcon /> },
  { name: "Crm", icon: <SupportAgentIcon /> },
  { name: "Internet", icon: <PieChartOutlineIcon /> },
  { name: "eCommerce", icon: <ShoppingCartIconOutlined /> },
  { name: "News", icon: <NewspaperIcon /> },
];
const apps = [
  { name: "Chat", icon: <ChatIconOutlined /> },
  { name: "Contacts", icon: <ContactsIconOutlined /> },
  { name: "Mail", icon: <MailOutlineIcon /> },
];
const cards = [
  { name: "Widgets", icon: <WidgetsIconOutlined /> },
  { name: "Metrics", icon: <EqualizerIconOutlined /> },
];
const components = [{ name: "Material UI", icon: <WebIcon /> }];
const extensions = [
  { name: "Editors", icon: <EditIcon /> },
  { name: "Drag n Drop", icon: <DragIndicatorIcon /> },
];

const HeadingText = styled(Typography)`
  margin-left: 20px;
  color: #b0b0b0;
  font-size: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const getList = (data) => (
    <div style={{ width: 250 }} onClick={() => setOpen(false)}>
      {data.map((item, index) => (
        <ListItem
          className="list_item"
          sx={{ color: "var(--primary-color)" }}
          key={index}
        >
          <ListItemIcon sx={{ color: "var(--primary-color)" }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </div>
  );
  return (
    <Box className="navbar" sx={{ display: "flex", width: "250px" }}>
      {/* <Button onClick={() => setOpen(true)}>Click me</Button> */}
      <Drawer
        variant="permanent"
        open={open}
        anchor={"left"}
        onClose={() => setOpen(false)}
        className="nav_drawer"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "var(--primary-color)",
            padding: "10px 20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PetsIcon fontSize="large" />
            <Typography variant="h6" sx={{ marginLeft: "10px" }}>
              jumbo
            </Typography>
          </Box>
          <MenuOpenIcon />
        </Box>
        <HeadingText>HOME</HeadingText>
        {getList(home)}
        {/* <Divider /> */}
        <HeadingText>APPS</HeadingText>
        {getList(apps)}
        <HeadingText>CARDS</HeadingText>
        {getList(cards)}
        <HeadingText>COMPONENTS</HeadingText>
        {getList(components)}
        <HeadingText>EXTENSIONS</HeadingText>
        {getList(extensions)}
      </Drawer>
    </Box>
  );
}
