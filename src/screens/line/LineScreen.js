import MapView, {Polyline} from 'react-native-maps';
import { View } from "react-native";
import React, { useEffect, useState } from 'react';

export default function(props){
    const initPosition = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }

      const [shapes, setShapes] = useState([])
      useEffect(() => {
        fetch('https://riobus-service.herokuapp.com/lines/O0010AAA0',{
            method: 'GET', 
        }).then(response => response.json())
        .then(shapes => setShapes(shapes))
        .catch(error => { console.log(error) })
    
      })

    return (
        <View style={{flex:1}}>
            <MapView initialRegion={initPosition} style={{ flex: 1 }}>
                <Polyline
                    coordinates={shapes}
                    strokeColor="#000"
                    strokeWidth={5}
                />
            </MapView>

        </View>

      )
}