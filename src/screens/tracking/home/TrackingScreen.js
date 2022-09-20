import React from 'react';
import MapAbstract from "../../../components/general/map/mapView";

const initPosition = {
  latitude: -22.89331,
  longitude: -43.1926,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}
const TrackingScreen = () => {
  return (
      <MapAbstract lineId="" initPosition={initPosition} />
  )
}

export default TrackingScreen
