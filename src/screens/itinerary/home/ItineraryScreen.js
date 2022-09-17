import React, { useEffect, useState } from 'react';
import {  View, FlatList } from 'react-native';
import LinhasCard from '../../../components/itinerary/listCard';
import { FindRoutes } from '../../../controllers/RoutesController';
import Styles from './styles';

const itinerarios = [
  {
    shortname: "L012",
    longname: "Caxias - Barra",
    agencyname: "Internorte"
  },
  {
    shortname: "L012",
    longname: "Caxias - Barra",
    agencyname: "Internorte"
  },
  {
    shortname: "L012",
    longname: "Caxias - Barra",
    agencyname: "Internorte"
  },
  {
    shortname: "L012",
    longname: "Caxias - Barra",
    agencyname: "Internorte"
  },
  {
    shortname: "L012",
    longname: "Caxias - Barra",
    agencyname: "Internorte"
  },
]

const ItineraryScreen = () => {

  const [routes, setRoutes] = useState([]) 

  useEffect(() => {
    FindRoutes().then((routesApi) => {
      console.log(routes)
      setRoutes(routesApi)
    })
  }, [])

return (
  <View style={Styles.container}>
    <FlatList
      key={item => item.id}
      data={itinerarios}
      renderItem={({item}) => <LinhasCard item={item}/>}
    />
  </View>
)
}

export default ItineraryScreen
