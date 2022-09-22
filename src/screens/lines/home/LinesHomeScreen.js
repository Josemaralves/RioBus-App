import React, { useEffect, useState } from 'react';
import {  View, FlatList } from 'react-native';
import LinhasCard from '../../../components/lines/listCard';
import { FindRoutes } from '../../../controllers/RoutesController';
import Styles from './styles';

const LinesHomeScreen = () => {
  const [routes, setRoutes] = useState([]) 

  useEffect(() => {
    FindRoutes().then((routesApi) => {
      setRoutes(routesApi)
    })
  }, [])

return (
  <View style={Styles.container}>
    <FlatList
      key={item => item.id}
      data={routes}
      renderItem={({item}) => <LinhasCard item={item}/>}
    />
  </View>
)
}

export default LinesHomeScreen
