<template>
  <div id="mapContainer" class="basemap"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

// import bneArr from "../data/bne_coord.js";
// import nthsydArr from "../data/nthsyd_coord";
// import sydArr from "../data/syd_coord";
// import miscArr from "../data/misc_coord";
// import waverleyArr from "../data/waverley_coord";
// import manlyArr from "../data/manly_coord";

export default {
  name: "BaseMap",

  data() {
    return {
      accessToken: "pk.eyJ1IjoiZHJhZ29uanVsIiwiYSI6ImNsM285aWx6bzBtOHIzZ211MnI1d29jNHYifQ.0ov9ua9NtfbUGYsqSMaUbw",
    };
  },

  methods: {},

  computed: {},

  mounted() {
    mapboxgl.accessToken = this.accessToken;

    //map
    const map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/dragonjul/cl3o9wf8x001n14liemqv2pzm",
      center: [151.2017, -33.8899],
      zoom: 13,
      maxBounds: [
        [131.715546, -42.957145], //SW
        [160.84116, -10.179416], //NE
      ],
    });

    //add search box / geocoder
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    });

    map.addControl(geocoder, "top-left");

    // add navigation control - zooms
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    // add geolocate control
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        // When active, receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draws an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true,
      }),
      "bottom-right"
    );
  },
};
</script>

<style>
#mapContainer {
  flex-grow: 1;
}

/* styling for custom marker */
.marker {
  background-image: url("../assets/logo-white.svg");
  background-size: cover;
  width: 35px;
  height: 35px;
  cursor: pointer;
}
</style>