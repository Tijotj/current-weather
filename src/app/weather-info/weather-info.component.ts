import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather-info',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './weather-info.component.html',
  styleUrl: './weather-info.component.scss'
})
export class WeatherInfoComponent {
  city: string = '';
  weatherData: any = null;
  error: string | null = null;
  unit: 'C' | 'F' = 'C';
  private apiKey: string = '768708eb3435c8648fbcf970a2cd8a83';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

constructor(private http: HttpClient){}
showDetails() {
  this.error = null;
  this.http.get(`${this.apiUrl}?q=${this.city}&appid=${this.apiKey}&units=metric`).subscribe({
    next: (v) => { this.weatherData = v; },
    error: (err) => {
      this.error = 'Location not found';
      this.weatherData = null;
    },
    complete: () => console.info('Complete')
  });
}
convertTemp(temp: number): number {
  return this.unit === 'C'? temp : temp*1.8 + 32; 
}
}
