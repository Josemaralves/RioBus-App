export function FindLine(id){
    return fetch('https://riobus-service.herokuapp.com/lines/' + id,{
        method: 'GET',
    }).then(response => response.json())
    .catch(error => { console.log(error) })
}