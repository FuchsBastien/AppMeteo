const CLEAPI = 'dc6213a6c3ef2d2335152ed981eadef4';
let resultatsAPI ;

/*fonction si localisation activé*/
if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {

        console.log(position);
        let long = position.coords.longitude;
        let lat = position.coords.latitude;
        AppelAPI(long,lat);

    }, () => {
        alert(`Vous avez refusé la géolocalisation, l'application ne peur pas fonctionner, veuillez l'activer.!`)
    })
}

function AppelAPI(long, lat) {
      //console.log(long, lat)
      //on ajoute ${} et &exclude=minutely&units=metric&lang=fr pour exclure min, unité en m et en français
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${CLEAPI}`)
      .then((reponse) => {
          return reponse.json();
      })
      .then((data) => {
          console.log(data)
      }) 
   
}         