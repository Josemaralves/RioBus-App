import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LinesHomeScreen from "../../screens/lines/home/LinesHomeScreen";
import LineDetailsScreen from "../../screens/lines/details/LineDetailsScreen";

const Stack = createNativeStackNavigator();
const LinesNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Linhas"
                component={LinesHomeScreen}
            />
            <Stack.Screen
                name="LineScreen"
                component={LineDetailsScreen}
            />
        </Stack.Navigator>
    )
}

export default LinesNavigator