export function FindRoutes(){
    return fetch('https://riobus-service.herokuapp.com/lines',{
        method: 'GET', 
    }).then(response => response.json())
    .catch(error => { console.log(error) })
}