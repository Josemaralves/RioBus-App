import {MarkerAnimated} from "react-native-maps";
import {View} from "react-native";
import IconStops from "../iconStops";

const StopsMarker = ({stops}) => {
    if (!stops){
        return
    }

    return(
        <>
            {stops.map( stop =>
                <MarkerAnimated key={stop.stopId} coordinate={stop} >
                    <View>
                        <IconStops/>
                    </View>
                </MarkerAnimated>
            )}
        </>
    )
}

export default StopsMarker

