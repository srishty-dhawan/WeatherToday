class  UI{
  constructor()
  {
    this.location=document.getElementById('w-location');
    this.desc=document.getElementById('w-desc');
    this.string=document.getElementById('w-string');
    this.details=document.getElementById('w-details');
    //this.icon=document.getElementById('w-icon');
    this.humidity=document.getElementById('w-humidity');
    this.feelsLike=document.getElementById('w-feels-like');
    this.pressure=document.getElementById('w-pressure');
    this.wind=document.getElementById('w-wind');
  }

 paint(weather)
  {
    
      this.location.textContent= `Country: ${weather.sys.country}`;
      this.desc.textContent= `Description: ${weather.weather[0].description}`;
      this.string.textContent=`Temperature: ${ weather.main.temp} deg C`;
      //this.icon.setAttribute('src', weather.weather.icon);
      this.humidity.textContent=`Humidity: ${weather.main.humidity}`;
      this.feelsLike.textContent=`Feels Like: ${weather.main.feels_like} deg C `;
      this.pressure.textContent=`Pressure: ${weather.main.pressure}`;
      this.wind.textContent=`Wind Speed: ${weather.wind.speed}`;
    
  }
}