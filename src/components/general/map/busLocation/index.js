import React, {useEffect, useState} from 'react';
import BusMarker from "../../../tracking/busMarker";
import {FindAndAnimateBusMarker} from "../../../../service/AnimateBusService";

const BusLocation = ({lineId}) => {
    const [callingApi, setCallingApi] = useState(false)
    const [locations, setLocations] = useState([])

    useEffect( () => {
        setTimeout(() => {
            if(!callingApi)
                FindAndAnimateBusMarker(lineId, locations, setLocations, setCallingApi)
        }, 1000)
    }, [callingApi])

    return locations.map((location) => <BusMarker key={location.id} coordinates={location.track} />)
}

export default BusLocation