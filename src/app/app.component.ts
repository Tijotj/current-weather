import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherInfoComponent } from './weather-info/weather-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,WeatherInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'weatherDashboard';
}
