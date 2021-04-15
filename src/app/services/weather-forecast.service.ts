import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  constructor(private http : HttpClient) { }

  getWeatherByCity(cityName) : Observable<any> {
    const APTKey = '542ffd081e67f4512b705f89d2a611b2';
    let url = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + APTKey;
    const header = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin' : '*'
    }
    const requestOptions = {
      headers: new HttpHeaders(header)
    };
    return this.http.get(url,requestOptions);

  }

}
