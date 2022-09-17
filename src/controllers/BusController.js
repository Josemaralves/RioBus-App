import { AnimatedRegion } from 'react-native-maps';

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export function FindBusByLine(line){
    return fetch('https://riobus-service.herokuapp.com/track/474',{
        method: 'GET',
        headers: headers    
    }).then(response => response.json())
      .then(tracks => tracks.map(track => ({
            "id": track.ordem,
            "track": new AnimatedRegion({
              latitude: parseFloat(track.latitude),
              longitude: parseFloat(track.longitude)
            })
          })
        )).catch(error => { console.log(error) })
}