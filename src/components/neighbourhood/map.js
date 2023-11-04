import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '75vh'
};

const center = {
  lat: 43.666482646125196,
  lng: -79.31716837450223
};

const darkModeStyle = [
        { "elementType": "geometry", "stylers": [{ "color": "#242f3e" }] },
        { "elementType": "labels.text.stroke", "stylers": [{ "color": "#242f3e" }] },
        { "elementType": "labels.text.fill", "stylers": [{ "color": "#746855" }] },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [{ "color": "#d59563" }]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [{ "color": "#d59563" }]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{ "color": "#263c3f" }]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [{ "color": "#6b9a76" }]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [{ "color": "#38414e" }]
        },
        {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [{ "color": "#212a37" }]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [{ "color": "#9ca5b3" }]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{ "color": "#746855" }]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{ "color": "#1f2835" }]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [{ "color": "#f3d19c" }]
        },
        {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [{ "color": "#2f3948" }]
        },
        {
          "featureType": "transit.station",
          "elementType": "labels.text.fill",
          "stylers": [{ "color": "#d59563" }]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{ "color": "#17263c" }]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [{ "color": "#515c6d" }]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.stroke",
          "stylers": [{ "color": "#17263c" }]
        }   
];

const Map = () => {
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLoadMap(true);
    }
  }, []);

  return loadMap ? (
    <LoadScript googleMapsApiKey={process.env.GATSBY_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={16}
        options={{
          styles: darkModeStyle,
          mapTypeControl: false
        }}
      >
        <Marker
          position={center}
        />
      </GoogleMap>
    </LoadScript>
  ) : <div>Loading...</div>;
};

export default Map;
