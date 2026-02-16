import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'breadboard';

  ///change it to a new service, reusability purposes
  toggleTheme() {
    const root = document.documentElement;
    const dark = root.classList.toggle('dark-theme');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }
}


