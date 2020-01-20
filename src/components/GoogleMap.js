import React from 'react';
import styles from './mapStyles';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyACXe8HurUeBrn3796pbzGIr-KAT0StmNE',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: (
      <div
        className="section is-hidden-mobile"
        style={{
          background: '#e1eff2',
          height: `40rem`,
          padding: '0rem',
        }}
      />
    ),
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap
    defaultZoom={17}
    defaultCenter={{ lat: 51.685733, lng: -0.012903 }}
    options={{ styles }}
  >
    {props.isMarkerShown && (
      <Marker position={{ lat: 51.685733, lng: -0.012903 }} />
    )}
  </GoogleMap>
));

export default MyMapComponent;
