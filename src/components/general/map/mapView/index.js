import MapView from "react-native-maps";
import BusLocation from "../busLocation";
import Styles from "./styles";

const MapAbstract = ({initPosition, lineId}) => {
    return (
        <MapView initialRegion={initPosition} style={Styles.mapView}>
            <BusLocation lineId={lineId}/>
        </MapView>
    )
}

export default MapAbstract