
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from "./src/components/home"
import ItineraryScreen from "./src/components/itinerary.js"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Mapa"
          options={{
            tabBarIcon: () => { return <IconMaterial name="routes" size={18} color="#999" /> }
          }}
          component={HomeScreen} />
        <Tab.Screen name="Itinerarios"
          options={{
            tabBarIcon: () => { return <IconAwesome name="bus" size={18} color="#999" /> }
          }}
          component={ItineraryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
