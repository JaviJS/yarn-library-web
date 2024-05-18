import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import "@fontsource/roboto-mono";
import "@fontsource/roboto-mono/400.css";
import "@fontsource/roboto-mono/400-italic.css"; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'yarn-library-web';

  constructor() {}
}
