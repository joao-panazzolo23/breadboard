import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../../../core/services/auth-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  // private login$!: Observable<LoginResponse>;
  protected loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {

    this.loginForm = this.createLoginForm();
  }

  createLoginForm() {
    return this.fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  public login() {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) return;

    const {email, password} = this.loginForm.getRawValue();

    this.authService.login(email, password)
      .subscribe({
        next: () => this.router.navigate(['/home']),
        error: () => console.log('login failed')
      });
  }

  protected isFieldValid(field: string) {
    return this.loginForm.get(field)?.touched
      && this.loginForm.get(field)?.invalid;
  }
}
