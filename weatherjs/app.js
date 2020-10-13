//make object of storage class
const storage= new Storage();

//get stored location data
const weatherLocation=storage.getLocationData();

//make object of weather class
const weather= new Weather(weatherLocation.city,weatherLocation.state);

//make object of ui
const ui=new UI();



//get weather on Dom Load
document.addEventListener('DOMContentLoaded', getWeather);

//change location event
document.getElementById('w-change-btn').addEventListener('click',(e)=>
{
  const city=document.getElementById('city').value;
  const state=document.getElementById('state').value;
  //change location
  weather.changeLocation(city,state);
  
  //set location in LS
  storage.setLocationData(city,state);

  //get and display weather
  getWeather();

  //close modal here jquery will be used
  $('#locModal').modal('hide');

});

function getWeather()
{
weather.getWeather()
.then(results=>
  {
  // console.log(results);
   ui.paint(results);
  })
.catch(err=> console.log(err));
}