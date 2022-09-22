import MapView from "react-native-maps";
import BusLocation from "../busLocation";
import Styles from "./styles";
import ShapeLines from "../shapeLines";
import StopsLocation from "../stopsLocation";

const MapAbstract = ({initPosition, lineId, shapeLinesCoordinates, stops}) => {
    return (
        <MapView initialRegion={initPosition} style={Styles.mapView}>
            <BusLocation lineId={lineId}/>
            <ShapeLines coordinates={shapeLinesCoordinates} />
            <StopsLocation stops={stops}/>
        </MapView>
    )
}

export default MapAbstract