import MapView, {Polyline} from 'react-native-maps';
import React, { useState } from 'react';
import { FindBusByLine } from '../../controllers/BusController';
import MarkerView from '../../components/map/BusMarker'

export default function() {
  const initPosition = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  const [locations, setLocations] = useState([])

  const animate = () => {
    FindBusByLine("").then((newLocations) => {

      setLocations(locations => locations.filter(oldLo => newLocations.find(newLo => newLo.id === oldLo.id)))
      newLocations.forEach(newLocation => {
        const oldLocation = locations.find(lo => lo.id === newLocation.id)
        if(oldLocation){
          if(oldLocation !== newLocation) {
            oldLocation.track.timing({
              ...newLocation.track,
              useNativeDriver: false,
              duration: 10000
            }).start()
          }
        }else{
          setLocations(locations => [...locations, newLocation])
        }
      })
      
    })
  }

  setInterval(animate, 9999999999)

  return (
    <MapView
      initialRegion={initPosition}
      style={{ flex: 1 }}
    >
      {locations.map(
        location => <MarkerView key={location.id} location={location} />
      )}

      <Polyline
		coordinates={[
			{ latitude: -22.9169555190183, longitude: -43.1882839653747 },
			{ latitude: -22.9157460018822, longitude: -43.1882513958419 },
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider}
		strokeWidth={5}
	/>

    </MapView>
  )
}
