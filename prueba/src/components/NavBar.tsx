import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import { Padding } from "@mui/icons-material";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <Avatar src="logoYellow.png" />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            fontFamily="Comfortaa"
            style={{ paddingLeft: "10px" }}
          >
            Taxi
          </Typography>
          <Typography
            fontFamily="Comfortaa"
            sx={{
              borderBottom: "2px solid",
              borderBottomColor: "#FECB33",
            }}
            display="inline"
          >
            Seleccionar viaje
          </Typography>{" "}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
