import React from "react";
import { Grid, Card, Box, styled } from "@mui/material";
import { Link } from "../../atoms"
import {Text} from '../../atoms'

const StyledImage = styled("img")(() => ({
  // objectFit: "cover",
  objectFit: "contain",
  width: "100%",
  height: "270px",
}));

const StyledInfoContainer = styled(Box)(() => ({
  display: "flex",
  // flexDirection: "column",
  justifyContent: "space-between",
  padding: "20px 20px",
}));

export const ProductCard = ({ product }) => {
  const { _id, name, price, image, brand } = product;
  return (
    <Grid item xs={12} sm={12} md={4} lg={3}>
      <Card sx={{ borderRadius: 8 }}>
        <Link to="/" >
          <StyledImage src={image} alt={`${brand} - ${name}`} />
          <StyledInfoContainer>
            <Text>{name}</Text>
            <Text>${price}</Text>
          </StyledInfoContainer>
        </Link>
      </Card>
    </Grid>
  );
};
