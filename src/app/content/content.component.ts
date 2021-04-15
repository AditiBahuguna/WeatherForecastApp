import { Component } from '@angular/core';
import { WeatherForecastService } from '../services/weather-forecast.service'
// import { WeatherDataModal } from '../modal/weather-data.model'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  // weatherData : WeatherDataModal;
  items: [];
  cityName : String;
  constructor( private weatherForecastService : WeatherForecastService) { }

  getWeatherByCity() {
    this.weatherForecastService.getWeatherByCity(this.cityName).subscribe((data)=>{
      // this.weatherData = data;
      this.items = data.list;
    });
  }

}
