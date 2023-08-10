import React, { useState } from "react";
import { Box, styled, AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "../atoms";
import { ProductCategories, UserIcon, SearchBar } from "../header";
import { CartDrawer } from "./CartDrawer";
import { BiCart } from "react-icons/bi";

const StyledAppBar = styled(AppBar)(() => ({
  // backgroundColor: "#131921",
  backgroundColor: "#576f8f",
  padding: "0 37px 0 30px",
}));

const StyledToolBar = styled(Toolbar)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  paddingTop: 8,
  paddingBottom: 8,
}));

export const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <Box>
      <StyledAppBar>
        <StyledToolBar>
          <Link to="/">Home</Link>
          <SearchBar />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: 100,
            }}
          >
            <Button onClick={() => setIsCartOpen(true)}>
              <BiCart size={35} color="red" />
            </Button>
            <UserIcon />
          </Box>
        </StyledToolBar>
        <ProductCategories />
      </StyledAppBar>
      <CartDrawer isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </Box>
  );
};
