import { Component } from '@angular/core';
import { AComponent } from './a/a.component'; // Import AComponent
import { BComponent } from './b/b.component'; // Import BComponent

@Component({
  selector: 'root-directive',
  imports: [AComponent, BComponent], // Add AComponent, BComponent to imports
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';
  // Add name and age properties
  name: string = "Karol";
  age: number = 99;
}
