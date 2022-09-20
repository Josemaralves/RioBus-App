import {FindBusByLine} from "../controllers/BusController";

const duration = 5000

export function FindAndAnimateBusMarker(lineId,locations, setLocations, setCallingApi) {
    setCallingApi(true)

    const toAdd = []
    const toUpdate = []

    FindBusByLine(lineId).then(newLocations => {
        setLocations(locations => locations.filter(oldLo => newLocations.find(newLo => newLo.id === oldLo.id)))
        newLocations.forEach(newLocation => {
            const oldLocation = locations.find(lo => lo.id === newLocation.id)
            if(oldLocation){
                if(oldLocation.track.latitude._value !== newLocation.track.latitude._value && oldLocation.track.longitude._value !== newLocation.track.longitude._value) {
                    toUpdate.push(oldLocation.track.timing({
                        ...newLocation.track,
                        useNativeDriver: false,
                        duration
                    }))

                }
            }else{
                toAdd.push(newLocation)
            }
        })

        if (toAdd.length !== 0){
            setLocations((locations) => locations.concat(toAdd))
        }
        if (toUpdate.length !== 0){
            toUpdate.forEach(animation => animation.start())
        }

        setCallingApi(false)
    })
}