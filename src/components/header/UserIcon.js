import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks";
import { isUserAdmin } from "../../helpers";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices";
import { getUserInitials } from "../../helpers";
import { setSelectedProduct } from "../../redux";

const StyleddBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  borderRadius: 10,
}));

export const UserIcon = () => {
  const navigate = useNavigate();
  const [anchor, setAnchor] = useState(null);
  const { userData } = useUser();
  const dispatch = useDispatch();

  return (
    <Box sx={{ display: "flex" }}>
      <IconButton onClick={(e) => setAnchor(e.currentTarget)}>
        <Avatar>{getUserInitials(userData)}</Avatar>
      </IconButton>
      <Menu
        anchorEl={anchor}
        keepMounted
        open={Boolean(anchor)}
        onClose={() => {
          setAnchor(null);
        }}
      >
        <StyleddBox>
          {!userData && (
            <>
              <MenuItem>
                <Button onClick={() => navigate("/login")}>Login</Button>
              </MenuItem>
              <MenuItem>
                <Button onClick={() => navigate("/register")}>Register</Button>
              </MenuItem>
            </>
          )}
          {userData && (
            <MenuItem>
              <Button
                onClick={() => {
                  dispatch(logout());
                  navigate("/");
                }}
              >
                Logout
              </Button>
            </MenuItem>
          )}
          {isUserAdmin(userData) && (
            <MenuItem>
              <Button
                onClick={() => {
                  navigate("/products/new");
                  dispatch(setSelectedProduct(null));
                }}
              >
                Add product
              </Button>
            </MenuItem>
          )}
        </StyleddBox>
      </Menu>
    </Box>
  );
};
