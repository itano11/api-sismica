const aplicacion = document.querySelector('#contenido')

actualizar()

function actualizar(){
     const url = 'https://api-sismologia-chile.herokuapp.com'
     contenido.innerHTML = ''
     fetch(url)
     .then(respuesta => respuesta.json())
     .then(datos => {
               tabla(datos)
     });
}

//.catch(error => console.log(error))

function tabla(datos){
     console.log(datos)
     contenido.innerHTML = ''
     for(let valor of datos){
          contenido.innerHTML += `
          <tr>
               <th scope="row">${ valor.referencia }</th>
               <td>${ valor.horaLocal }</td>
               <td>${ valor.horaUtc }</td>
               <td>${ valor.magnitud }</td>
          </tr>
          `
     }
}




/*
window.addEventListener('load', ()=>{

     //Variables latitud y longitud
     let lat
     let lon

     //Variable hora y fecha
     //let horaFecha = document.getElementById("")

     // Variable ubicación
     let ubicacion = document.getElementById("ubicacion")

     //Variable profundidad
     let profundidad = document.getElementById("profundidad")

     //Variable magnitud
     let magnitud = document.getElementById("magnitud")

     //Obteniendo nuestra geolocalización
     if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition( posicion => {
              lat = posicion.coords.latitude
              lon = posicion.coords.longitude

              //Ubicación actual
              const url = `https://api-sismologia-chile.herokuapp.com/`

              //Ubicación por ciudad y país
              //const url = `https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid=dbb7c7c3621c886a78cf0263d156f9c5`


              //Ubicación por nombre de ciudad, incorporando lenguaje español y sistema métrico
              //const url = `https://api.openweathermap.org/data/2.5/weather?q=santiago&lang=es&units=metric&appid=dbb7c7c3621c886a78cf0263d156f9c5`

              //Utilizando fetch para las respuestas de la API en formato JSON en este caso
              fetch(url)
               .then( response => { return response.json() })
               .then( datos => {

                    //Trabajando la hora y fecha
                    let horaFecha_ = (datos[0].horaUtc)

                    //Mostrando la hora y fecha
                    horaFecha.textContent = `${horaFecha_}`

                    //Trabajando la humedad
                    let ubicacion_ = Math.round(datos.main.humidity)
                    //Mostrando variable temp por el navegador, mediante el id del componente DOM
                    humedad.textContent = `${hum} %`

                    //Trabajando la temperatura
//                    let temp = Math.round(datos.main.temp)
                    //Mostrando variable temp por el navegador, mediante el id del componente DOM
//                    temperaturaValor.textContent = `${temp} °C`

                    //Trabajando la descripción del tiempo
//                    let descr = datos.weather[0].description
                    //Mostrando variable descr por el navegador, mediante el id del componente DOM
//                    temperaturaDescripcion.textContent = descr.toUpperCase()

                    //Trabajando con la ubicacion
                    let ubicaLat = datos[0].latitud
                    Let ubicaLon = datos[0].longitud
                    //Mostrando ubicacion
                    ubicaLat.textContent = ubicaLat

                    //Trabajando con la velocidad del viento
//                    let veloc = datos.wind.speed

                    //Mostrando variable veloc por el navegador, mediante el id del componente DOM
//                    vientoVelocidad.textContent = `${veloc} m/s`

                    //Trabajando con la magnitud
                    let magnitud_ = datos[0].magnitud
                    //Mostrando variable sens por el navegador, mediante el id del componente DOM
                    magnitud.textContent = `${magnitud_}`

                    //Trabajando con el ícono
                    //Para íconos estáticos
                    /*
                    let iconCode = datos.weather[0].icon
                    const urlIcon = `https://openweathermap.org/img/wn/${iconCode}.png`
                    console.log(urlIcon)


                    //Para íconos
                    console.log(datos)
/*                    switch (datos.weather[0].main) {

                         case 'Thunderstorm':
                              iconoAnimado.src='img/tormenta.jpg'
                              console.log('TORMENTA');
                              break;
                         case 'Drizzle':
                              iconoAnimado.src='img/lluvia.jpg'
                              console.log('LLOVIZNA');
                              break;
                         case 'Rain':
                              iconoAnimado.src='img/lluvia.jpg'
                              console.log('LLUVIA');
                              break;
                         case 'Snow':
                              iconoAnimado.src='img/nieve.jpg'
                                console.log('NIEVE');
                              break;
                         case 'Clear':
                                iconoAnimado.src='img/despejadoDiajpg'
                                console.log('DESPEJADO');
                              break;
                         case 'Haze':
                                   iconoAnimado.src='img/niebla.jpg'
                                   console.log('NIEBLA');
                                 break;
                         case 'Atmosphere':
                              iconoAnimado.src='img/parcial.jpg'
                                console.log('PARCIAL');
                                break;
                         case 'Clouds':
                                iconoAnimado.src='img/nublado.jpg'
                                console.log('NUBES');
                                break;
                         default:
                              iconoAnimado.src='img/parcial.jpg'
                              console.log('por defecto');
                    }

               })
               //Uso de catch para capturar posibles errores y mostrarlos por consola
               .catch ( error => {
                    console.log(error)
               })
          } )

     //Creando fecha y hora
     let fechaActual = new Date();

     fecha_Actual.textContent = fechaActual
     }
}
*/