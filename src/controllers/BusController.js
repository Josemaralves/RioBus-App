import { AnimatedRegion } from 'react-native-maps';

const requestConfig = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}

const URL = "https://riobus-service.herokuapp.com/track?lineId="

export function FindBusByLine(line){
    return fetch(URL + line,
        requestConfig).then(response => response.json())
      .then(tracks => tracks.map(track => ({
            "id": track.ordem,
            "track": new AnimatedRegion({
              latitude: track.latitude,
              longitude: track.longitude
            })
          })
        )).catch(error => { console.log(error) })
}