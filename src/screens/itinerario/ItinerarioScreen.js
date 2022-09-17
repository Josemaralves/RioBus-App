import React, { useEffect, useState, Text } from 'react';
import {  View, FlatList } from 'react-native';
import LinhasCard from '../../components/itinerary/LinhasCard';
import { FindRoutes } from '../../controllers/RoutesController';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function() {

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

  const [routes, setRoutes] = useState([]) 

  useEffect(() => {
    FindRoutes().then((routesApi) => {
      console.log(routes)
      setRoutes(routesApi)
    })
  }, [])

return (
  <View style={styles.container}>
    <FlatList
      key={item => item.id}
      data={itinerarios}
      renderItem={({item}) => <LinhasCard item={item}/>}
    />
  </View>
)
}
