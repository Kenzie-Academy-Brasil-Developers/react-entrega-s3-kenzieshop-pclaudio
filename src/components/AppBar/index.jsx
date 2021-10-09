import { useState } from "react";
import { useHistory } from "react-router";
import { Box, Logo } from "./styles";
import { Home } from "@mui/icons-material";
import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar as MuiAppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

const AppBar = () => {
  const history = useHistory();

  const [showDisplay, setShowDisplay] = useState(
    history.location.pathname === "/"
  );

  const handleShowDisplay = () => {
    setShowDisplay(!showDisplay);
    history.push("/");
  };

  const handleShowCart = () => {
    setShowDisplay(!showDisplay);
    history.push("/cart");
  };

  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Logo size="large" />

        <Typography variant="h6" component="div">
          KenzieShop
        </Typography>

        <Box />

        {showDisplay ? (
          <IconButton size="large" color="inherit" onClick={handleShowCart}>
            <Badge badgeContent={17} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
        ) : (
          <IconButton size="large" color="inherit" onClick={handleShowDisplay}>
            <Home />
          </IconButton>
        )}
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
