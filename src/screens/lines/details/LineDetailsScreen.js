import MapView, {MarkerAnimated, Polyline} from 'react-native-maps';
import {View, ActivityIndicator, FlatList} from "react-native";
import React, { useEffect, useState } from 'react';
import IconAwesome from "react-native-vector-icons/FontAwesome5";
import ListStopsCard from "../../../components/lines/listStopsCard";
import {FindLine} from "../../../controllers/LinesController";

const initPosition = {
    latitude: -22.89331,
    longitude: -43.1926,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
}

const LineDetailsScreen = ({route}) => {
    const [line, setLine] = useState()
    const [isLoading, setLoading] = useState(true)

      useEffect(() => {
        FindLine(route.params.lineId)
        .then(result => setLine(result))
            .then(() => setLoading(false))
        .catch(error => { console.log(error) })
      },[])

    return (
        <View style={{flex:1}}>
            {isLoading ? (
                <ActivityIndicator/>
            ) :(
                <View style={{flex : 1}}>
                <MapView initialRegion={initPosition} style={{ flex: 2 }}>
                    <Polyline
                        coordinates={line.itineraries}
                        strokeColor="#000"
                        strokeWidth={5}
                    />
                    {line.stops.map( stop =>
                        <MarkerAnimated key={stop.stopId} coordinate={stop} >
                            <View>
                                <IconAwesome name="sign" size={15} color="#999" />
                            </View>
                        </MarkerAnimated>
                    )}

                </MapView>
                    <FlatList style={{flex : 1}} data={line.stops} renderItem={({item}) => <ListStopsCard stop={item}/>}/>
                </View>
            ) }
        </View>
      )
}

export default LineDetailsScreen