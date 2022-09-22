import {Polyline} from "react-native-maps";

const ShapeLines = ({coordinates}) => {
    if (!coordinates){
        return
    }

    return <Polyline coordinates={coordinates} strokeColor="#000" strokeWidth={5}/>

}

export default ShapeLines