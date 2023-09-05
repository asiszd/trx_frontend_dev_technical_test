import { Copyright } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import NavBar from "../NavBar";
import { resolve } from "path";
import { styled } from "@mui/material";
import vehiculos from "../../../public/carMock.json";

const WhiteBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: white;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`;

export default async function Vehiculos() {
  let res = await fetch(
    "https://5qewqsdgrl.execute-api.us-west-1.amazonaws.com//challenge/route/dummy"
  );
  let data = await (res?.headers?.get("content-type")?.includes("json")
    ? res.json()
    : res.text());
  return (
    <>
      <NavBar />
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          fontFamily="Comfortaa"
          fontWeight="bold"
        >
          Dirección
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <Typography fontFamily="Comfortaa" fontWeight="bold" color="white">
            <div style={{ paddingBottom: "20px" }}>
              <img src="from.png" style={{ paddingRight: "10px" }} />
              <label style={{ paddingRight: "10px", opacity: "50%" }}>
                De:
              </label>
              <WhiteBorderTextField
                id="origen"
                color="primary"
                focused
                variant="standard"
                fullWidth
                InputProps={{
                  readOnly: true,
                  style: { color: "white" },
                }}
                value={data[0].geojson.features[0].properties.name}
              />
            </div>
            <div>
              <img src="to.png" style={{ paddingRight: "10px" }} />
              <label style={{ paddingRight: "10px", opacity: "50%" }}>
                Hacia:
              </label>
              <WhiteBorderTextField
                id="origen"
                color="primary"
                focused
                variant="standard"
                fullWidth
                InputProps={{
                  readOnly: true,
                  style: { color: "white" },
                }}
                value={data[0].geojson.features[1].properties.name}
              />
            </div>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
