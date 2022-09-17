import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import MapaScreen from "./src/screens/mapa/MapaScreen";
import ItinerarioScreen from "./src/screens/itinerario/ItinerarioScreen"
import LineScreen from "./src/screens/line/LineScreen";
import { StatusBar } from 'expo-status-bar';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Mapa"
          options={{
            tabBarIcon: () => { return <IconMaterial name="routes" size={18} color="#999" /> }
          }}
          component={MapaScreen} />
        <Tab.Screen name="Itinerarios"
          options={{
            tabBarIcon: () => { return <IconAwesome name="bus" size={18} color="#999" /> }
          }}
          component={Nav} />
      </Tab.Navigator>
      <StatusBar style="auto" />

    </NavigationContainer>
  );
}


const Stack = createNativeStackNavigator();
const Nav = () =>{
  return(
    <Stack.Navigator>
        <Stack.Screen 
            name="Linhas"
            component={ItinerarioScreen}
        />
        <Stack.Screen
            name="LineScreen"
            component={LineScreen}
        />
    </Stack.Navigator>
  )
}
