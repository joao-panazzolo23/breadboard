import {Component} from '@angular/core';
import {AuthService} from '../../core/services/auth-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
//export = visible to other components
export class LoginComponent {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  username: string | null = null;
  password: string | null = null;

  login() {
    if (this.username === null || this.password === null) return;

    this.auth.login(this.username!, this.password)
      .subscribe({
        next: res => {
          this.auth.setToken(res.token);
          this.router.navigate(['/dashboard']);
        },
        error: () => alert('Login inválido')
      });
  }
}
