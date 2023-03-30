import { Box, CardMedia, styled, Typography } from "@mui/material";
import React from "react";

const BoxContainer = styled(Box)`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 80px;
`;
const ImageContainer = styled(Box)``;
const TextWrapper = styled(Box)`
  margin-left: 20px;
`;
const PriceTextWrapper = styled(Box)`
  display: flex;
  margin-top: 15px;
`;
const ImageView = styled(CardMedia)`
  width: 100px;
  height: 100px;
  border-radius: 8px;
`;
export default function SingleProduct({data}) {
  return (
    <BoxContainer>
      <ImageContainer>
        <ImageView component="img" image={data.url} alt="Paella" />
      </ImageContainer>
      <TextWrapper>
        <Typography sx={{ fontWeight: "bold" }}>
          {data.title}
        </Typography>
        <Typography sx={{ fontSize: "15px", color: "#757373" }} mt="8px">
          {data.desc}
        </Typography>
        <PriceTextWrapper>
          <Typography sx={{ textDecoration: "line-through", color: "#b0b0b0" }}>
            ${data.lastPrice}
          </Typography>
          <Typography mx={2}>${data.updatePrice}</Typography>
        </PriceTextWrapper>
      </TextWrapper>
    </BoxContainer>
  );
}
