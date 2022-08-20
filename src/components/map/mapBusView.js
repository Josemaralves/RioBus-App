import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import MapView from 'react-native-maps';
import { Marker, AnimatedRegion, MarkerAnimated } from 'react-native-maps';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';


export default function MapBusView(){
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
  </MapView>)
}