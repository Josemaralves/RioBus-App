export function FindRoutes(){
    return fetch('https://riobus-service.herokuapp.com/routes',{
        method: 'GET', 
    }).then(response => response.json())
    .catch(error => { console.log(error) })
}