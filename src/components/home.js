import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import MapView from 'react-native-maps';
import { AnimatedRegion, MarkerAnimated } from 'react-native-maps';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import React, { useState } from 'react';
import { FindBusByLine } from '../controllers/BusController';

export default function HomeScreen(props) {

  const LATITUDE = 37.78825;
  const LONGITUDE = -122.4324;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * 16;

  const [locations, setLocations] = useState([
    {
      id: "1",
      track: new AnimatedRegion({
        latitude: 37.78500,
        longitude: -122.4310
      })
    },
    {
      id: "2",
      track: new AnimatedRegion({
        latitude: 37.78900,
        longitude: -122.1310
      })
    }
  ])

  const animate = () => {

    FindBusByLine("1").then((newLocations) => {
      // newLocations.unshift({
      //   id: "1",
      //   track: new AnimatedRegion({
      //     latitude: 38.78500,
      //     longitude: -122.9310
      //   })
      // })

      setLocations(locations => locations.filter(oldLo => newLocations.find(newLo => newLo.id === oldLo.id)))
      newLocations.forEach(newLocation => {
        const oldLocation = locations.find(lo => lo.id === newLocation.id)
        if(oldLocation){
          if(oldLocation !== newLocation) {
            oldLocation.track.timing({
              ...newLocation.track,
              useNativeDriver: false,
              duration: 5000
            }).start()
          }
        }else{
          setLocations(locations => [...locations, newLocation])
        }
      })
    })
  }

  return (
    <MapView
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={{ flex: 1 }}
    >
      {locations.map(location => {
        return( <MarkerAnimated key={location.id} coordinate={location.track} >
          <View>
            <IconAwesome name="bus" size={30} color="#999" />
          </View> 
        </MarkerAnimated>)
      })}

      <View >
          <TouchableOpacity
            onPress={() => animate()}
          >
            <Text>Animate</Text>
          </TouchableOpacity>
        </View>
    </MapView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});