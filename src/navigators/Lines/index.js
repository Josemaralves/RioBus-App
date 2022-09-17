import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ItinerarioScreen from "../../screens/itinerary/home/ItineraryScreen";
import LineScreen from "../../screens/line/home/LineScreen";

const Stack = createNativeStackNavigator();
const LinesNavigator = () => {
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

export default LinesNavigator