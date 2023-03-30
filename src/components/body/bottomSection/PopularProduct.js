import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";
import { ItemsDataURl } from "../../../images/itemsData";
import SingleProduct from "./SingleProduct";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const BoxContainer = styled(Box)`
  width: 65%;
  height: fit-content;
  background: white;
  border-radius: 10px;
  padding: 20px 30px;
  box-shadow: var(--box-shadow);
`;
const TitleText = styled(Typography)``;
const SubTitleText = styled(Typography)`
  color: #b0b0b0;
  font-size: small;
`;
const ItemWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;
export default function PopularProduct() {
  return (
    <BoxContainer>
      <Box sx={{display:"flex",justifyContent:"space-between"}}>
        <Box>
          <TitleText container="h5">Popular products</TitleText>
          <SubTitleText>
            Checkout what other people are liking the most
          </SubTitleText>
        </Box>
        <MoreHorizIcon />
      </Box>
      <ItemWrapper>
        {ItemsDataURl.map((item, index) => (
          <SingleProduct data={item} key={index} />
        ))}
      </ItemWrapper>
      <Typography
        sx={{ color: "var(--primary-color)", fontSize: "14px" }}
        mt="20px"
      >
        VIEW ALL
      </Typography>
    </BoxContainer>
  );
}
