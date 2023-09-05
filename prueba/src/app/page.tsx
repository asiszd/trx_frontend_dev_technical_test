"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { colors, LinearProgress } from "@mui/material";
import { Inter, Comfortaa } from "next/font/google";
import Vehiculos from "@/components/Vehiculos/Vehiculos";
//import MapboxMap from "@/components/Mapas/Mapas";
import dynamic from "next/dynamic";
import { purple, red } from "@mui/material/colors";

const MapboxMap = dynamic(() => import("@/components/Mapas/Mapas"), {
  ssr: false,
});
const comfortaa = Comfortaa({ subsets: ["latin"] });

function Copyright(props: any) {
  // HACERLO COMO FOOTER EN OTRO COMPONENTE

  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      fontFamily="Comfortaa"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  typography: {
    fontFamily: comfortaa,
    allVariants: {
      color: "white",
    },
  },
  palette: {
    primary: {
      main: colors.common["white"],
    },
  },
});

export default function SignInSide() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <MapboxMap />
      </Grid>
    </ThemeProvider>
  );
}
