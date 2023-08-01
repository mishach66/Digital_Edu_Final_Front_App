import React from "react";
import { Box, styled, AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Link } from "../atoms";
import { UserIcon } from "../header";

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
  return (
    <Box>
      <StyledAppBar>
        <StyledToolBar>
          <Link to="/">Home</Link>
          <Box sx={{ display: "flex" }}>
            <div></div>
            <UserIcon />
          </Box>
        </StyledToolBar>
      </StyledAppBar>
    </Box>
  );
};
