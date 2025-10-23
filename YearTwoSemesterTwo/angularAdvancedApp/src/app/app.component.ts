import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { WeatherService } from './services/weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'data-app';

  // Dog data
  breeds: any[] = [];
  selectedBreedId: string = '';
  selectedBreed: any = null;

  // Weather data
  weatherConditions:any[] = [];
  weatherTemperature:string[] = [];


  constructor(private dataService:DataService, private weatherService:WeatherService) {
    // We shouldn't put the logic here. Just initialization
  }

  ngOnInit(): void {
    // subscribing to invoke asynchronously

    // Load all breeds on init
    this.dataService.getAllBreeds().subscribe((data) => {
      this.breeds = data;
    });

    this.weatherService.getWeatherData().subscribe((data) => {
      this.weatherConditions = data.weather; // data.weather looks for "weather" in JSON file
      this.weatherTemperature[0] = (data.main.temp - 273.15).toFixed(2); // taking only temperature and converting it from Kelvin to Celsius
      this.weatherTemperature[1] = (data.main.feels_like - 273.15).toFixed(2);
    });
  }

   onSelectBreed(): void {
    if (!this.selectedBreedId) {
      this.selectedBreed = null;
      return;
    }
    this.selectedBreed = this.breeds.find(b => b.id == this.selectedBreedId);
  }
}
