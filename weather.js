



// fetch(`https://weather-api99.p.rapidapi.com/weather?city=${userCity}`,options)
// .then(response=>response.json())
// .then(data=> console.log(data))
// .catch(err=> console.error(err))

// or

// const fun=async()=>{
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
//   }

/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

// // API_KEY for maps api
// let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
const getWeatherData = (city) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    //HINT: Use template literals to create a url with input and an API key
  
    const options =  {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '70882fccbamshbb223f86ee25e3ap159225jsn358fb605a545',
          'X-RapidAPI-Host': 'weather-api99.p.rapidapi.com'
      }
  };
    
  return fetch(`https://weather-api99.p.rapidapi.com/weather?city=${city}`,options)
  .then(response=>response.json())
  .then(data=> data)
  .catch(err=> console.error(err))
    //CODE GOES HERE
  }
  
  /**
   * Retrieve city input and get the weather data
   * HINT: Use the promise returned from getWeatherData()
   */
  const searchCity = async() => {
    const city = document.getElementById('city-input').value;
    // CODE GOES HERE
    // console.log(city)
    const data= await getWeatherData(city) 
    showWeatherData(data)
    
  
  }
  
  /**
   * Show the weather data in HTML
   * HINT: make sure to console log the weatherData to see how the data looks like
   */
  const showWeatherData = (weatherData) => {
    //CODE GOES HERE
    document.getElementbyid('temp').innerText= weatherData.main.temp
    document.getElementbyid('city-name').innerText= weatherData.name
   document.getElementbyid('weather-type').innerText= weatherData.weather[0].main
    document.getElementbyid('min-temp').innerText= weatherData.main.temp_min
    document.getElementbyid('max-temp').innerText= weatherData.main.temp_max
  }
  
  // 
  /* * chisia */
  
  