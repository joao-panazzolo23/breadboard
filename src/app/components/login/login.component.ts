import {Component} from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
//export = visible to other components
export class LoginComponent {
  username: string | null = null;
  password: string | null = null;


}
