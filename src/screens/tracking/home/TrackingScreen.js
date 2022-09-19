import MapView from 'react-native-maps';
import React, {useState} from 'react';
import { FindBusByLine } from '../../../controllers/BusController';
import BusMarker from '../../../components/tracking/busMarker'
import {Text, TouchableHighlight} from "react-native";

const initPosition = {
  latitude: -22.89331,
  longitude: -43.1926,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

const TrackingScreen = () => {
  const [locations, setLocations] = useState([])

  const animate = () => {
    FindBusByLine("474").then(newLocations => {
      setLocations(locations => locations.filter(oldLo => newLocations.find(newLo => newLo.id === oldLo.id)))
      newLocations.forEach(newLocation => {
        const oldLocation = locations.find((lo) => lo.id === newLocation.id)
        if(oldLocation){
          if(oldLocation.track.latitude._value !== newLocation.track.latitude._value && oldLocation.track.longitude._value !== newLocation.track.longitude._value) {
            oldLocation.track.timing({
              ...newLocation.track,
              useNativeDriver: false,
              duration: 10000
            }).start()
          }
        }else{
          setLocations((locations) => [...locations, newLocation])
        }
      })

    })
  }

  // setInterval(() => animate(), 10000)

  return (
    <MapView
      initialRegion={initPosition}
      style={{ flex: 1 }}
    >
      <TouchableHighlight onPress={() => animate()}><Text>aa</Text></TouchableHighlight>

      {locations.map(
        location => <BusMarker key={location.id} location={location} />
      )}

    </MapView>
  )
}

export default TrackingScreen
