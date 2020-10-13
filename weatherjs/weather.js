class Weather{
constructor(city, state)
{
  this.apiKey='1c3e08e4a8a8a1cd2007f2a834727946';
  this.city=city;
  this.state=state;
}

//fetch weather from api
async getWeather()
{
  const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=metric&appid=${this.apiKey}`);
  
  const responseData= await response.json();

  return responseData; 
}

//change weather location

changeLocation(city, state)
{
  this.city = city;
  this.state= state;
}

}