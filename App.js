import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import MapaScreen from "./src/screens/tracking/home/TrackingScreen";
import LinesNavigator from "./src/navigators/Lines"
import { StatusBar } from 'expo-status-bar';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Mapa"
          options={{
            tabBarIcon: () => { return <IconMaterial name="routes" size={18} color="#999" /> }
          }}
          component={MapaScreen} />
        <Tab.Screen name="Paradas"
            options={{
                headerShown: false,
                tabBarIcon: () => { return <IconAwesome name="bus" size={18} color="#999" /> }
            }}
            component={LinesNavigator} />
        <Tab.Screen name="LinhasB"
                    options={{
                        headerShown: false,
                        tabBarIcon: () => { return <IconAwesome name="bus" size={18} color="#999" /> }
          }}
                    component={LinesNavigator} />
      </Tab.Navigator>
        <StatusBar style="auto" />

    </NavigationContainer>
  );
}

export default App


