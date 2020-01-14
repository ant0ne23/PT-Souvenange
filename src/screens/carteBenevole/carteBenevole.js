import React from 'react'

import Paper from '@material-ui/core/Paper';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { useStyles } from './carteBenevole.style'



const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={5}
    defaultCenter={{ lat: 48, lng: 2 }}
  >
  </GoogleMap>
))



export const CarteBenevole = () => {
    const classes = useStyles()

  return (
    <div className={classes.ensemble}>
      <div className={classes.title}>
        <h1>Carte des bénévoles photographes</h1>
      </div>
        <Paper className={classes.paper}>
          <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `800px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </Paper>

    </div>
  )
}