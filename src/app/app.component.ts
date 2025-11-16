import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {DefaultButtonComponent} from './shared/components/default-button/default-button.component';
import {ButtonLabels, ButtonTypes} from './shared/enums/buttons.enum';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, DefaultButtonComponent],
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

  protected readonly ButtonTypes = ButtonTypes;
}


