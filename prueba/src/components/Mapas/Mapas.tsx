import * as React from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { error } from "console";
import image from "next/image";
import { Grid, Paper } from "@mui/material";
import Vehiculos from "../Vehiculos/Vehiculos";

function MapboxMap() {
  const [map, setMap] = React.useState<mapboxgl.Map>();
  const mapNode = React.useRef(null);

  React.useEffect(() => {
    const node = mapNode.current;
    // if the window object is not found, that means
    // the component is rendered on the server
    // or the dom node is not initialized, then return early
    if (typeof window === "undefined" || node === null) return;
    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken:
        "pk.eyJ1IjoiYXNpc3pkIiwiYSI6ImNsbTVsN2F5eTB4czkzZXFyeDR0anRiM2UifQ.O1d1RsqP17b0auNaTX69Kw",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-99.23627, 19.48797],
      zoom: 12,
    });
    mapboxMap.on("load", async () => {
      let response = await fetch(
        "https://5qewqsdgrl.execute-api.us-west-1.amazonaws.com//challenge/route/dummy"
      );
      let data = await (response?.headers?.get("content-type")?.includes("json")
        ? response.json()
        : response.text());

      mapboxMap.addSource("routes", {
        type: "geojson",
        data: data[0].geojson,
      });

      mapboxMap.addLayer({
        id: "routes-layer",
        type: "line",
        source: "routes",
        paint: {
          "line-width": 4,
          "line-color": "black",
        },
      });
      mapboxMap.loadImage("mapMarker2.png", (error, image) => {
        if (error) throw error;
        mapboxMap.addImage("marker", image);
      });
      mapboxMap.addLayer({
        id: "routes-endpoints",
        type: "symbol",
        source: "routes",
        layout: {
          "icon-image": "marker",
          "icon-size": 0.026,
        },
        filter: ["==", "$type", "Point"],
      });
      mapboxMap.scrollZoom.disable();
      mapboxMap.dragPan.disable();
      mapboxMap.addControl(new mapboxgl.NavigationControl());
    });

    setMap(mapboxMap);

    return () => {
      mapboxMap.remove();
    };
  }, []);

  return (
    <>
      <Grid
        item
        xs={12}
        sm={4}
        md={4}
        style={{
          background: "linear-gradient(to right, #4647A6 , #4C4AAF)",
          //background: "linear-gradient(to right, #302A6A , #7968AA)",
        }}
        component={Paper}
        elevation={6}
        square
      >
        <Vehiculos />
      </Grid>
      <Grid item xs={12} sm={8} md={8} sx={{ height: "100%" }}>
        <div ref={mapNode} style={{ width: "100%", height: "100%" }} />
      </Grid>
    </>
  );
}

export default MapboxMap;
